interface RatesObject {
    "CurrencyCodeA": String,
    "CurrencyCodeB": String,
    "Rate": number
}
export interface IRates extends Array<RatesObject> { }

