const rates = {
    baseCurrencyCode: "EUR",
    baseCurrencyValue: "euro",
    rates: [
        {
            code: "USD",
            value: "dollar",
            rate: 1.16,
            amount: 100
        },
        {
            code: "GBP",
            value: "pound",
            rate: 0.85,
            amount: 100
        },
        {
            code: "UAH",
            value: "hryvnia",
            rate: 30.40,
            amount: 100
        },
        {
            code: "PLN",
            value: "zloty",
            rate: 4.58,
            amount: 100
        }
    ]
};

function getCurrencyRates() {
    return Promise.resolve(rates);
}

export {
    getCurrencyRates
};
