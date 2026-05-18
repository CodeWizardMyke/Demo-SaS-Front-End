import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

import Loading from "../components/loading/Loading";
import MainTopBar from '../components/main/MainTopBar';
import MainSideBar from '../components/main/MainSideBar';
import SectionTopBar from '../components/sectionTopBar/SectionTopBar';

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
                <section className='sectionAppContent'>
                    <SectionTopBar />
                    <div className="OutletContent">
                        <Outlet/>
                    </div>
                </section>
            </section>
        </main>
    );
}

export default LayoutMain;
