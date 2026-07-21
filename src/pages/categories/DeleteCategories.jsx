import CategoryDeleteForm from 'components/category/CategoryDeleteForm';
import CategorySearchForm from 'components/category/CategorySearchForm';
import PopupSucess from 'components/popup/PopupSucess';
import { WorkspaceContext } from 'contexts/WorkspaceContext';
import React, { useContext, useState } from 'react';

const DeleteCategories = () => {
    const [selectCategory, setSelectedCategory] = useState(null);
    const [toggle,setToggle] = useState(false);
    const {modalSucess} = useContext(WorkspaceContext);

    let category_name = selectCategory?.category_name || ""

    function closeForm(){
        setSelectedCategory(null);
        setToggle(false);
    }

    return (
        <div className='module-step'>
            {
                modalSucess && <PopupSucess text={`Deletado com sucesso: ${category_name}`}/>
            }
            {
                !toggle

                     ? <CategorySearchForm
                        selected={selectCategory}
                        setSelected={setSelectedCategory}
                        open={setToggle}
                        text={{ 
                            title:"Remover Categoria",
                            subTitle:"Pesquise um produto por nome, ID ou liste todos as categorias cadastradas",
                        }}
                    />

                    : <CategoryDeleteForm
                        selected={selectCategory}
                        setSelected={setSelectedCategory}
                        close={closeForm}
                        text={{ 
                            title:"Confirmação de exclusão",
                            subTitle:"Confira os dados abaixo antes de remover esta categoria. A exclusão é permanente."
                        }}
                    />
            }
        </div>
    );
}

export default DeleteCategories;
