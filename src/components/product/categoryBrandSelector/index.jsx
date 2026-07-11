import productForm from 'configs/product';
import React, { useCallback, useContext, useEffect, useState } from 'react';

import { IoIosSearch } from "react-icons/io";
import { LuPlus } from "react-icons/lu";

import Title from 'components/titles/Title';
import Button from 'components/buttons/Button';
import InputSearch from './search';
import CheckedList from './checkList';
import Pagination from '../../pagination';
import ItemSelected from './ItemSelected';

import { ProductFormContext } from 'contexts/ProductFormContext';
import { usePaginatedSearch } from './hooks/usePaginatedSearch';
import { servicesConfig } from './services/servicesConfig';
import { AuthContext } from 'contexts/AuthContext';
import { confirmStep } from '../utils/confirmStep';
import ErrorFieldList from 'components/Error/forms/ErrorFieldList';

const CategoryBrandSelector = ({type, createForm }) => {
    const [query, setQuery] = useState("");
    
    const settings = productForm.find( setting => setting.name === type );
    const currentService = servicesConfig[type];
    const { formData, dispatch, step, errors} = useContext(ProductFormContext);
    
    const fieldError = {
        brand: errors?.fk_brand_id,
        category: errors?.fk_category_id
    }[type];

    const field = {
        brand:formData.brandProduct,
        category:formData.categoryProduct
    };

    const {
        loading,
        
        size, setSize, page, totalPages,
        
        results, err,
        executeSearch,reset

    } = usePaginatedSearch(currentService.service);

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
        
    }, [type,reset,]);
    
    useEffect(()=>{
    
        if(err) setErrMsg(err);
    
    },[err,setErrMsg]);
    
    const handlerSelect = (item) => {
        field[type] = {...item};

        confirmStep( field[type], type, step,  dispatch );
        
    }

    return (
        <div className='md-content'>
                <Title 
                    title={settings.title}
                    subTitle={settings.subtitle}
                    svg={settings.svg}
                />

                <div className="md-card-row">
                    <InputSearch 
                        query={query} 
                        setQuery={setQuery} 
                        placeholder={settings.placeholder} 
                        svg={ <IoIosSearch/> }
                    />
                    <div className='row-content'>
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
                            click={ () => createForm(type) }
                        />
                    </div>
                </div>

                <div className="md-card">
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

                <div className="md-card">
                    <div>
                        {
                            fieldError && <ErrorFieldList fields={fieldError} />
                        }

                        {
                            !fieldError && `${currentService.label} selecionada` 
                        }
                    </div>

                    <ItemSelected data={field[type]} />
                </div>
        </div>
    );
}

export default CategoryBrandSelector;
