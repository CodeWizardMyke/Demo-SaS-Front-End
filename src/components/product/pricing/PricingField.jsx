import SetedFields from "components/fields";
import { ProductFormContext } from "contexts/ProductFormContext";
import { useContext } from "react";
const prefixes = {
    currency: "R$",
    percentage: "%"
};

export default function PricingField({ field, className }) {

    const { errors } = useContext(ProductFormContext);

    const fieldErrors =
        errors?.[field.name];

    return (
    <>
        <div 
            className={className} 
            key={field.name}
        >
            <label htmlFor={field.name}>
                {field.label}
            </label>

            <div >
                <strong>{prefixes[field.type] || ""}</strong>
                <SetedFields data={field} />
                
            </div>
        </div>
       {
        fieldErrors && (
             <div className="errors-content">
                {
                    fieldErrors?.map(
                        (msg, index) => (
                            <p
                                key={`${field.name}_${index}`}
                                className="field-err"
                            >
                                {msg}
                            </p>
                        )
                    )
                }
            </div>
        )
       }
    </>
    );
}