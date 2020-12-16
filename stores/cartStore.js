import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-community/async-storage";

class CartStore {
  items = [];

  constructor() {
    makeAutoObservable(this);
  }

  //

  fetchCart = async () => {
    const items = await AsyncStorage.getItem("myCart");
    this.items = items ? JSON.parse(items) : [];
  };

  addItemToCart = async (newItem) => {
    const foundItem = this.items.find(
      (item) => item.cookieId === newItem.cookieId
    );
    if (foundItem) foundItem.quantity += newItem.quantity;
    else this.items.push(newItem);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };

  updateItemInCart = async (updatedItem) => {
    // console.log(updatedItem);
    const foundItem = this.items.find(
      (item) => item.cookieId === updatedItem.cookieId
    );
    if (foundItem.quantity === 0)
      this.items = item.cookieId !== updatedItem.cookieId;
    else foundItem.quantity = updatedItem.quantity;
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };

  //Computed Property,  value depends on store's properties which is `this.items`
  get totalQuantity() {
    let total = 0;
    this.items.forEach((item) => (total += item.quantity));
    return total;
  }
}

const cartStore = new CartStore();
// cartStore.fetchCart();
export default cartStore;
