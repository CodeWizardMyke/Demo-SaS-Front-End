import React from 'react';

import { IoImages } from "react-icons/io5";

const CurrentImage = ({data}) => {
    return (
        <div className='current-image'>
            {
                data 
                ? (
                    <img src={data.path} alt="any" />
                ) 
                :(
                   <div className="no-image">
                        <IoImages />
                   </div>
                )
            }
        </div>
    );
}

export default CurrentImage;
