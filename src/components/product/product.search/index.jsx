import Button from "components/buttons/Button";
import Input from "components/input";
import Title from "components/titles/Title";
import React, { useCallback, useContext, useEffect, useState } from "react";

import { IoIosSearch } from "react-icons/io";
import { MdContentPasteSearch } from "react-icons/md";

import ProductInList from "./productList";
import Pagination from "components/pagination";
import { usePaginate } from "hooks/usePaginate";
import { AuthContext } from "contexts/AuthContext";
import Loading from "components/loading/Loading";
import SelectedProductCard from "./selectedProductCard";

import './styles.css';
import { searchServicesConfig } from "./services/searchServicesConfig";
import { load } from "cache/cache";

const ProductSearch = ({selected, setSelected, openForm}) => {
    const [query, setQuery] = useState("");
    
    const [searchType, setSearchType] = useState('read');
    
    const {setErrMsg} = useContext(AuthContext);

    const currentProductSearch = searchServicesConfig[searchType];

    const {
        loading,

        size, setSize,

        page, 
        
        totalPages,setTotalPages,

        setResults,

        results, err,

        executeSearch, reset,

    } = usePaginate(currentProductSearch);

        useEffect(() => {
            
        reset();

        setQuery("");
        
    }, [reset]);

    useEffect(() => {

        const cache = load("products");

        if(cache){

            setResults(cache?.rows);

            setTotalPages(cache?.totalPages);

        }

    },[setResults,setTotalPages]);
    
    const handleSearch = useCallback((
        currentPage = 1,
        currentSize = size
    ) => 
    {
        executeSearch(query,currentPage,currentSize, searchType);

    },[executeSearch,query,size, searchType]);


    useEffect(()=>{
    
        if(err) setErrMsg(err);
    
    },[err,setErrMsg]);
    

    const smallTitle = selected?.title?.slice(0,45);

    const placeholders = {
        read: "Clique em Buscar para listar todos os produtos",
        title: "Digite o nome do produto",
        id: "Digite o ID do produto"
    };

    const text = selected
        ? "Atualizar cadastro do produto."
        : "Selecione um produto para continuar.";
    
    const css = selected
        ? "active"
        : "disabled";

    return(
        <div className="md-content">
            
            {
                loading && <Loading/>
            }
            
            <Title 
                title={'Localizar produto'}
                subTitle={"Pesquise um produto por nome, ID ou liste todos os produtos cadastrados."}
                svg={<MdContentPasteSearch/>}
            />
            
            <div className="md-card-row">
                
                <Input 
                    type={searchType === "id" ? "number" : 'search'}
                    query={query}
                    setQuery={setQuery}
                    placeholder={placeholders[searchType]}
                    css={'input-search'}
                    svg={<IoIosSearch/>}
                />

                <div className="search_select">
                    <select 
                        value={searchType} 
                        onChange={e => setSearchType(e.target.value)} 
                    >
                        <option value="read">Todos os produtos</option>
                        <option value="title">Nome do produto</option>
                        <option value="id">Código (ID)</option>
                    </select>
                </div>

                <Button
                    text={loading ? "Buscando..." : "Iniciar pesquisa"}
                    click={()=> handleSearch()}
                    css={"btSearchProduct"}
                />

            </div>

            <div className="md-card">
                <ProductInList 
                    click={setSelected} 
                    selected={selected}
                    data={results}
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
                <div className="card-label">
                    <span>
                        {
                            selected
                                ? `Produto selecionado: ${smallTitle} ${selected.title?.length > 75 ? "..." : ""}`
                                : "Selecione um produto para visualizar seus detalhes."
                        }
                    </span>
                </div>
                <SelectedProductCard item={selected} onClear={setSelected} />
            </div>
            <Button 
                text={ text } 
                css={ css } 
                click={()=> openForm(selected && true)}
            />
        </div>

    )
};

export default ProductSearch ;