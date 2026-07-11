import { serviceProductSearch } from "services/product/serviceProductSearch";
import { serviceProductSearchBy } from "services/product/serviceProductSearchBy";

export const searchServicesConfig = {
    read:serviceProductSearch,
    title:serviceProductSearchBy,
    id:serviceProductSearchBy
}