import React, { useContext, useState } from 'react';

import Title from 'components/titles/Title'
import Input from 'components/input';
import Button from 'components/buttons/Button';
import IconsSelection from 'components/iconsSelection';
import ErrorPopup from 'components/Error/ErrorPopup';
import PopupSucess from 'components/popup/PopupSucess';
import Loading from 'components/loading/Loading';

import { IoPricetagOutline } from 'react-icons/io5';
import { handdlerErrors } from 'components/product/createCategoryOrBrand/utils/handdlerErrors';
import { WorkspaceContext } from 'contexts/WorkspaceContext';
import { categoryCreateIconService } from 'services/category/categoryCreateIconService';

const CreateCategories = () => {
    const [CategoryName, setCategoryName] = useState("");
    const [selectedIcon, setSelectedIcon] = useState("");

    const {modalSucess, setModalSucess} = useContext(WorkspaceContext);
 
    const [errMsg, setErrMsg] = useState("");
    const [loading,setLoading] = useState(false);


    const createCategory =  async () => {
        setErrMsg("");
        
        if(!CategoryName.trim()) return;

        setLoading(true);

        const payload ={
            category_name:CategoryName,
            icon:selectedIcon
        }


        const { data, error } = await categoryCreateIconService(payload);
        
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
        <div className='module-step'>
            {
                loading && <Loading/>
            }
            {
                errMsg && <ErrorPopup errMsg={errMsg} setErrMsg={setErrMsg} />
            }
            {
                modalSucess && <PopupSucess text={`Cadastrado com sucesso: ${CategoryName}`}/>
            }
            
            <div className="md-content space-between">
                <Title
                    title={'Nova categoria'}
                    subTitle={'Adione novas categorias de produtos ao seu sistema.'}
                    svg={<IoPricetagOutline/>}
                />
                <div className="md-card">
                    <label htmlFor="category_name">Nome da categoria</label>
                    <Input 
                        type={'text'} 
                        placeholder={'Ex: Computador, Smartphone, etc...'} 
                        css={'inpt-cn'} 
                        query={CategoryName}
                        setQuery={setCategoryName}
                    />
                </div>

                <div className="md-card icon-select">
                    <IconsSelection
                        selected={selectedIcon}
                        setSelected={setSelectedIcon}
                    />
                    
                </div>
                <Button
                    type={'button'} 
                    text={CategoryName ? "Cadastrar" : "Insira o nome da categoria para prosseguir."} 
                    css={`bt-l-accept ${!CategoryName && "disabled"}`}
                    click={createCategory}
                />
            </div>

            
        </div>
    );
}

export default CreateCategories;
