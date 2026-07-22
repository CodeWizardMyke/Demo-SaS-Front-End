import { useCallback, useState } from "react";

export const usePaginatedSearch  = (services, queryAllowNull = false) => {
    const [results,setResults] = useState([]);
    const [loading,setLoading] = useState(false);

    const [page,setPage] = useState(1);
    const [size,setSize] = useState(10);
    const [totalPages,setTotalPages] = useState(1);

    const [err,setErr] = useState(null);

    const executeSearch = useCallback( async (
        query,
        currentPage = 1,
        currentSize = size
    ) => {
       
        if(query.trim() ===  queryAllowNull ) return;

        setLoading(true);

        const {data,error} = await services(
            query,
            currentPage,
            currentSize
        );

        if(error){
            setLoading(false);

            console.log(error);

            setErr(error);

        return;
        }

        setResults( data?.rows || [] );

        const total = Math.ceil(
            (data?.count || 0 ) / currentSize
        );

        setTotalPages(total);

        setPage(currentPage);

        setLoading(false);

    },[services, size, queryAllowNull])

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