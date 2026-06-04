import React from 'react';

import { TbTrashOff } from 'react-icons/tb';
import { RiStickyNoteAddFill } from "react-icons/ri";
import { IoTrashBinSharp } from "react-icons/io5";

import { getId } from '../utils/getId';
import getPreview from '../utils/getPreview';
import updateCurrent from '../utils/updateCurrent';
import thumbnailFilter from '../utils/thumbnailFilter';

import ItemListedImages from './ItemListedImages';

const ListedImages = ({dispatch, step, thumbnails, setCurrent, current}) => {
    
    function actionItemList(item){
        
        setCurrent(item);
        
    };

    function addMediaImage(event){

        const files = getPreview(event);

        setCurrent(files[0]);
      
        dispatch({
            type: "ADD_IMAGES",
            payload: files
        });

    };

    function cleannerMediaImages(params) {
      setCurrent(null)

       dispatch({
            type: "CLEAR_IMAGES"
        });
    };

    function removeItem(id) {

        const filtredThumbnails = thumbnailFilter(thumbnails, id);

        const newCurrent = updateCurrent(filtredThumbnails, current, id)

        setCurrent(newCurrent)
        
        dispatch({ type: "REMOVE_IMAGE",  payload: id});

    }

    return (
        <div className='listed'>
            <ul>
                {
                    thumbnails.map( (item,index) => (
                        <li
                            key={getId(item)}
                            onClick={() => actionItemList(item) }
                        >
                            <ItemListedImages data={item} />
                            <TbTrashOff
                                className='remove'
                                onClick={(e) =>{
                                    e.stopPropagation()
                                    removeItem(getId(item));
                                }}
                            />
                        </li>
                    ))
                }
            </ul>
            <div className="control">

                <input 
                    type="file" 
                    id="addMedia" 
                    multiple
                    accept="image/*"
                    onChange={addMediaImage}    
                />

                <label htmlFor="addMedia">
                    <RiStickyNoteAddFill 
                        className='bt btAdd'
                    />
                </label>

                <IoTrashBinSharp
                    className='bt btRem'
                    onClick={cleannerMediaImages}
                />

            </div>
        </div>
    );
}

export default ListedImages;
