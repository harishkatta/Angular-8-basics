interface RatesObject{
  CurrencyCodeA: string;
  CurrencyCodeB: string;
  Rate: number;
}
export interface IRates extends Array<RatesObject>{}
