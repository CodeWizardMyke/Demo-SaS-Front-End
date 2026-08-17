import React, {  useState } from 'react';

import MainTopBar from '../../components/header/Header';
import SideBar from '../../components/navMenu/SideBar';
import {WorkspaceProvider } from '../../contexts/WorkspaceContext';
import TabBar from 'components/tabBar/TabBar';
import { Outlet } from 'react-router-dom';

import 'styles/AppLayout.css';
import 'styles/formStyles.css';
import 'styles/index.css';
import 'styles/variabels.css';
import 'styles/sizes.css';
import 'styles/modules.css'

const AppLayout = () => {
    const [ toggleSideBar, setToggleSideBar] = useState(true);

    return (
        <main className="container">
            <MainTopBar
                setToggleSideBar={setToggleSideBar}
                toggleSideBar={toggleSideBar}
            />
            <WorkspaceProvider>
                <section className="content">
                    <SideBar/>
                    <div className="workspace">
                        <TabBar/>
                        <div className="workspace-content">
                            <Outlet />
                        </div>
                    </div>
                </section>
            </WorkspaceProvider>
        </main>
    );
}

export default AppLayout;
