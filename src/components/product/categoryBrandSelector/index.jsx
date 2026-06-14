import productForm from 'configs/product';
import React, { useCallback, useContext, useEffect, useState } from 'react';

import './style.css';

import { IoIosSearch } from "react-icons/io";
import { LuPlus } from "react-icons/lu";

import Title from 'components/titles/Title';
import Button from 'components/buttons/Button';
import InputSearch from './search';
import CheckedList from './checkList';
import Pagination from './pagination';
import ButtonPrevNextStep from '../ButtonPrevNextStep';
import ItemSelected from './ItemSelected';

import { ProductFormContext } from 'contexts/ProductFormContext';
import { usePaginatedSearch } from './hooks/usePaginatedSearch';
import { servicesConfig } from './services/servicesConfig';
import { AuthContext } from 'contexts/AuthContext';
import { confirmStep } from '../utils/confirmStep';

const CategoryBrandSelector = ({type, createForm }) => {
    const settings = productForm.find( setting => setting.name === type );
    const currentService = servicesConfig[type];
    const { formData, dispatch, step } = useContext(ProductFormContext);

    const [query, setQuery] = useState("");

    let selectData = formData[type];

    const {
        loading,
        
        size, setSize, page, totalPages,
        
        results, err,
        executeSearch,reset

    } = 
        usePaginatedSearch(currentService.service);

    const {setErrMsg} = useContext(AuthContext);

    const handleSearch = useCallback((
        currentPage = 1,
        currentSize = size
    ) => 
    {

        executeSearch(
            query,
            currentPage,
            currentSize
        );
    }, [executeSearch, query, size]);

    useEffect(() => {
        
        reset();

        setQuery("");
    
    }, [type,reset]);

    useEffect(()=>{
    
        if(err) setErrMsg(err);
    
    },[err,setErrMsg]);

    const handlerSelect = (item) => {

        confirmStep( item, type, step,  dispatch  );

    }

    return (
        <div className='scob-content'>
            <div className="cbs-panel">
                <Title 
                    title={settings.title}
                    subTitle={settings.subtitle}
                    svg={settings.svg}
                />

                <div className="p-card card-inline">
                    <InputSearch 
                        query={query} 
                        setQuery={setQuery} 
                        placeholder={settings.placeholder} 
                        svg={ <IoIosSearch/> }
                    />
                    <div className='card-inline'>
                        <Button 
                            text={loading ? "Buscando.." : "buscar"} 
                            svg={ <IoIosSearch/> }
                            css={"bt-search"} 
                            click={() => handleSearch() } 
                        />
                        <Button 
                            text={"Cadastrar"} 
                            svg={ <LuPlus/> } 
                            css={"bt-search create"} 
                            click={ () => createForm({action:type}) }
                        />
                    </div>
                </div>
                <div className="p-card">
                    <CheckedList 
                        data={results} 
                        click={handlerSelect} 
                    />
                    <Pagination 
                        page={page}
                        totalPages={totalPages}
                        size={size}
                        setSize={setSize}
                        onSearch={handleSearch}
                    />
                </div>

                <div className="p-card">
                    <div className="p-card-header">
                        <span>{settings.label} Selecionada.</span>
                    </div>

                    <ItemSelected item={selectData} />
                </div>

            </div>

           <ButtonPrevNextStep/>

        </div>
    );
}

export default CategoryBrandSelector;
