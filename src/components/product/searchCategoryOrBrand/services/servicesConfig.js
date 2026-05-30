import { searchBrands } from "../../../../services/brandService";
import { searchCategories } from "../../../../services/categoryService";

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