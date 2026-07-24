import DashboardHeader from 'components/dashboard/header/DashboardHeader';
import StatCard from 'components/dashboard/statCard/StatCard';
import React, { useEffect, useState } from 'react';

import { TbBuildingStore, TbCategory, TbPackage } from 'react-icons/tb';

import './dasboardStyles.css';
import RecentActions from 'components/dashboard/recentActions/RecentActions';
import QuickActions from 'components/dashboard/quickActions/QuickActions';
import CategoryDistribution from 'components/dashboard/CategoryDistribution/CategoryDistribution';
import modules from 'configs/sidebar/modules';

import { dashboardService } from 'services/dashboard/dashboardService';
import { load, save } from 'cache/cache';

const DashboardProducts = () => {

    const [data,setData]= useState({});
    
    const {routes} = modules.find( module => module.id === 2);
    
    useEffect(() => {

        const cache = load("dashboard");

        if (cache?.length) {
            setData(cache);
            return;
        }

        const loaderDashboard = async () => {

            try {
                const response = await dashboardService();

                save("dashboard", response.data);

                setData(response.data);

            } catch (error) {
                console.log(error);
            }
        };

        loaderDashboard();

    }, []);
    
    return (
        <section className='d_content scroll'>
            
            <DashboardHeader text={'Visão Geral de Produtos'} />
            
            <div className="stats-grid">

                <StatCard
                    title="Produtos"
                    value={data?.totalProducts}
                    icon={<TbPackage />}
                    description="Produtos cadastrados"
                    variationType="success"
                />

                <StatCard
                    title="Categorias"
                    value={data?.totalCategories}
                    icon={<TbCategory />}
                    description="Categorias ativas"
                />

                <StatCard
                    title="Marcas"
                    value={data?.totalBrands}
                    icon={<TbBuildingStore />}
                    description="Marcas cadastradas"
                />

            </div>
                            
            <QuickActions actions={routes} />

            <RecentActions
                actions={
                    data?.recentProducts || []
                }
            />

            <div className="d_activity_feed">
                <CategoryDistribution
                    data={data?.distributed}
                />
            </div>

        </section>
    );
}

export default DashboardProducts;
