import { INFORMATION_STEPS } from "./informationSteps"; 

export function resolveFields(data) {
    return INFORMATION_STEPS.map(step => ({
        ...step,
        fields: data.filter(step.match)
    }));
}