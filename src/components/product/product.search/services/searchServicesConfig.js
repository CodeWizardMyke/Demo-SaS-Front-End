import { serviceProductSearch } from "services/serviceProductSearch";
import { serviceProductSearchBy } from "services/serviceProductSearchBy";

export const searchServicesConfig = {
    read:serviceProductSearch,
    title:serviceProductSearchBy,
    id:serviceProductSearchBy
}