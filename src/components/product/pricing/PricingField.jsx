import SetedFields from "components/fields";
const prefixes = {
    currency: "R$",
    percentage: "%"
};

export default function PricingField({ field, className }) {


    return (
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
    );
}