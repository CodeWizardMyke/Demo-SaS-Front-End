import React, { useState } from 'react';

import './SideBar.css';

import modules from '../../configs/sidebar/modules';

import SearchField from '../search/SearchField';
import SideBarNav from './SideBarNav';

import { GoSidebarCollapse } from 'react-icons/go';

const SideBar = () => {

    const [query, setQuery] = useState('');
    const [openedModule, setOpenedModule] = useState(null);

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const filteredModules = modules.filter(module =>
        module.text.toLowerCase().includes(query.toLowerCase())
    );

    function handleToggleModule(id){

        setOpenedModule(prev =>
            prev === id ? null : id
        );

    }

    function handleToggleSidebar(){

        setIsSidebarOpen(prev => !prev);

    }

    return (

        <aside
            className={`aside ${!isSidebarOpen ? "closed" : ""}`}
        >

            <div className="asideTopContent">

                <div className="services">

                    <GoSidebarCollapse
                        className={`bt-toggleAsideApp ${
                            !isSidebarOpen ? "active" : ""
                        }`}
                        onClick={handleToggleSidebar}
                    />

                </div>

                {
                    isSidebarOpen && (
                        <SearchField setQuery={setQuery} />
                    )
                }

            </div>

            {
                isSidebarOpen && (

                    <SideBarNav
                        filteredModules={filteredModules}
                        modules={modules}
                        openedModule={openedModule}
                        handleToggleModule={handleToggleModule}
                    />

                )
            }

        </aside>

    );

}

export default SideBar;