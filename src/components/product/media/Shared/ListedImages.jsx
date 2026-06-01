import React from 'react';
import ItemListedImages from './ItemListedImages';

import { RiStickyNoteAddFill } from "react-icons/ri";
import { IoTrashBinSharp } from "react-icons/io5";
import getPreview from '../utils/getPreview';
import { TbTrashOff } from 'react-icons/tb';

const ListedImages = ({data,setData,setCurrent,current}) => {

    function actionItemList(item){
        setCurrent(item)
    }

    function addMediaImage(event){

        const mediaFile = Array.from(event.target.files);
        
        const previews = mediaFile.map( file => getPreview({
            file:file,
            cloud:false,
            length:data.length
        }));

        setCurrent(previews[0])
        setData(e => [...e, ...previews])
    }

    function cleannerMediaImages(params) {
        setCurrent(null);
        setData([]);
    }

    function removeItem(id){

        const filtedImages = data.filter(file => file.id !== id);

        if(current?.id === id){
            
            const lastImage = filtedImages[filtedImages.length -1];

            setCurrent(
                !!lastImage ? lastImage : null
            );

        }

        setData(filtedImages)
    }

    return (
        <div className='listed'>
            <ul>
                {
                    data.map( (item,index) => (
                        <li
                            key={`ListedThumb_${index}`}
                            onClick={() => actionItemList(item) }
                        >
                            <ItemListedImages data={item} />
                            <TbTrashOff
                                className='remove'
                                onClick={(e) =>{
                                    e.stopPropagation()
                                    removeItem(item.id)
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
