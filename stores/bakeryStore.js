import { makeAutoObservable } from "mobx";
import instance from "./instance";

class BakeryStore {
  bakeries = [];
  loading = true;
  ß;
  constructor() {
    makeAutoObservable(this);
  }

  fetchBakeries = async () => {
    try {
      const response = await instance.get("/bakeries");
      this.bakeries = response.data;
      this.loading = false;
    } catch (error) {
      console.error("BakeryStore -> fetchBakeries -> error", error);
    }
  };
}

const bakeryStore = new BakeryStore();
bakeryStore.fetchBakeries();

export default bakeryStore;
