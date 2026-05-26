import React, { useContext, useState } from 'react';

import TabItem from './TabItem';

import { WorkspaceContext } from '../../contexts/WorkspaceContext';
import { GoSidebarExpand } from "react-icons/go";

const TabBar = () => {
    const {openedTabs, togglePanelAside} = useContext(WorkspaceContext);
    const [expanded, setExpanded] = useState(false);

    function handlerClicked(){
        togglePanelAside();
        setExpanded(!expanded)
    }

    return (
        <div className='tab-bar-content'>
            <ul>
                {
                    openedTabs.map((item,i) => 
                    <TabItem
                        key={`tabItem${i}`}
                        item={item}
                    />
                )
                }
            </ul>
            <div className="bt-expandContent">
                <GoSidebarExpand
                className={`bt-sidebar-expand ${expanded ? "active" : ""}`}
                onClick={handlerClicked}
            />
            </div>
        </div>
    );
}

export default TabBar;
