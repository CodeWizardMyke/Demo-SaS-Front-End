import React from 'react';

import { IoImages } from "react-icons/io5";

const ItemListedImages = ({data}) => {
    return (
        <>
            {
                data
                ?(
                    <img src={data.path} alt="any" />
                )
                :(
                    <IoImages className='nosetable' />
                )
            }
        </>
    );
}

export default ItemListedImages;
