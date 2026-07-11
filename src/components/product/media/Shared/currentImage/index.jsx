import React from 'react';

import './styles.css';
import { MdInsertPhoto } from "react-icons/md";
import Button from 'components/buttons/Button';

const CurrentImage = ({current, toggle}) => {


    return (
        <div className='current-image'>
            <Button 
                css={'bt-closeCurrentImage'}
                text={'x'}
                click={ e => toggle(null) }
            />

            {
                current 
                ?(
                    <img src={current.path} alt={current.alt} />
                )
                :(
                    <div className="insert-image">
                        <MdInsertPhoto />
                        <h3>Insira uma imagem para visualizar...</h3>
                    </div>
                )

            }
        </div>
    );
}

export default CurrentImage;
