import {  save } from "cache/cache";
import { useCallback, useState } from "react";

export const usePaginate = (services) => {
    const [results,setResults] = useState([]);
    const [loading,setLoading] = useState(false);

    const [page,setPage] = useState(1);
    const [size,setSize] = useState(10);
    const [totalPages,setTotalPages] = useState(1);

    const [err,setErr] = useState(null);

    const executeSearch = useCallback( async (
        query,
        currentPage = 1,
        currentSize = size,
        searchType
    ) => {

        if( !query && searchType !== 'read'){
            setErr('Nenhum valor de busca foi inserido. por favor informe um valor valido na pesquisa');
            return;
        }

        setLoading(true);

        const { data, error} = await services(query,currentPage,currentSize,searchType);
  

        if(error){
            setLoading(false);

            setErr(error.message || error);

            return;
        }
        setResults( data?.rows || [] );

        
        const total = Math.ceil(
            (data?.count || 0 ) / currentSize
        );

        const setCache = {
            rows:data.rows,
            totalPages:total,
            currentPage:currentPage
        }

        save('products',setCache);

        setTotalPages(total);

        setPage(currentPage);

        setLoading(false);

    },[services, size])

    const reset = useCallback(()=>{
        setResults([]);
        setPage(1);
        setTotalPages(1);
    },[])

    return {
        results,setResults,
        loading,
        err,

        page,
        setPage,

        size,
        setSize,

        totalPages,setTotalPages,

        executeSearch,
        reset
    };

};