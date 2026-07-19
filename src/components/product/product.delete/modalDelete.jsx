import React from "react";
import { FaDeleteLeft } from "react-icons/fa6";

import Title from "components/titles/Title";

import './styles.css';

import productForm from "configs/product";
import Button from "components/buttons/Button";
import { api } from "services/api";
import { serviceProductDelete } from "services/product/serviceProductDelete";
import { remove } from "cache/cache";

const ModalDelete = ({ data,close,sucess }) => {

    const fields = productForm.flatMap(section => section.fields || []);

    const getLabel = (name) =>
        fields.find(field => field.name === name)?.label || name;

    const formatValue = (value) => {
        if (
            value === null ||
            value === undefined ||
            value === "" ||
            value === "null"
        ) {
            return "Não informado";
        }

        if (typeof value === "object") {
            if (value.brand_name) return value.brand_name;
            if (value.category_name) return value.category_name;

            return JSON.stringify(value);
        }

        return value;
    };

    async function handlerDeleteProduct() {
       const {error} = serviceProductDelete(data?.product_id);

        if(!error){
            sucess();
            remove('products');
        }

    }

    const baseUrl = api.defaults.baseURL.split('/api')[0];

    return (
        <div className="md-content">

            <Title
                title="Confirmação de exclusão"
                subTitle="Confira os dados abaixo antes de remover este produto. A exclusão é permanente, porém o histórico de compras e vendas permanecerá disponível no sistema."
                svg={<FaDeleteLeft />}
            />

            <div className="md-warning">
                Você está prestes a remover o seguinte produto:
            </div>

            <div className="md-card-row">

                {data?.thumbnails?.length > 0 && (
                    <div className="md-image">
                        <img
                            src={baseUrl + data.thumbnails[0].path}
                            alt={data.title}
                        />
                    </div>
                )}

                <div className="md-info">

                    <div className="md-item">
                        <span>{getLabel("title")}</span>
                        <strong>{formatValue(data.title)}</strong>
                    </div>

                    <div className="md-item">
                        <span>{getLabel("official_store_name")}</span>
                        <strong>{formatValue(data.official_store_name)}</strong>
                    </div>

                    <div className="md-item">
                        <span>{getLabel("brandProduct")}</span>
                        <strong>{formatValue(data.brandProduct)}</strong>
                    </div>

                    <div className="md-item">
                        <span>{getLabel("categoryProduct")}</span>
                        <strong>{formatValue(data.categoryProduct)}</strong>
                    </div>

                    <div className="md-item">
                        <span>{getLabel("selling_price")}</span>
                        <strong>
                            R$ {Number(data.selling_price || 0).toFixed(2)}
                        </strong>
                    </div>

                    <div className="md-item">
                        <span>{getLabel("stock")}</span>
                        <strong>{data.stock} unidade(s)</strong>
                    </div>

                    <div className="md-item">
                        <span>Status</span>
                        <strong>{data.product_state}</strong>
                    </div>

                </div>

            </div>

            <div className="md-danger">
                <strong>Atenção:</strong> esta ação não poderá ser desfeita.
            </div>

            <div className="md-card-row content-buttons-delete">
                <Button 
                    text={'Processeguir com a remoção'} 
                    css={'button-remove'} 
                    click={handlerDeleteProduct}
                />
                <Button 
                    text={'Cancelar remoção'} 
                    css={'button-cancel'}  
                    click={()=>close()}
                />
            </div>

        </div>
    );
};

export default ModalDelete;