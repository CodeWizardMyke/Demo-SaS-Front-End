import { useContext } from "react";
import { ProductFormContext } from "../../contexts/ProductFormContext";
import FieldText from "./FieldText";
import FieldSelect from "./FieldSelect";
import FieldTextArea from "./FieldTextArea";

const SetedFields = ({ data }) => {

   const { formData, dispatch } =
      useContext(ProductFormContext);

   const FIELDS_TYPED = {
      text: FieldText,
      select: FieldSelect,
      textarea: FieldTextArea,
   }

   const Component = FIELDS_TYPED[data.type];

   if(!Component){
      return <>Campo não encontrado</>
   }

   function handleChange(e){

      dispatch({
         type: "SET_FIELD",
         field: data.name,
         value: e.target.value
      });
   }

   return (

      <Component
         {...data}
         value={formData[data.name] || ""}
         onChange={handleChange}
      />

   )
}

export default SetedFields;