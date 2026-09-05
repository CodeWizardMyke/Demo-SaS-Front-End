import React, { useContext, useState } from 'react';

import Title from 'components/titles/Title';
import Input from 'components/input';
import Button from 'components/buttons/Button';
import ErrorPopup from 'components/Error/ErrorPopup';
import PopupSucess from 'components/popup/PopupSucess';
import Loading from 'components/loading/Loading';

import { handdlerErrors } from 'components/product/createCategoryOrBrand/utils/handdlerErrors';
import { WorkspaceContext } from 'contexts/WorkspaceContext';
import { brandCreateService } from 'services/brand/brandCreateService';
import { TbBrandAbstract } from 'react-icons/tb';
import { remove } from 'cache/cache';

import './createBrand.css'

const CreateBrand = () => {
    const [BrandName, setBrandName] = useState('');

    const {
        modalSucess,
        setModalSucess
    } = useContext(WorkspaceContext);

    const [errMsg, setErrMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const createBrand = async () => {
        setErrMsg('');

        const brandName = BrandName.trim();

        if (!brandName) return;

        setLoading(true);

        const { data, error } = await brandCreateService({
            brand_name: brandName
        });

        setLoading(false);

        const errorsResult = handdlerErrors(error);

        if (errorsResult) {
            setErrMsg(errorsResult);
            return;
        }

        remove('brand');

        setModalSucess(data);

        setBrandName('');
    };

    return (
        <div className="module-step">

            {loading && <Loading />}

            {errMsg && (
                <ErrorPopup
                    errMsg={errMsg}
                    setErrMsg={setErrMsg}
                />
            )}

            {modalSucess && (
                <PopupSucess
                    text={`Cadastrado com sucesso: ${BrandName}`}
                />
            )}

            <div className="brand-create-content">

                <Title
                    title="Nova Marca"
                    subTitle="Adicione novas marcas de produtos ao seu sistema."
                    svg={<TbBrandAbstract />}
                />

                <div className="brand-create-card">

                    <div className="brand-create-field">

                        <label htmlFor="brand_name">
                            Nome da marca
                        </label>

                        <Input
                            type="text"
                            placeholder="Ex: Apple, Samsung, Logitech..."
                            id="brand_name"
                            css="xl-input"
                            query={BrandName}
                            setQuery={setBrandName}
                        />

                        <span className="brand-create-helper">
                            A marca ficará disponível para associação
                            aos produtos do catálogo.
                        </span>

                    </div>

                    <div className="brand-create-actions">

                        <Button
                            type="button"
                            text={
                                BrandName.trim()
                                    ? 'Cadastrar marca'
                                    : 'Informe o nome da marca'
                            }
                            css={`bt-l-accept ${
                                !BrandName.trim()
                                    ? 'disabled'
                                    : ''
                            }`}
                            click={createBrand}
                        />

                    </div>

                </div>

            </div>

        </div>
    );
};

export default CreateBrand;