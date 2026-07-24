import React, { useContext, useState } from 'react';

import Title from 'components/titles/Title'
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

const CreateBrand = () => {
    const [BrandName, setBrandName] = useState("");

    const {modalSucess, setModalSucess} = useContext(WorkspaceContext);
 
    const [errMsg, setErrMsg] = useState("");
    const [loading,setLoading] = useState(false);


    const createCategory =  async () => {
        setErrMsg("");
        
        if(!BrandName.trim()) return;

        setLoading(true);

        const { data, error } = await brandCreateService({brand_name:BrandName});
        
        setLoading(false);

        const errorsResult = handdlerErrors(error);
        
        if (errorsResult) {
            console.log(errorsResult)

            setErrMsg(errorsResult);
            
            return;
        }
        remove('brand');

        setModalSucess(data);
    }

    return (
        <div className='module-step'>
            {
                loading && <Loading/>
            }
            {
                errMsg && <ErrorPopup errMsg={errMsg} setErrMsg={setErrMsg} />
            }
            {
                modalSucess && <PopupSucess text={`Cadastrado com sucesso: ${BrandName}`}/>
            }
            
            <div className="md-content space-between">
                <Title
                    title={'Nova Marca'}
                    subTitle={'Adione novas marcas de produtos ao seu sistema.'}
                    svg={<TbBrandAbstract/>}
                />
                <div className="md-card">
                    <label htmlFor="brand_name">Nome da marca</label>
                    <Input 
                        type={'text'}
                        placeholder={'Ex: Computador, Smartphone, etc...'} 
                        id={'brand_name'}
                        css={'xl-input'} 
                        query={BrandName}
                        setQuery={setBrandName}
                    />
                </div>

                <Button
                    type={'button'} 
                    text={BrandName ? "Cadastrar" : "Insira o nome da Marca para prosseguir."} 
                    css={`bt-l-accept ${!BrandName && "disabled"}`}
                    click={createCategory}
                />
            </div>

            
        </div>
    );
}

export default CreateBrand;
