import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-community/async-storage";
import instance from "./instance";

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

  removeItemFromCart = async (itemId) => {
    this.items = this.items.filter((item) => item.cookieId !== itemId);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };

  checkout = async () => {
    try {
      // const res = await instance.post("/checkout", this.items);
      this.items = [];
      alert("Your cookies are on their way");
    } catch (error) {
      console.log("CartStore -> checkout -> res", res.data);
    }
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
cartStore.fetchCart();
export default cartStore;
