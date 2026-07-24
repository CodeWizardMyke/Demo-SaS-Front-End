import { load, save } from "cache/cache";
import { useCallback, useState } from "react";

export const useReqPagData  = (
    {
        cacheName,
        services,
        queryAllowNull = false

    }) => {
    
    const [resData,setResData] = useState([]);
    const [resErrors,setResErrors] = useState(null);
    const [loading,setLoading] = useState(false);

    const [page,setPage] = useState(1);
    const [size,setSize] = useState(10);
    const [totalPages,setTotalPages] = useState(1);

    const request = useCallback( async (
        query,
        currentPage = 1,
        currentSize = size
    ) => {

        const cache = load(cacheName)
        if(cache?.length){
            setResData(cache);
            return;
        }

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

            setResErrors(error);

            return;
        }

        setResData( data?.rows || [] );

        const total = Math.ceil( (data?.count || 0 ) / currentSize );

        if(cacheName){
            save(
                cacheName,
                {
                    rows:data.rows,
                    totalPages:total,
                    currentPage
                }
            )
        }

        setTotalPages(total);

        setPage(currentPage);

        setLoading(false);

    },[services, size, queryAllowNull, cacheName])


    return {
        resData,setResData,
        loading,resErrors,
        
        page, setPage,
        size,setSize,
        totalPages,setTotalPages,

        request
    };

};