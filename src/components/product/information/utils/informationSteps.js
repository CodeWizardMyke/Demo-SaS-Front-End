// pricingSteps.js

export const INFORMATION_STEPS = [
    {
        step: 1,
        stepLabel: "Identificalção",
        help: "Como seu produto será apresentado aos clientes",
        css: "md-card-row",
        match: field => field.step === 1
    },
    {
        step: 2,
        stepLabel: "Códigos e referências",
        help: "Códigos unicos para cada produto e outras propriedades básicas.",
        css: "md-card-row",
        match: field => field.step === 2
    },
    {
        step: 3,
        stepLabel: "Descrição",
        help: "Descreva o seu produto de forma clara e completa.",
        cssJoined:"",
        css: "p-card",
        match: field => field.step === 3
    }
];