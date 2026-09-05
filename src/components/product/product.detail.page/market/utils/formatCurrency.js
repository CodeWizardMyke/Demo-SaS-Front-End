export function formatCurrency(value, currency = 'BRL') {
    const number = Number(value);

    if (!Number.isFinite(number)) {
        return 'R$ 0,00';
    }

    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency
    }).format(number);
}