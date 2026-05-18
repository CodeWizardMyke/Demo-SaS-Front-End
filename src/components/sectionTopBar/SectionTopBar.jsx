import React from 'react';
import { IoCloseOutline } from "react-icons/io5";

import './SectionTopBar.css'

const SectionTopBar = () => {
    return (
        <div className='SectionTopBarContent'>
            <ul>
                <li>
                    <span> novo produto </span>
                    <IoCloseOutline className='closeSvg'/>
                </li>
            </ul>
        </div>
    );
}

export default SectionTopBar;
