export interface IOrderBook{
  BuyOrders: [{
    OrderType: string;
    Price: number;
    Volume: number;
  }];
  CreatedTimestampUtc: string;
  SellOrders: [{
    OrderType: string;
    Price: number;
    Volume: number;
  }];
}
