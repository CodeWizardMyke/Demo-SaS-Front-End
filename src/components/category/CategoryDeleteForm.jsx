import React, { useContext, useState } from 'react';
import { FaDeleteLeft } from 'react-icons/fa6';

import Button from 'components/buttons/Button';
import ErrorPopup from 'components/Error/ErrorPopup';
import Loading from 'components/loading/Loading';
import Title from 'components/titles/Title';
import { handdlerErrors } from 'components/product/createCategoryOrBrand/utils/handdlerErrors';

import { categoryIcons } from 'configs/icons/categoriesIcon';
import { WorkspaceContext } from 'contexts/WorkspaceContext';
import { categoryDeleteService } from 'services/category/categoryDeleteService';

const CategoryDeleteForm = ({selected,close, text}) => {
    
    const [loading,setLoading] = useState(false);
    const [errMsg,setErrMsg] = useState("");
    const { setModalSucess} = useContext(WorkspaceContext);

    const deleteCategory =  async () => {
        setErrMsg("");

        setLoading(true);

        const { data, error } = await categoryDeleteService(selected)
        
        setLoading(false);

        const errorsResult = handdlerErrors(error);
        
        if (errorsResult) {

            setErrMsg(errorsResult);
            
            return;
        }

        setModalSucess(data);
        close()
    }
    
    const selectedIcon = categoryIcons.find( element => element.id === selected.icon)

    return (
            
        <div className="md-content space-between">
            {
                loading && <Loading/>
            }
            {
                errMsg && <ErrorPopup errMsg={errMsg} setErrMsg={setErrMsg} />
            }
     
            <Title
                title={text?.title || 'Remover categoria'}
                subTitle={text?.subTitle || 'O processo irá remover a categoria selecionada do sistema permanentemente.'}
                svg={<FaDeleteLeft/>}
            />
            
            <div className="md-warning">
                Você está prestes a remover a seguinte categoria:
            </div>

            <div className="md-card-row">
                <h3>
                    Nome da categoria: {selected.category_name}
                </h3>

                {selectedIcon && (
                <div className='icon-preview'>
                    <selectedIcon.Icon />

                    <div>
                        <strong>{selectedIcon.label}</strong>
                        <span>{selectedIcon.id}</span>
                    </div>

                </div>
            )}
            </div>
            
            <div className="md-danger">
                <strong>Atenção:</strong> esta ação não poderá ser desfeita.
            </div>

            <div className="buttons-row">
                
                <Button
                    type={'button'} 
                    text={"Deletar categoria"} 
                    css={'bt-cancel'}
                    click={deleteCategory}
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

export default CategoryDeleteForm;
