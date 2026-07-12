import React, { useEffect, useMemo, useRef } from 'react';

import './styles.css';

const ErrorPopup = ({ errMsg, setErrMsg }) => {
    const dialogRef = useRef(null);

    const message = useMemo(() => {
        if (!errMsg) return '';

        if (typeof errMsg === 'string') return errMsg;

        if (Array.isArray(errMsg)) {
            return errMsg.map(error => error.msg || String(error)).join('\n');
        }

        if (typeof errMsg === 'object') {
            return errMsg.msg || JSON.stringify(errMsg);
        }

        return String(errMsg);
    }, [errMsg]);

    useEffect(() => {
        const dialog = dialogRef.current;

        if (!dialog) return;

        if (errMsg) {
            if (!dialog.open) {
                dialog.showModal();
            }
        } else if (dialog.open) {
            dialog.close();
        }
    }, [errMsg]);

    function handleClose() {
        dialogRef.current?.close();
        setErrMsg(null);
    }

    return (
        <dialog
            ref={dialogRef}
            className='popup'
            onCancel={handleClose}
        >
            <div className='header'>
                <span className='icon' >⚠️</span>
                <h3>Ocorreu um erro</h3>
            </div>

            <p className='message'>
                {message}
            </p>

            <button
                type="button"
                className="btn-df"
                onClick={handleClose}
            >
                Fechar
            </button>
        </dialog>
    );
};


export default ErrorPopup;