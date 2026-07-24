import { remove } from 'cache/cache';
import Button from 'components/buttons/Button';
import ErrorPopup from 'components/Error/ErrorPopup';
import Input from 'components/input';
import Loading from 'components/loading/Loading';
import PopupSucess from 'components/popup/PopupSucess';
import { handdlerErrors } from 'components/product/createCategoryOrBrand/utils/handdlerErrors';
import Title from 'components/titles/Title';
import { WorkspaceContext } from 'contexts/WorkspaceContext';
import React, { useContext, useState } from 'react';
import { IoPricetagOutline } from 'react-icons/io5';
import { brandUpdateService } from 'services/brand/brandUpdateService';

const BrandUpdateForm = ({selected,close }) => {
    const [brand, setBrand] = useState(selected?.brand_name || "");
    
    const [loading,setLoading] = useState(false);
    const [errMsg,setErrMsg] = useState("");
    const {modalSucess,setModalSucess} = useContext(WorkspaceContext);

    const update =  async () => {
        setErrMsg("");
        
        if(!brand.trim()) return;

        setLoading(true);

        const payload = {
            brand_name:brand,
            brand_id:selected.brand_id
        };

        const { data, error } = await brandUpdateService(payload)
        
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
            
        <div className="md-content space-between">
            {
                loading && <Loading/>
            }
            {
                errMsg && <ErrorPopup errMsg={errMsg} setErrMsg={setErrMsg} />
            }
            {
                modalSucess && <PopupSucess text={`Atualizado com sucesso: ${brand}`}/>
            }
            <Title
                title={'Edição de Marca' } 
                subTitle={'Preencha os novos valores nos campos abaixos para fazer uma modificação.' }
                svg={<IoPricetagOutline/>}
            />
            <div className="md-card">
                <label htmlFor="brand_name">Nome da Marca</label>
                <Input 
                    type={'text'} 
                    placeholder={'Ex: Nike, Adidas, etc...'} 
                    css={'xl-input'} 
                    query={brand}
                    setQuery={setBrand}
                />
            </div>

            <div className="buttons-row">
                
                <Button
                    type={'button'} 
                    text={"Atualizar"} 
                    css={'bt-update'}
                    click={update}
                />

                <Button
                    type={'button'} 
                    text={"Cancelar"} 
                    css={' bt-cancel'}
                    click={close}
                />
                
            </div>
        </div>

    );
}

export default BrandUpdateForm;
