import React, { useCallback, useContext, useEffect, useState } from 'react';

import { IoIosSearch } from "react-icons/io";

import Title from 'components/titles/Title';
import Button from 'components/buttons/Button';
import InputSearch from 'components/product/categoryBrandSelector/search';
import Pagination from 'components/pagination';
import CheckList from 'components/product/categoryBrandSelector/checkList';
import ItemSelected from 'components/product/categoryBrandSelector/ItemSelected';

import { AuthContext } from 'contexts/AuthContext';
import { load } from 'cache/cache';
import { useReqPagData } from 'components/product/hooks/useReqPagData';
import { brandSearchService } from 'services/brand/brandSearchService';
import { TbBrandAbstract } from 'react-icons/tb';

const BrandSearchForm = ({selected, setSelected, open, textType }) => {
    const [query, setQuery] = useState("");
    
    const {
        loading,
        
        size, setSize, page,

        totalPages, setTotalPages,
        
        resData, setResData,

        resErrors, request

    } = useReqPagData(
        {
            cacheName:'brand',
            services:brandSearchService,
            queryAllowNull:true
        }
    );
    
    const {setErrMsg} = useContext(AuthContext);
    
    const handleSearch = useCallback((
        currentPage = 1,
        currentSize = size
    ) => 
    {
        request(
            query,
            currentPage,
            currentSize
        );
    }, [request, query, size]);

  useEffect(() => {

        const cache = load("brand");

        if(cache){

            setResData(cache?.rows);

            setTotalPages(cache?.totalPages);

        }

    },[setResData,setTotalPages]);
    
    useEffect(()=>{
    
        if(resErrors) setErrMsg(resErrors);
    
    },[resErrors,setErrMsg]);
    
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
                    title={`Localizar Marca ${textType? 'para ' + textType : '' }`}
                    subTitle={'Pesquise um marca por nome, ID ou liste todos as Marca cadastradas'}
                    svg={<TbBrandAbstract/>}
                />

                <div className="md-card-row ">
                    <InputSearch 
                        query={query} 
                        setQuery={setQuery} 
                        placeholder={'Pesquisa de marcas..'} 
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
                        data={resData} 
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

export default BrandSearchForm;
