import Button from 'components/buttons/Button';
import React from 'react';
import { FaArrowDown } from 'react-icons/fa6';

const BtTogleMovieManager = ({
    showControls,
    setShowControls
}) => {
    return (
        <Button
            text={
                showControls
                    ? 'Abrir gerenciamento de vídeo'
                    : 'Fechar gerenciamento de vídeo'
            } 
            
            css={`bt-manager-movie ${showControls ? 'active' : ''}`}

            click={ e => setShowControls(!showControls)}
            
            svg={<FaArrowDown/>}
        />
    );
}

export default BtTogleMovieManager;
