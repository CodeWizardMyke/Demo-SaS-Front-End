import { ProductFormContext } from "contexts/ProductFormContext";
import { useContext } from "react";
import { getId } from "../utils/getId";

import getPreview from "../utils/getPreview";

export  function useImageControl (){

    const {dispatch} = useContext(ProductFormContext);

    function add(file,field){
        const files = getPreview(file);

        dispatch({
            type: "ADD_IMAGES",
            payload: files,
            field
        });
    };

    function setCurrent (file,field) {
        if(!!file){
            dispatch({type:"SET_CURRENT_IMAGE", payload:file, field})
        }
    }

   function remove(file, field) {
        const id = getId(file)

        dispatch({ 
            type: "REMOVE_IMAGE", 
            payload: id,
            field    
        });
    }

    function clean(field) {

        dispatch({
            type: "CLEAR_IMAGES",
            field
        });

    };

    return {
        addImage:add,
        cleanImages:clean,
        removeImage:remove,
        setCurrent
    }
}