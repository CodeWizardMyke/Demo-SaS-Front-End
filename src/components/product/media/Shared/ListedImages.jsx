import React from 'react';
import ItemListedImages from './ItemListedImages';

import { RiStickyNoteAddFill } from "react-icons/ri";
import { IoTrashBinSharp } from "react-icons/io5";
import getPreview from '../utils/getPreview';
import { TbTrashOff } from 'react-icons/tb';
import delPreview from '../utils/delPreview';
import updateCurrent from '../utils/updateCurrent';
import { getId } from '../utils/getId';

const ListedImages = ({data,setData,setCurrent,current}) => {

    function actionItemList(item){
        
        setCurrent(item);
        
    };

    function addMediaImage(event){

        const file = getPreview(event);

        setCurrent(file[0]);
      
        setData(prev => [ ...prev, ...file ]);

    };

    function cleannerMediaImages(params) {
      
        setCurrent(null);
      
        setData([]);
      
    };

    function removeItem(id){

        const {removeApi, filteredData} = delPreview(data, id);

        if(removeApi){
            console.log("[Implementar state para salvar array de id removidos]",removeApi);
        }
        
        const updatedCurrentImage = updateCurrent({
            data:filteredData,
            current,
            id
        });
        
        setCurrent(updatedCurrentImage);

        setData(filteredData);

    };

    return (
        <div className='listed'>
            <ul>
                {
                    data.map( (item,index) => (
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
