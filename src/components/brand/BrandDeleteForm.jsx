import React, { useContext, useState } from 'react';
import { FaDeleteLeft } from 'react-icons/fa6';

import Button from 'components/buttons/Button';
import ErrorPopup from 'components/Error/ErrorPopup';
import Loading from 'components/loading/Loading';
import Title from 'components/titles/Title';
import { handdlerErrors } from 'components/product/createCategoryOrBrand/utils/handdlerErrors';

import { WorkspaceContext } from 'contexts/WorkspaceContext';
import { brandDeleteService } from 'services/brand/brandDeleteService';
import { remove } from 'cache/cache';

const BrandDeleteForm = ({selected,close }) => {
    
    const [loading,setLoading] = useState(false);
    const [errMsg,setErrMsg] = useState("");
    const { setModalSucess} = useContext(WorkspaceContext);

    const deleteBrand =  async () => {
        setErrMsg("");

        setLoading(true);

        const { data, error } = await brandDeleteService(selected.brand_id);
        
        setLoading(false);

        const errorsResult = handdlerErrors(error);
        
        if (errorsResult) {

            setErrMsg(errorsResult);
            
            return;
        }

        remove('brand');

        setModalSucess(data);
        close()
    }

    return (
            
        <div className="md-content space-between">
            {
                loading && <Loading/>
            }
            {
                errMsg && <ErrorPopup errMsg={errMsg} setErrMsg={setErrMsg} />
            }
     
            <Title
                title={'Remover Marca'}
                subTitle={'O processo irá remover a marca selecionada do sistema permanentemente.'}
                svg={<FaDeleteLeft/>}
            />
            
            <div className="md-warning">
                Você está prestes a remover a seguinte marca:
            </div>

            <div className="md-card-row">
                <h3>
                    Nome da marca: {selected?.brand_name}
                </h3>
            </div>
            
            <div className="md-danger">
                <strong>Atenção:</strong> esta ação não poderá ser desfeita.
            </div>

            <div className="buttons-row">
                
                <Button
                    type={'button'} 
                    text={"Deletar categoria"} 
                    css={'bt-cancel'}
                    click={deleteBrand}
                />

                <Button
                    type={'button'} 
                    text={"Fechar formulário"} 
                    css={' bt-accept'}
                    click={close}
                />
                
            </div>
        </div>

    );
}

export default BrandDeleteForm;
