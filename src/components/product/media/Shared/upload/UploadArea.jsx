import React, { useRef } from 'react';
import { BsTrash } from "react-icons/bs";
import { useImageControl } from '../hook';

import './styles.css';

import Button from 'components/buttons/Button';

const UploadArea = ({svg}) => {
    const inputRef = useRef();

    const {addImage, cleanImages} = useImageControl();

    const handleClick = () =>{
        inputRef.current.click();
    };

    const handleDrop = (e) => {
        e.preventDefault();

        const file = e.dataTransfer.files

        if (file) {
            addImage(file)
        }
    };

    const handlerFileChange = (e) => {
        const file = e.target.files

        if(file){
            addImage(file)
        }

    };

    const handlerCleanImages = () => {
        cleanImages();
    }

    return (
        <div className="upload-area-content">
            <div className='upload-area'
                onClick={handleClick}
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
            >
                <div className="icon-content">
                    {svg}
                </div>
                <h2>Arraste e solte imagens aqui</h2>
                <span>ou clique para selecionar do computador</span>
                <h3>Formatos aceitos JPG, PNG, WEBP.</h3> 
            </div>

            <input 
                ref={inputRef}
                type="file" 
                accept='image/*'
                hidden
                multiple
                onChange={handlerFileChange}
            />
            <div className="controls">
                <Button text={"Remover todas"} css={'btn clean'} svg={<BsTrash/>} click={handlerCleanImages} />
            </div>
        </div>
    );
}

export default UploadArea;
