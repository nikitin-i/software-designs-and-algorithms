interface IRate {
    code: string;
    value: string;
    rate: number;
    amount: number;
    calculation?: string;
}

interface IRates {
    baseCurrencyCode: string;
    baseCurrencyValue: string;
    rates: IRate[];
}

export {
    IRate,
    IRates
};