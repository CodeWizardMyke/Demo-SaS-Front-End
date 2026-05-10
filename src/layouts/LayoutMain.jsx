import React from 'react';
import { Outlet } from 'react-router-dom';
import MainTopBar from '../components/main/MainTopBar';
import MainSideBar from '../components/main/MainSideBar';

const LayoutMain = () => {
    return (
        <main className="container">
            <MainTopBar/>
            <section className="content">
                <MainSideBar/>
                <Outlet/>
            </section>
        </main>
    );
}

export default LayoutMain;
