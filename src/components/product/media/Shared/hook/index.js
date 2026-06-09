import { ProductFormContext } from "contexts/ProductFormContext";
import { useContext } from "react";
import { getId } from "../utils/getId";

import getPreview from "../utils/getPreview";

export  function useImageControl (){

    const {dispatch} = useContext(ProductFormContext);

    function add(file){

        const files = getPreview(file);
      
        dispatch({
            type: "ADD_IMAGES",
            payload: files
        });

    };

    function setCurrent (file) {
        dispatch({type:"SET_CURRENT_IMAGE", payload:file})
    }

   function remove(file) {
        const id = getId(file)

        dispatch({ type: "REMOVE_IMAGE",  payload: id});
    }

    function clean() {

        dispatch({
            type: "CLEAR_IMAGES"
        });

    };

    return {
        addImage:add,
        cleanImages:clean,
        removeImage:remove,
        setCurrent
    }
}