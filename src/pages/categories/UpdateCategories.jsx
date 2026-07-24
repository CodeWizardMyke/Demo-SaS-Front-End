import CategorySearchForm from 'components/category/CategorySearchForm';
import CategoryUpdateForm from 'components/category/CategoryUpdateForm';
import React, { useState } from 'react';

const UpdateCategories = () => {
    const [selectCategory, setSelectedCategory] = useState(null);
    const [toggleUpdate,setToggleUpdate] = useState(false);

    function closeForm(){
        setSelectedCategory(null);
        setToggleUpdate(false);
    }

    return (
        <div className='module-step'>
            {
                !toggleUpdate
                    
                    ? <CategorySearchForm
                        selected={selectCategory}
                        setSelected={setSelectedCategory}
                        open={setToggleUpdate}
                        text={{ 
                            title:"Localizar Categoria",
                            subTitle:"Pesquise um categorias por nome, ID ou liste todos as categorias cadastradas"
                        }}
                    />

                    : <CategoryUpdateForm
                        selected={selectCategory}
                        setSelected={setSelectedCategory}
                        close={closeForm}
                        text={{ 
                            title:"Atualização de categoria",
                            subTitle:"Preencha os novos valores nos campos abaixos para fazer uma modificação."
                        }}
                    />
            }
        </div>
    );
}

export default UpdateCategories;
