interface orderObject {
    "OrderType": String,
    "Price": number,
    "Volume": number
}
export interface IOrderBook {
    "BuyOrders": [orderObject],
    "CreatedTimestampUtc ": string,
    "SellOrders": [orderObject]
}