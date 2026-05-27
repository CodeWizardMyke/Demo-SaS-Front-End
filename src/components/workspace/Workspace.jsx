import React, { useContext } from 'react';
import TabBar from './TabBar';
import { Outlet } from 'react-router-dom';

import './Workspace.css';
import { WorkspaceContext } from '../../contexts/WorkspaceContext';
import Loading from '../loading/Loading';

const Workspace = () => {
    const {loading} = useContext(WorkspaceContext)

    return (
       <main className='workspace'>
            {
                loading && <Loading/>
            }
            <section className="tabs-bar">
                <TabBar/>
            </section>
            <section className="workspace-content">
                <Outlet />
            </section>
       </main>
    );
}

export default Workspace;
