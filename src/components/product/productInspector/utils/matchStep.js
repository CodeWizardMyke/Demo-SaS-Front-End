
export function matchStep (key){

    switch (key) {
        case "category_product":
            return 1;

        case "brand_product":
            return 2;

        case "product_information":
            return 3;

        case "media":
            return 4;
        
        case "pricing":
            return 5;

        case "marketing":
            return 6;

        default:
            break;
    };

};