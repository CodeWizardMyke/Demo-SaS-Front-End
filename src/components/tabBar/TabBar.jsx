import React, { useContext, useState } from 'react';

import TabItem from './TabItem';
import './TabBar.css';

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
       <div className="tabs-bar">

            <div className="tabs-wrapper scroll">
                <ul>
                    {openedTabs.map((item, i) => (
                        <TabItem
                            key={item.id ?? i}
                            item={item}
                        />
                    ))}
                </ul>
            </div>

            <ButtonAsideToggle
                collapsed={toggleButton}
                clickEvent={handlerClicked}
                clickAble={openedTabs.length > 0}
            />

    </div>
    );
}

export default TabBar;
