import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";

import './styles.css';
import { FaCheck } from 'react-icons/fa';

const CheckList = ({data = [], click}) => {
    const [selectedId,setSelectedId] = useState(null);

    const handlerSelectedItem = (item,id) => {
        setSelectedId(id);
        click(item);
    };

    return (
        <div className='content-check'>
            <div className='check-hr'>
                <div>
                    <span>Resultados encontrados: <strong>{data?.length}</strong> </span>
                </div>
            </div>

            <div className="contentList">
                <ul className=' scroll'>
                    {
                        data?.map( item => {
                           
                            const name = 
                                item.brand_name ||
                                item.category_name;

                            const id = 
                                item.brand_id ||
                                item.category_id;

                            return (
                            <li
                                    key={`contentList:${name}_ID:${id}`}
                                    className={`check-item ${
                                        selectedId === id ? "active" : ""
                                    }`}
                                    onClick={() => handlerSelectedItem(item,id)}
                                >
                                    <div className="check-icon">
                                        {selectedId === id && <FaCheck />}
                                    </div>

                                    <span>{name}</span>

                                    <IoIosArrowForward />
                                </li>
                            )
                        })
                    }
                </ul>
   
            </div>

        </div>
    );
}

export default CheckList;
