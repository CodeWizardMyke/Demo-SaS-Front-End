import React, { useContext } from 'react';

import './style.css';
import Button from 'components/buttons/Button';
import { WorkspaceContext } from 'contexts/WorkspaceContext';

const PopupSucess = () => {

    const {modalSucess, setModalSucess} = useContext(WorkspaceContext);

    setTimeout(()=> {
        setModalSucess(null);
    },6000);

    return (
        <div className='popupSucess'>
            <div className="popupSucess-content">
                <h2>cadastrado com sucesso!</h2>
                <Button text={'fechar'} click={ () => setModalSucess(null)}/>
                <div className="msg">
                    <span>
                        {modalSucess?.title}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default PopupSucess;
