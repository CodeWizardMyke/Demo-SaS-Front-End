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

            {text}

        </li>
    );
}

export default SideBarItem;