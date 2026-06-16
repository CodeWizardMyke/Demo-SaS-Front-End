import React from 'react';
import './styles.css';

import { FaTrash } from "react-icons/fa";
import { useImageControl } from '../hook';

const ListImages = ({data, field, propsCurrent }) => {

    const {removeImage, setCurrent} = useImageControl();

    const handlerRemove = (item) => {
        removeImage(item,field);
    }

    const handlerSelection = (item) => {

        if(field === "thumbnails"){
            setCurrent(item,field)
        }

        if(field === "marketing_images"){
            propsCurrent(item);
        }

    }

    return (
        <ul className='list-images'>
            {
                data.map((item,index) => (

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
