import React, { useMemo, useState } from "react";
import { categoryIcons } from "configs/icons/categoriesIcon";
import "./styles.css";

const IconsSelection = ({ selected, setSelected }) => {
    const [search, setSearch] = useState("");

    const selectedIcon = categoryIcons.find(
        icon => icon.id === selected
    )

    const filteredIcons = useMemo(() => {
        return categoryIcons.filter((item) => {
        const term = search.toLowerCase();
        return (
            item.label.toLowerCase().includes(term) ||
            item.id.toLowerCase().includes(term)
        );
        });
    }, [search]);

    return (
        
        <div className="icon-selection">
        
            <div className="icon-search">
                <input
                    type="text"
                    placeholder="Pesquisar ícone..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {selectedIcon && (
                <div className='icon-preview'>

                    <selectedIcon.Icon />

                    <div>
                        <strong>{selectedIcon.label}</strong>
                        <span>{selectedIcon.id}</span>
                    </div>

                </div>
            )}

            <div className="icon-grid">
                {filteredIcons.length > 0 ? (
                filteredIcons.map((item) => {
                    const Icon = item.Icon;

                    return (
                    <button
                        type="button"
                        key={`iconId_${item.id}`}
                        className={`icon-item ${selected === item.id ? "active" : ""}`}
                        onClick={() => setSelected(item.id)}
                    >
                        <Icon className="icon-svg" />
                        <span>{item.label}</span>
                    </button>
                    );
                })
                ) : (
                    <p className="icon-empty">Nenhum ícone encontrado.</p>
                )}
            </div>

        </div>
  );
};

export default IconsSelection;