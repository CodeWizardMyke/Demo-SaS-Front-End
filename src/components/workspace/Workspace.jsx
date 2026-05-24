import React from 'react';
import TabBar from './TabBar';
import { Outlet } from 'react-router-dom';

import './Workspace.css';

const Workspace = () => {
    return (
       <main className='workspace'>
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
