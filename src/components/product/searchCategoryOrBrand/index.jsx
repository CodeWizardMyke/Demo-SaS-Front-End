import React, { useContext , useEffect, useState } from 'react';

import { WorkspaceContext } from '../../../contexts/WorkspaceContext';
import { searchBrands } from '../../../services/brandService';
import { searchCategories } from '../../../services/categoryService';
import { AuthContext } from '../../../contexts/AuthContext';
import { useFilteredResults } from './hooks/useFilteredResults';
import { confirmStep } from '../utils/confirmStep';
import { ProductFormContext } from '../../../contexts/ProductFormContext';

import './styles.css'
import TableResult from './table';

const SearchCategoryOrBrand = ({type, createForm}) => {

    const {dispatch,step} = useContext(ProductFormContext);

    const [results, setResults] = useState([]);
    const [query,setQuery] = useState ("");
    const [filter,setFilter] = useState("");
    const [selectedValue, setSelectedValue] = useState(null);

    const {loading, setLoading} = useContext(WorkspaceContext);
    const {setErrMsg} = useContext(AuthContext);

    const typeText = type === "brand"
        ? "Marca"
        : "Categoria";
    
    async function handleSearch(){

        if (!query.trim()) return;
        
        setLoading(true);

        const service = type === "brand"
            ? searchBrands
            : searchCategories;
        
        const { data, error } = await service(query);

        if(error){
            setLoading(false);
            console.log(error);
            setErrMsg(error);
        }

        setResults(data?.rows || []);

        setLoading(false);
    }
    
    const filteredResults =  useFilteredResults(results, filter);

    function handleSelect(item) {
        const value = confirmStep( item, type, step,  dispatch  );

        if(value){  setSelectedValue(value); }
    };

    function prevStepAction(){
        dispatch({ type:"NEXT_STEP" })
    };

    useEffect(()=>{
        cleanForm()
    },[type])


    function cleanForm(){
        setResults([]);
        setQuery("");
        setFilter("");
        setSelectedValue(null);
    }

    return (
        <div className='scob-content'>

            <h2> {`${typeText} do produto`} </h2>
           
           <div className="field-search-content">

                <input 
                    type="search"
                    onChange={e => setQuery(e.target.value)} 
                    value={query}
                    placeholder={`Buscar ${typeText.toLowerCase()}...`}
                />

                <div className="button-content">

                    <button 
                        type="button" 
                        onClick={handleSearch}
                        disabled={loading}
                    >
                    
                        {loading ? "Buscando..." : "Buscar"}
                    
                    </button>

                    <button type="button"
                        onClick={()=> createForm(type)}
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

            <TableResult 
                data={filteredResults}
                click={handleSelect}
                selectedValue={selectedValue}
            />

            <div className="checkValue">

                <label htmlFor="selectedValue">
                    {typeText} Selecionada
                </label>

                <input 
                    type="text" 
                    name={typeText} 
                    id="selectedValue" 
                    value={selectedValue?.name || ""}
                    readOnly
                />

                <button 
                    type="button"
                    disabled={!selectedValue}
                    onClick={prevStepAction}
                >
                    {
                        !selectedValue ? `Selecione uma ${typeText}...` : 'Confirmar'
                    }
                
                </button>
            </div>
           </div>
        </div>
    );
}

export default SearchCategoryOrBrand;
