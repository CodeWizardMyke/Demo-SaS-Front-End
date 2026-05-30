import React, { useContext, useState } from 'react';

import TabItem from './TabItem';

import { WorkspaceContext } from '../../contexts/WorkspaceContext';
import ButtonAsideToggle from '../buttons/toggle/ButtonAsideToggle';

const TabBar = () => {
    const {openedTabs, toggleSideBar} = useContext(WorkspaceContext);
    const [toggleButton, setToggleButton] = useState(false);

    function handlerClicked(){
        toggleSideBar();
        setToggleButton(!toggleButton)
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
            <ButtonAsideToggle 
                collapsed={toggleButton}
                clickEvent={handlerClicked}
                clickAble={!!openedTabs.length}
            />
        </div>
    );
}

export default TabBar;
