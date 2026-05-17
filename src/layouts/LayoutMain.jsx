import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import MainTopBar from '../components/main/MainTopBar';
import MainSideBar from '../components/main/MainSideBar';
import  Loading from "../components/loading/Loading";
import { AuthContext } from '../contexts/AuthContext';

const LayoutMain = () => {

    const {loading} = useContext(AuthContext);

    return (
        <main className="container">
            <MainTopBar/>
            <section className="content">
                {
                    loading && <Loading/>
                }
                <MainSideBar/>
                <Outlet/>
            </section>
        </main>
    );
}

export default LayoutMain;
