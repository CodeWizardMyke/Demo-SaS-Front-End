import React from 'react';

import { GoSidebarExpand } from "react-icons/go";
import { GoSidebarCollapse } from "react-icons/go";

import './styles.css';

const ButtonAsideToggle = ({collapsed,clickEvent, clickAble}) => {

    function clickedButton() {
        if(!!clickEvent && clickAble){
            clickEvent();
        }
    };

    const cssDisabled = !clickAble && "disabled";

    return (
        <>
            {
                collapsed 
                    ? <GoSidebarCollapse 
                        className={`goSideBar ${cssDisabled} ${!collapsed && "active"}`}
                        onClick={clickedButton}              
                    /> 
                    : <GoSidebarExpand 
                        className={`goSideBar ${cssDisabled} ${!collapsed && "active"}`}
                        onClick={clickedButton}              
                    />
            }
        </>
    );
}

export default ButtonAsideToggle;
