import React, { useContext, useState } from "react";

import "./styles.css";
import { WorkspaceContext } from "../../../contexts/WorkspaceContext";
import { ProductFormContext } from "../../../contexts/ProductFormContext";
import { handdlerErrors } from "./utils/handdlerErrors";
import { confirmStep } from "../utils/confirmStep";
import Button from "components/buttons/Button";
import { brandCreateService } from "services/product/brandCreateService";
import { categoryCreateService } from "services/product/categoryCreateService";
import modules from "configs/sidebar/modules";

const CreateCategoryOrBrand = ({ modalCreate, setModalCreate }) => {
    const [query, setQuery] = useState("");
    const [errMsg, setErrMsg] = useState("");

    const { dispatch, step } = useContext(ProductFormContext);

    const {routes} = modules.find( module => module.attr === modalCreate );

    const routeItem = routes?.find(route => route.action === "create") || null

    const moduleConfig = {
        brand: routeItem,
        category:routeItem
    }[modalCreate]

    const {
        loading,
        setLoading,
        setModalSucess,
        openTab,
    } = useContext(WorkspaceContext);

    const service = {
        brand: {
            api: brandCreateService,
            label: "Marca",
            navigate: ""
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

    const goToCreateCategory = () => {
        openTab(moduleConfig)
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

                <Button
                    text={loading ? "Cadastrando..." : "Cadastro rápido."}
                    click={sendCreate}
                />

                <Button
                    text={"Ir para cadastro completo"}
                    click={goToCreateCategory}
                />
            </main>



        </aside>
    );
};

export default CreateCategoryOrBrand;