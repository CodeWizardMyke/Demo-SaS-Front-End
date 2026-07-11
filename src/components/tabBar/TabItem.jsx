import React, { useContext } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { WorkspaceContext } from '../../contexts/WorkspaceContext';

import './TabItem.css';

const TabItem = ({item}) => {
    const {openTab,closeTab} = useContext(WorkspaceContext);

    return (
        <li
            onClick={()=> openTab(item)}
        >
            <span>  {item.text} </span>
                <IoCloseOutline 
                    onClick={(e)=>{
                        e.stopPropagation();
                        closeTab(item.path);
                    }}
                    className='closeSvg'
                />
        </li>
    );
}

export default TabItem;
