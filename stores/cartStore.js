import { makeAutoObservable } from "mobx";

class CartStore {
  items = [
    {
      cookieId: 4,
      quantity: 5,
    },
    {
      cookieId: 5,
      quantity: 3,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }
}

const cartStore = new CartStore();
export default cartStore;
