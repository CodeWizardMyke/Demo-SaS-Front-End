import Button from 'components/buttons/Button';
import ErrorPopup from 'components/Error/ErrorPopup';
import IconsSelection from 'components/iconsSelection';
import Input from 'components/input';
import Loading from 'components/loading/Loading';
import PopupSucess from 'components/popup/PopupSucess';
import { handdlerErrors } from 'components/product/createCategoryOrBrand/utils/handdlerErrors';
import Title from 'components/titles/Title';
import { WorkspaceContext } from 'contexts/WorkspaceContext';
import React, { useContext, useState } from 'react';
import { IoPricetagOutline } from 'react-icons/io5';
import { categoryUpdateService } from 'services/category/categoryUpdateService';

const CategoryUpdateForm = ({selected,close,text}) => {
    const [categoryName, setCategoryName] = useState(selected?.category_name || "");
    const [selectedIcon, setSelectedIcon] = useState(selected?.icon || "");
    
    const [loading,setLoading] = useState(false);
    const [errMsg,setErrMsg] = useState("");
    const {modalSucess,setModalSucess} = useContext(WorkspaceContext);

    const update =  async () => {
        setErrMsg("");
        
        if(!categoryName.trim()) return;

        setLoading(true);

        const payload = selected;

        const { data, error } = await categoryUpdateService(payload)
        
        setLoading(false);

        const errorsResult = handdlerErrors(error);
        
        if (errorsResult) {
            console.log(errorsResult)

            setErrMsg(errorsResult);
            
            return;
        }

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
                modalSucess && <PopupSucess text={`Atualizado com sucesso: ${categoryName}`}/>
            }
            <Title
                title={ text?.title || 'Nova categoria' } 
                subTitle={ text.subTitle || 'Adione novas categorias de produtos ao seu sistema.' }
                svg={<IoPricetagOutline/>}
            />
            <div className="md-card">
                <label htmlFor="category_name">Nome da categoria</label>
                <Input 
                    type={'text'} 
                    placeholder={'Ex: Computador, Smartphone, etc...'} 
                    css={'inpt-cn'} 
                    query={categoryName}
                    setQuery={setCategoryName}
                />
            </div>

            <div className="md-card icon-select">
                <IconsSelection
                    selected={selectedIcon}
                    setSelected={setSelectedIcon}
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

export default CategoryUpdateForm;
