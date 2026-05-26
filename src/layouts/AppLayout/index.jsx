import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import Loading from "../../components/loading/Loading";
import MainTopBar from '../../components/header/Header';
import SideBar from '../../components/SideBarApp/SideBar';
import Workspace from '../../components/workspace/Workspace';
import { WorkspaceProvider } from '../../contexts/WorkspaceContext';


const AppLayout = () => {
    const {loading} = useContext(AuthContext);
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
                    {
                        loading && <Loading/>
                    }
                    <Workspace/>
                </section>
            </WorkspaceProvider>
        </main>
    );
}

export default AppLayout;
