store - products.js;

import { defineStore } from "pinia";
import apiStatic from "../utils/ApiStatic";

const SECTORS_URL = "/sectors.json";

export const useOptionsStore = defineStore({
  id: "options",
  state: () => ({
    listSector: {},
  }),
  actions: {
    async getSectors(payload) {
      try {
        let res = await apiStatic.get(SECTORS_URL, payload);
        this.listSector = res;
      } catch (error) {}
    },
  },
});
