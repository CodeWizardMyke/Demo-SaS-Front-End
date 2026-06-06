const FieldNumber = ({
    name,
    placeholder,
    value,
    onChange
}) => {

    function handleChange(e) {
        let value = e.target.value.replace(/\D/g, "");

        // Remove zeros à esquerda, mas mantém um único 0
        if (value.length > 1) {
            value = value.replace(/^0+/, "");
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
            inputMode="numeric"
        />
    );
};

export default FieldNumber;