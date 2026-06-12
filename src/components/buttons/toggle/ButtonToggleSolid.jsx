import React from 'react';

import { BiSolidToggleLeft } from "react-icons/bi";
import { BiSolidToggleRight } from "react-icons/bi";

const ButtonToggleSolid = ({state,click}) => {
    return (
        <>

            {
                state 
                ? <BiSolidToggleLeft onClick={click} className='toggle-solid'/>
                : <BiSolidToggleRight onClick={click} className='toggle-solid' />
            }
        
        </>
    );
}

export default ButtonToggleSolid;
