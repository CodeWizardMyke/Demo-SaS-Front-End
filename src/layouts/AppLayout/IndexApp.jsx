import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import Loading from "../../components/loading/Loading";
import MainTopBar from '../../components/header/Header';
import SideBar from '../../components/sideBar/SideBar';
import Workspace from '../../components/workspace/Workspace';
import { WorkspaceProvider } from '../../contexts/WorkspaceContext';

const IndexApp = () => {
    const {loading} = useContext(AuthContext);

    return (
        <main className="container">
            <MainTopBar/>
            <section className="content">
                {
                    loading && <Loading/>
                }
                <WorkspaceProvider>
                    <SideBar/>
                    <Workspace/>
                </WorkspaceProvider>
            </section>
        </main>
    );
}

export default IndexApp;
