import ProductSearch from 'components/product/product.search';
import { ProductFormProvider } from 'contexts/ProductFormContext';
import React from 'react';

const UpdateProductContent= () => {

    return(
        <div className='md-content'>
            <ProductSearch/>
        </div>
    )
}


const UpdateProduct = () => {
    return (
        <ProductFormProvider>
            <UpdateProductContent/>
        </ProductFormProvider>
    );
}

export default UpdateProduct;
