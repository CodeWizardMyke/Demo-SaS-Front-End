import Button from "components/buttons/Button";
import Input from "components/input";
import Title from "components/titles/Title";
import React, { useCallback, useContext, useEffect, useState } from "react";

import { IoIosSearch } from "react-icons/io";
import { MdContentPasteSearch } from "react-icons/md";

import Pagination from "components/pagination";
import { usePaginate } from "hooks/usePaginate";
import { AuthContext } from "contexts/AuthContext";
import Loading from "components/loading/Loading";

import ProductInList from "../product.search/productList";
import SelectedProductCard from "../product.search/selectedProductCard";
import { searchServicesConfig } from "../product.search/services/searchServicesConfig";

const ProductSearchDelete = ({selected,setSelected,openModal})=> {

    const [query, setQuery] = useState("");
    
    const [searchType, setSearchType] = useState('read');
    
    const {setErrMsg} = useContext(AuthContext);

    const currentProductDelete = searchServicesConfig[searchType];

    const {
        loading,

        size, setSize,

        page, totalPages,

        results, err,

        executeSearch, reset,

    } = usePaginate(currentProductDelete);
    
    const handleSearch = useCallback((
        currentPage = 1,
        currentSize = size
    ) => 
    {
        executeSearch(query,currentPage,currentSize, searchType);

    },[executeSearch,query,size, searchType]);

    useEffect(() => {
            
        reset();

        setQuery("");
        
    }, [reset]);
        
    useEffect(()=>{
    
        if(err) setErrMsg(err);
    
    },[err,setErrMsg]);

    const openFormDelete = () => {
        if(selected){
            openModal(true);
        }
    }
    
    const smallTitle = selected?.title?.slice(0,45);

    const placeholders = {
        read: "Clique em Buscar para listar todos os produtos",
        title: "Digite o nome do produto",
        id: "Digite o ID do produto"
    };

    const text = selected
        ? "Deletar cadastro do produto."
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
                title={'Remover produto'}
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
                click={()=> openFormDelete()}
            />
        </div>

    )
};

export default ProductSearchDelete ;