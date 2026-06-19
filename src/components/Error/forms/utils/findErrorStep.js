import productForm from "configs/product";

const normalizePath = (path) => {

    if(path === 'fk_category_id'){
        return 'category';
    }

    if(path === 'fk_brand_id'){
        return 'brand';
    }

    return path;
}

const findErrorStep = (errors) => {

    const dataSettings = productForm;

    const errorMap = new Map(
        errors?.map(err => [
            normalizePath(err.path)
        ])
    );


    return dataSettings
        .filter(setting => {

            const fields = setting.fields;

            if(fields){
                return fields.some(field =>
                    errorMap.has(field.name)
                );
            }

            return errorMap.has(setting.name);

        })
      
}

export default findErrorStep;