import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import Loading from "../../components/loading/Loading";
import MainTopBar from '../../components/header/Header';
import SideBar from '../../components/sideBar/SideBar';
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
            <section className="content">
                {
                    loading && <Loading/>
                }
                <WorkspaceProvider>
                    {
                        toggleSideBar && <SideBar/>
                    }
                    <Workspace/>
                </WorkspaceProvider>
            </section>
        </main>
    );
}

export default AppLayout;
