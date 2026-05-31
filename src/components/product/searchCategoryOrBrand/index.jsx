import React, {  useCallback, useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../../contexts/AuthContext';
import { ProductFormContext } from '../../../contexts/ProductFormContext';
import { useFilteredResults } from './hooks/useFilteredResults';
import { usePaginatedSearch } from './hooks/usePaginatedSearch';
import { confirmStep } from '../utils/confirmStep';
import { servicesConfig } from './services/servicesConfig';

import './styles.css'
import TableResult from './table';
import Pagination from './Pagination';

const SearchCategoryOrBrand = ({type, createForm ,toggleSideBar}) => {
    const { dispatch,step } = useContext(ProductFormContext);

    const [selectedValue, setSelectedValue] = useState(null);
    const [query,setQuery] = useState ("");
    const [filter,setFilter] = useState("");
    
    const currentConfig = servicesConfig[type];

    const {
        results,
        loading,
        err,
        
        size, setSize, page,
        
        totalPages,
        executeSearch,

        reset,

    } = usePaginatedSearch(currentConfig.service);

    const {setErrMsg} = useContext(AuthContext);
    
    const filteredResults =  useFilteredResults(results, filter);
    
    function nextStepAction(){
        dispatch({ type:"NEXT_STEP" });
        createForm({
            action: "close"
        });
        toggleSideBar(true);
     };

    const handleSearch = useCallback((
        currentPage = 1,
        currentSize = size
    ) => {

        executeSearch(
            query,
            currentPage,
            currentSize
        );

    }, [executeSearch, query, size]);

    function handleConfirm(item) {
        const value = confirmStep( item, type, step,  dispatch  );

        if(value){  setSelectedValue(value); };
    };

    useEffect(() => {
        
        reset();

        setQuery("");
        setFilter("");
        setSelectedValue(null);

    }, [type,reset]);

    useEffect(()=>{

        if(err) setErrMsg(err);

    },[err,setErrMsg]);

    
    return (
        <div className='scob-content'>

            <h2> {`${currentConfig.label} do produto`} </h2>
           
           <div className="field-search-content">

                <input 
                    type="search"
                    onChange={e => setQuery(e.target.value)} 
                    value={query}
                    placeholder={`Buscar ${currentConfig.label.toLowerCase()}...`}
                />

                <div className="button-content">

                    <button 
                        type="button" 
                        onClick={() => handleSearch()}
                        disabled={loading}
                    >
                    
                        {loading ? "Buscando..." : "Buscar"}
                    
                    </button>

                    <button type="button"
                        onClick={()=> createForm({action:type})}
                    >Criar nova</button>

                </div>

           </div>
           <div className="result-search">

            <div className="filter-result">
                <input 
                    type="search" 
                    onChange={e => setFilter(e.target.value)}
                    placeholder='Filrar resultados...'
                />
            </div>

            <div>
                <TableResult 
                    data={filteredResults}
                    click={handleConfirm}
                    selectedValue={selectedValue}
                />
                <Pagination
                    page={page}
                    totalPages={totalPages}
                    size={size}
                    setSize={setSize}
                    onSearch={handleSearch}
                />
            </div>

            <div className="checkValue">

                <label htmlFor="selectedValue">
                    {currentConfig.label} Selecionada
                </label>

                <input 
                    type="text" 
                    name={currentConfig.label} 
                    id="selectedValue" 
                    value={selectedValue?.name || ""}
                    readOnly
                />

                <button 
                    type="button"
                    disabled={!selectedValue}
                    onClick={nextStepAction}
                >
                    {
                        !selectedValue ? `Selecione uma ${currentConfig.label}...` : 'Confirmar'
                    }
                
                </button>
            </div>
           </div>
        </div>
    );
}

export default SearchCategoryOrBrand;
