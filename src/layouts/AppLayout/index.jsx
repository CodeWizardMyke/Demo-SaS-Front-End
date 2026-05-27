import React, { useState } from 'react';

import MainTopBar from '../../components/header/Header';
import SideBar from '../../components/SideBarApp/SideBar';
import Workspace from '../../components/workspace/Workspace';
import { WorkspaceProvider } from '../../contexts/WorkspaceContext';

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
                    <Workspace/>
                </section>
            </WorkspaceProvider>
        </main>
    );
}

export default AppLayout;
