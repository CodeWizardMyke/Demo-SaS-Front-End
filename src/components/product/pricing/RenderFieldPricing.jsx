import ErrorFieldList from "components/Error/forms/ErrorFieldList";
import SetedFields from "components/fields";
import { ProductFormContext } from "contexts/ProductFormContext";
import { useContext } from "react";

const prefixes = {
    currency: "R$",
    percentage: "%"
};

export default function RenderFieldPricing({ data, css }) {
    const { errors } = useContext(ProductFormContext);
    const fields = data || [];

    return (

        fields.map((field,index) => {
            const error = errors?.[field.name];

             return(

                <div className="content-pricing" key={`rfp${index}`} >

                    <div>
                        <label htmlFor={field.name}>
                            {field.label}
                        </label>

                        <div className={`input-prefixes ${css}`}>
                            <strong>{prefixes[field.type] || ""}</strong>
                            <SetedFields data={field} />
                        </div>
                    </div>
                    
                    <div className="content-error-pricing">
                        { error && <ErrorFieldList fields={error} /> }
                    </div>
                    
                </div>

             )

        })
       

    );
}