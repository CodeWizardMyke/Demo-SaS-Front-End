import { useEffect } from "react";

const FieldSelect = ({
    options,
    name,
    value,
    onChange,
    preview,
    ...props
}) => {

useEffect(() => {
    if (
        (value === undefined || value === "") &&
        options.length
    ) {
        onChange({
            target: {
                name,
                value: options[0].value
            }
        });
    }
}, [name, value, options, onChange]);

    return (
        <select
            {...props}
            name={name}
            value={value || ""}
            onChange={onChange}
        >
            {options.map(item => (
                <option
                    key={item.value}
                    value={item.value}
                >
                    {item.label}
                </option>
            ))}
        </select>
    );
};

export default FieldSelect;