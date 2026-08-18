import React, { useState } from 'react';

import './SideBar.css';

import modules from '../../configs/sidebar/modules';

import SearchField from '../search/SearchField';
import SideBarNav from './SideBarNav';

import ButtonAsideToggle from '../buttons/toggle/ButtonAsideToggle'

const SideBar = () => {
    const [toggleSideBar, setToggleSideBar] = useState(true);
    const [openedModule, setOpenedModule] = useState(null);
    const [query, setQuery] = useState('');

    const filteredModules = modules.filter(module =>
        module.text.toLowerCase().includes(query.toLowerCase())
    );

    function handleToggleModule(id){

        setOpenedModule(prev =>
            prev === id ? null : id
        );

    }

    function handleToggleSidebar(){
 
        setToggleSideBar(!toggleSideBar);

    }

    return (

        <aside
           className='aside-container'
        >
            <div  className={`aside ${ !toggleSideBar && "closed" }`}>
                
                <div className="asideTopContent">
                    
                    {
                        toggleSideBar && (
                            <SearchField setQuery={setQuery} />
                        )
                    }

                    <div className="services">

                        <ButtonAsideToggle
                            collapsed={!toggleSideBar}
                            clickEvent={handleToggleSidebar}
                            clickAble={true}
                        />

                    </div>

                </div>

                {
                    toggleSideBar && (

                        <SideBarNav
                            filteredModules={filteredModules}
                            modules={modules}
                            openedModule={openedModule}
                            handleToggleModule={handleToggleModule}
                        />

                    )
                }

            </div>
        </aside>

    );

}

export default SideBar;