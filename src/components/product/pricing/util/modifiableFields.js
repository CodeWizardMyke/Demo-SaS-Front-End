import { PRICING_STEPS } from "./pricingSteps";

export function modifiableFields(data) {
    return PRICING_STEPS.map(step => ({
        ...step,
        fields: data.filter(step.match)
    }));
}