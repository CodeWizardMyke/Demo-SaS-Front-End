const FieldCurrency = ({
    name,
    placeholder,
    value,
    onChange
}) => {

    const MAX_VALUE = 1000000;

    function handleChange(e) {

        const onlyNumbers = e.target.value.replace(/\D/g, "");

        const numericValue = Number(onlyNumbers) / 100;

        if (numericValue > MAX_VALUE) {
            return;
        }

        const formatted = numericValue.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        onChange({
            target: {
                name,
                value: formatted
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

export default FieldCurrency;