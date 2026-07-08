import React, { useContext } from 'react';

import './style.css';
import Button from 'components/buttons/Button';
import { WorkspaceContext } from 'contexts/WorkspaceContext';

const PopupSucess = ({text, css}) => {

    const {modalSucess, setModalSucess} = useContext(WorkspaceContext);

    setTimeout(()=> {
        setModalSucess(null);
    },6000);

    const currentText = text
        ? text
        : 'cadastrado com sucesso!'

    return (
        <div className={`popupSucess ${css}`}>
            <div className="popupSucess-content">
                <h2>{currentText}</h2>
                <Button text={'fechar'} click={ () => setModalSucess(null)}/>
                <div className="msg">
                    <h3>Título do item</h3>
                    <span>
                        {modalSucess?.title}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default PopupSucess;
