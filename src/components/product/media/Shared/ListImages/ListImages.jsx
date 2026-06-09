import React from 'react';
import './styles.css';

import { FaTrash } from "react-icons/fa";
import { useImageControl } from '../hook';

const ListImages = ({thumbnails}) => {

    const {removeImage, setCurrent} = useImageControl();

    const handlerRemove = (item) => {
        removeImage(item);
    }

    const handlerSelection = (item) => {
        setCurrent(item)
    }

    return (
        <ul className='list-images'>
            {
                thumbnails.map((item,index) => (

                    <li key={item.id+ "/" +index} >
                       <img 
                            src={item.path} 
                            alt={item.alt} 
                            onClick={()=> handlerSelection(item)}
                        />
                        <div className="remove-content">
                              <FaTrash
                                className='remove-item'
                                onClick={() => handlerRemove(item) }
                            />
                        </div>
                    </li>
                    
                ))
            }
        </ul>
    );
}

export default ListImages;
