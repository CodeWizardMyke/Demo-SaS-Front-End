function parseCurrency(value = "") {
    return Number(
        String(value)
            .replace(/\./g, "")
            .replace(",", ".")
    ) || 0;
}

function parsePercentage(value = "") {
    return Number(
        String(value).replace(",", ".")
    ) || 0;
}

function formatCurrency(value = 0) {
    return Number(value).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

export default function calculateSellingPrice(dataForm) {

    const productCost = parseCurrency(
        dataForm.product_cost
    );

    const additions = [
        "profit_margin",
        "taxes"
    ];

    const discounts = [
        "discounts"
    ];

    const totalAdditions = additions.reduce(
        (total, field) =>
            total + parsePercentage(dataForm[field]),
        0
    );

    const totalDiscounts = discounts.reduce(
        (total, field) =>
            total + parsePercentage(dataForm[field]),
        0
    );

    const totalPercentage =
        totalAdditions - totalDiscounts;

    const sellingPrice =
        productCost * (1 + totalPercentage / 100);

    return {
        sellingPrice:formatCurrency( sellingPrice ),
        totalPercentage,
        totalAdditions,
        totalDiscounts
    };
}