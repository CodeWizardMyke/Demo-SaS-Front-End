// pricingSteps.js

export const PRICING_STEPS = [
    {
        step: 1,
        stepLabel: "Preço de custo",
        help: "Informe o quanto você paga para adquirir ou produzir este produto.",
        cssLayout:"layout_pcost",
        css: "content-pcost",
        cssField:"pcost",
        match: field => field.name === "product_cost"
    },
    {
        step: 2,
        stepLabel: "Margem e ajustes",
        help: "Adicione sua margem de lucro, taxas e descontos aplicáveis.",
        css: "md-card-row justify-start",
        cssField:"ptaxes",
        match: field => field.type === "percentage"
    },
    {
        step: 3,
        stepLabel: "Moeda e estoque",
        help: "Selecione a moeda e a quantidade disponível.",
        css: "md-card-row justify-start",
        cssField:"p-stock",
        
        match: field =>
            field.name === "stock" ||
            field.name === "currency"
    }
];