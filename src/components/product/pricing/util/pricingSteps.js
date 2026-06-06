// pricingSteps.js

export const PRICING_STEPS = [
    {
        step: 1,
        stepLabel: "Preço de custo",
        help: "Informe o quanto você paga para adquirir ou produzir este produto.",
        cssJoined:"",
        cssP: "p-card",
        cssC: "input",
        match: field => field.name === "product_cost"
    },
    {
        step: 2,
        stepLabel: "Margem e ajustes",
        help: "Adicione sua margem de lucro, taxas e descontos aplicáveis.",
        cssJoined:"percent-content",
        cssP: "p-card",
        cssC: "input-percent",
        match: field => field.type === "percentage"
    },
    {
        step: 3,
        stepLabel: "Moeda e estoque",
        help: "Selecione a moeda e a quantidade disponível.",
        cssJoined:"input-content",
        cssP: "p-card",
        cssC: "",
        match: field =>
            field.name === "stock" ||
            field.name === "currency"
    }
];