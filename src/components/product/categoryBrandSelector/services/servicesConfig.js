import { searchBrands } from "services/product/brandService";
import { searchCategories } from "services/product/categoryService";

export const servicesConfig = {

    brand: {
        label: "Marca",
        service: searchBrands
    },

    category: {
        label: "Categoria",
        service: searchCategories
    }

};