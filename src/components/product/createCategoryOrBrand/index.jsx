import React, { useContext, useState } from "react";

import "./styles.css";
import { WorkspaceContext } from "../../../contexts/WorkspaceContext";
import { ProductFormContext } from "../../../contexts/ProductFormContext";
import { handdlerErrors } from "./utils/handdlerErrors";
import { confirmStep } from "../utils/confirmStep";
import Button from "components/buttons/Button";
import { brandCreateService } from "services/product/brandCreateService";
import { categoryCreateService } from "services/product/categoryCreateService";

const CreateCategoryOrBrand = ({ modalCreate, setModalCreate }) => {
    const [query, setQuery] = useState("");
    const [errMsg, setErrMsg] = useState("");

    const { dispatch, step } = useContext(ProductFormContext);

    const {
        loading,
        setLoading,
        setModalSucess,
    } = useContext(WorkspaceContext);

    const service = {
        brand: {
            api: brandCreateService,
            label: "Marca",
        },
        category: {
            api: categoryCreateService,
            label: "Categoria",
        },
    }[modalCreate];

    async function sendCreate() {
        setErrMsg("");

        if (!query.trim()) {
            setErrMsg(`Informe o nome da ${service.label.toLowerCase()}.`);
            return;
        }

        setLoading(true);

        const { data, error } = await service.api(query);

        const errorsResult = handdlerErrors(error);

        if (errorsResult) {
            setErrMsg(errorsResult);
            setLoading(false);
            return;
        }

        confirmStep(data?.data, modalCreate, step, dispatch);

        setModalSucess(data);

        setLoading(false);
        setModalCreate(null);
    }

    return (
        <aside className="create-entity-aside">

            <header className="create-entity-header">
                <div>
                    <small>Novo cadastro</small>
                    <h2>{service.label}</h2>
                    <p>
                        Cadastre uma nova {service.label.toLowerCase()} sem sair
                        do formulário.
                    </p>
                </div>

                <Button
                    text="Fechar"
                    click={() => setModalCreate(null)}
                />
            </header>

            <main className="create-entity-content">

                <label>
                    Nome da {service.label.toLowerCase()}
                </label>

                <input
                    type="text"
                    placeholder={`Ex: ${service.label} Premium`}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    autoFocus
                />

                {errMsg && (
                    <span className="field-error">
                        {errMsg}
                    </span>
                )}

            </main>

            <footer className="create-entity-footer">

                <Button
                    text={loading ? "Cadastrando..." : "Cadastrar"}
                    click={sendCreate}
                />

            </footer>

        </aside>
    );
};

export default CreateCategoryOrBrand;