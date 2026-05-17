import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const ItemList = ({
    text,
    path,
    iconArrow,
    opened,
    onClick
}) => {

    const navigate = useNavigate();

    function handleClick(){

        if(onClick){
            onClick();
        }

        if(path){
            navigate(path);
        }
    }

    return (
        <li onClick={handleClick} className={!iconArrow && "paddingList"}>

            {
                iconArrow && (
                    <IoIosArrowDown
                        className={opened ? "rotateArrow" : ""}
                    />
                )
            }

            {text}

        </li>
    );
}

export default ItemList;