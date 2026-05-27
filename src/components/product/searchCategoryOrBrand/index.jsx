import React, { useContext, useMemo, useState } from 'react';
import './styles.css'
import { WorkspaceContext } from '../../../contexts/WorkspaceContext';
import { searchBrands } from '../../../services/brandService';
import { searchCategories } from '../../../services/categoryService';
import { AuthContext } from '../../../contexts/AuthContext';
import TableResult from './table';

const SearchCategoryOrBrand = ({type}) => {
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
    
    const filteredResults = useMemo(() => {

        if (!filter.trim()) return results;

        return results.filter((item) => {

            const value =
                item.brand_name ||
                item.category_name ||
                '';

            return value
                .toLowerCase()
                .includes(filter.toLowerCase());

        });

    }, [results, filter]);

    function handleSelect(item) {

        const value =
            item.brand_name ||
            item.category_name;

        setSelectedValue(value);
    }
    

    return (
        <div className='scob-content'>

            <h2> {`${typeText} do produto`} </h2>
           
           <div className="field-search-content">

                <input 
                    type="search"
                    onChange={e => setQuery(e.target.value)} 
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

                    <button type="button">Criar nova</button>

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
                <div>

                    <label htmlFor="selectedValue">
                        {typeText} Selecionada
                    </label>

                    <input 
                        type="text" 
                        name={typeText} 
                        id="selectedValue" 
                        value={selectedValue || ""}
                        readOnly
                    />

                </div>

                <button 
                    type="button"
                    disabled={!selectedValue}
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
