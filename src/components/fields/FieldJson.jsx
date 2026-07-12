import React, { useContext, useEffect, useRef, useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa6";
import './styles.css';
import { ProductFormContext } from "contexts/ProductFormContext";

const createItem = () => ({
    id: crypto.randomUUID(),
    key: "",
    value: "",
});

const FieldJson = ({ value = {}, onChange, data}) => {

    const [items, setItems] = useState([createItem()]);

    const initialized = useRef(false);

    useEffect(() => {

        if (initialized.current) return;
        if (!value) return;

        let specifications = value;

        if (typeof value === "string") {
            try {
                specifications = JSON.parse(value);
            } catch {
                return;
            }
        }

        if (
            typeof specifications === "object" &&
            !Array.isArray(specifications)
        ) {

            setItems(
                Object.entries(specifications).map(([key, value]) => ({
                    id: crypto.randomUUID(),
                    key,
                    value,
                }))
            );

            initialized.current = true;
        }

    }, [value]);

    function emit(list) {

        const json = {};

        list.forEach(item => {

            const key = item.key.trim();

            if (!key) return;

            json[key] = String(item.value);

        });

        onChange({
            target: {
                value: json
            }
        });

    }

    function handleChange(id, field, value) {

        const updated = items.map(item =>
            item.id === id
                ? { ...item, [field]: value }
                : item
        );

        setItems(updated);
        emit(updated);

    }

    function handleAdd() {

        const updated = [...items, createItem()];

        setItems(updated);

    }

    function handleRemove(id) {

        let updated = items.filter(item => item.id !== id);

        if (updated.length === 0) {

            updated = [createItem()];

        }

        setItems(updated);
        emit(updated);

    }

    return (

        <div className="md-card field-json">

            {items.map(item => (

                <div
                    className="field-json-row"
                    key={item.id}
                >

                    <input
                        type="text"
                        placeholder="Nome"
                        value={item.key}
                        onChange={(e) =>
                            handleChange(item.id, "key", e.target.value)
                        }
                    />

                    <input
                        type="text"
                        placeholder="Valor"
                        value={item.value}
                        onChange={(e) =>
                            handleChange(item.id, "value", e.target.value)
                        }
                    />

                    <button
                        type="button"
                        onClick={() => handleRemove(item.id)}
                    >
                        <FaTrash />
                    </button>

                </div>

            ))}

            <button
                type="button"
                className="field-json-add"
                onClick={handleAdd}
            >
                <FaPlus />
                Adicionar especificação
            </button>

        </div>

    );

};

export default FieldJson;