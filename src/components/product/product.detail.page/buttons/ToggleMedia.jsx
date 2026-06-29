import Button from 'components/buttons/Button';
import React from 'react';
import { BsYoutube } from 'react-icons/bs';

import './styles.css';

const ToggleMedia = ({showMedia,setShowMedia}) => {

    const handleToggle = () => {
        setShowMedia(!showMedia)
    }

    return (
        <div className='pd-media-buttons'>
            {
                !showMedia 
                    ? <Button 
        
                        svg={<BsYoutube/>}
                        click={handleToggle}
                        css={'media-movie'}
            
                    />
                    : <Button 
    
                        text={'fechar vídeo'}
                        click={handleToggle}
                        css={'media-photo'}

                    />
            }
        </div>
    );
}

export default ToggleMedia;
