import React, { useContext } from 'react';
import { WorkspaceContext } from '../../contexts/WorkspaceContext';

import { IoIosArrowDown } from "react-icons/io";

const SideBarItem = ({
    text,
    path,
    iconArrow,
    opened,
    onClick,
    item,
}) => {

    const {openTab} = useContext(WorkspaceContext)
    const splitText = text ? text.split(' ') : "";

    const firstText =  splitText.length > 0 ? splitText[0] + " " : "";
    const secoundText = splitText.length >= 1 ? splitText[1] + " " : "";
    console.log(secoundText);

    function handleClick(){
        if(item){
            openTab(item)
        }

        if(onClick){
            onClick();
        }
    }

    return (
        <li 
            onClick={handleClick} 
            className={iconArrow === false ? "paddingList" : ""}
        >

            {
                iconArrow && (
                    <IoIosArrowDown
                        className={opened && "rotateArrow" }
                    />
                )
            }

            <span className="first">{firstText ? firstText : ""}</span>
            <span className="secound">{secoundText ? secoundText : ""}</span>

        </li>
    );
}

export default SideBarItem;