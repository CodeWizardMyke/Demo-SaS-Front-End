// pricingSteps.js

export const INFORMATION_STEPS = [
    {
        step: 1,
        stepLabel: "Identificalção",
        help: "Como seu produto será apresentado aos clientes",
        cssJoined:"",
        cssP: "p-card",
        cssC: "identfications",
        match: field => field.step === 1
    },
    {
        step: 2,
        stepLabel: "Códigos e referências",
        help: "Códigos unicos para cada produto e outras propriedades básicas.",
        cssJoined:"",
        cssP: "p-card",
        cssC: "code-references",
        match: field => field.step === 2
    },
    {
        step: 3,
        stepLabel: "Descrição",
        help: "Descreva o seu produto de forma clara e completa.",
        cssJoined:"",
        cssP: "p-card",
        cssC: "description",
        match: field => field.step === 3
    }
];