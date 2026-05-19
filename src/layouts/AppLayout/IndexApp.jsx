import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import Loading from "../../components/loading/Loading";
import MainTopBar from '../../components/header/Header';
import SideBar from '../../components/sideBar/SideBar';
import SectionTopBar from '../../components/workspace/TabBar';
import Workspace from '../../components/workspace/Workspace';

const IndexApp = () => {
    const {loading} = useContext(AuthContext);

    return (
        <main className="container">
            <MainTopBar/>
            <section className="content">
                {
                    loading && <Loading/>
                }
                <SideBar/>
                <Workspace/>
            </section>
        </main>
    );
}

export default IndexApp;
