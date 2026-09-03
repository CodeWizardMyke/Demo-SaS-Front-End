import DashboardHeader from 'components/dashboard/header/DashboardHeader';
import StatCard from 'components/dashboard/statCard/StatCard';
import React, { useEffect, useState } from 'react';

import { TbBuildingStore, TbCategory, TbPackage } from 'react-icons/tb';

import './dasboardStyles.css';
import RecentActions from 'components/dashboard/recentActions/RecentActions';
import QuickActions from 'components/dashboard/quickActions/QuickActions';
import modules from 'configs/sidebar/modules';

import { dashboardService } from 'services/dashboard/dashboardService';
import { load, save } from 'cache/cache';
import Loading from 'components/loading/Loading';
import CatalogState from 'components/dashboard/catalog';
import CatalogCardCategory from 'components/dashboard/catalog/CatalogCard';
import PercentageProducts from 'components/dashboard/catalog/PercentageProducts';
import StockState from 'components/dashboard/catalog/ad/StockState';
import StockResume from 'components/dashboard/catalog/ad/StockResume';

const DashboardProducts = () => {

    const [data,setData]= useState({});
    
    const {routes} = modules.find( module => module.id === 2);

    const [loading,setLoading] = useState(false);
    
    useEffect(() => {

        const cache = load("dashboard");

        if (cache?.length) {
            setData(cache);
            return;
        }

        const loaderDashboard = async () => {
            setLoading(true);
            try {
                const response = await dashboardService();

                save("dashboard", response.data);

                setData(response.data);

                console.log(response?.data);

            } catch (error) {
                console.log(error);
            }

            setLoading(false);

        };

        loaderDashboard();

    }, []);
    
    return (
        <section className='d_content scroll'>
            {loading && <Loading/>}
            
            <DashboardHeader text={'Visão Geral de Produtos'} />
            
            <div className="stats-grid">

                <StatCard
                    title="Produtos"
                    value={data?.products?.total}
                    icon={<TbPackage />}
                    description={`${data?.products?.enabled} Produtos Ativos no sistema.`}
                    variationType="success"
                />

                <StatCard
                    title="Categorias"
                    value={data?.catalog?.categories?.total}
                    icon={<TbCategory />}
                    description={`${data?.catalog?.categories?.unused} Categorias não utilizadas.`}
                />

                <StatCard
                    title="Marcas"
                    value={data?.catalog?.brands?.total}
                    icon={<TbBuildingStore />}
                    description={`${data?.catalog?.brands?.unused} Marcas não utilizadas.`}
                />

                <StatCard
                    title="Estoque"
                    value={`${data?.stock?.total} un.`}
                    icon={<TbBuildingStore />}
                    description={`${data?.stock?.outOfStock} Produtos sem estoque.`}
                />
            </div>
                            
            <QuickActions actions={routes} />

            <div className="stats-catalog">
                <CatalogState>
                    <CatalogCardCategory 
                        data={data.distribution}
                    />
                    <PercentageProducts
                        products={data.products}
                    />
                </CatalogState>
            </div>

            <div className="stats-catalog">
                <CatalogState>
                    <StockState data={data?.stock?.products} />
                    <StockResume data={data?.financial}/>
                </CatalogState>
            </div>

            <RecentActions
                actions={
                    data?.activities || []
                }
            />

        </section>
    );
}

export default DashboardProducts;
