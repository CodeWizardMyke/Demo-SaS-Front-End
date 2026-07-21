import productForm from 'configs/product';
import React, { useCallback, useContext, useEffect, useState } from 'react';

import { IoIosSearch } from "react-icons/io";

import Title from 'components/titles/Title';
import Button from 'components/buttons/Button';

import { AuthContext } from 'contexts/AuthContext';
import { usePaginatedSearch } from 'components/product/categoryBrandSelector/hooks/usePaginatedSearch';
import InputSearch from 'components/product/categoryBrandSelector/search';
import Pagination from 'components/pagination';
import CheckList from 'components/product/categoryBrandSelector/checkList';
import ItemSelected from 'components/product/categoryBrandSelector/ItemSelected';
import { searchCategories } from 'services/product/categoryService';
import { load } from 'cache/cache';

const CategorySearchForm = ({selected, setSelected, open, text}) => {
    const [query, setQuery] = useState("");
    
    const settings = productForm.find( setting => setting.name === "category");
  
    const {
        loading,
        
        size, setSize, page,

        totalPages,setTotalPages,
        
        results,setResults,

        err,
        executeSearch

    } = usePaginatedSearch(searchCategories, true);
    
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

        const cache = load("categories");

        if(cache){

            setResults(cache?.rows);

            setTotalPages(cache?.totalPages);

        }

    },[setResults,setTotalPages]);
    
    useEffect(()=>{
    
        if(err) setErrMsg(err);
    
    },[err,setErrMsg]);
    
    const handlerSelect = (item) => {
        setSelected(item);
    }

    const handleClickToUpdate = ()=>{
        if(selected){
            open(true);
        };
    }

    return (
        <div className='md-content space-between'>
                <Title 
                    title={ text?.title || settings.title}
                    subTitle={text?.subTitle || settings.subtitle}
                    svg={settings.svg}
                />

                <div className="md-card-row ">
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
                    </div>
                </div>

                <div className="md-card">
                    <CheckList
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

                    </div>

                    <ItemSelected data={selected} />
                </div>
                    <Button 

                        text={
                            selected 
                                ? "Prosseguir."
                                : "Selecione uma categoria para continuar."
                        }

                        click={handleClickToUpdate}

                        css={`bt-l-accept ${!selected &&  "disabled"}`}
                />
        </div>
    );
}

export default CategorySearchForm;
