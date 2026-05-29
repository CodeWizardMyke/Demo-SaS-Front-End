import { useMemo } from "react";

export function useFilteredResults(
    results,
    filter
){

    return useMemo(() => {

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

}