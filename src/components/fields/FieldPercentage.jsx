const FieldPercentage = ({
    name,
    placeholder,
    value,
    onChange
}) => {

    function handleChange(e) {
        let value = e.target.value;

        // Apenas números e vírgula
        value = value.replace(/[^\d,]/g, "");

        // Apenas uma vírgula
        const parts = value.split(",");

        if (parts.length > 2) {
            value = `${parts[0]},${parts.slice(1).join("")}`;
        }

        // Máximo de 2 casas decimais
        if (parts[1]?.length > 2) {
            value = `${parts[0]},${parts[1].slice(0, 2)}`;
        }

        const numericValue = Number(value.replace(",", "."));

        // Permite vazio para apagar o campo
        if (value !== "" && numericValue > 100) {
            return;
        }

        onChange({
            target: {
                name,
                value
            }
        });
    }

    return (
        <input
            type="text"
            name={name}
            placeholder={placeholder}
            value={value || ""}
            onChange={handleChange}
            inputMode="decimal"
        />
    );
};

export default FieldPercentage;