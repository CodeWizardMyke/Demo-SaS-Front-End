import React from 'react';
import { IoCloseOutline } from "react-icons/io5";

const TabItem = ({onClick,text,close}) => {

    function handlerOnClick(){
        if(onClick){
            onClick();
        }
    }

    function handlerClose(){
        if(close){
            close();
        }
    }

    return (
        <li>
            <span> {text ? text : "Default Tag"} </span>
            <IoCloseOutline className='closeSvg'/>
        </li>
    );
}

export default TabItem;
