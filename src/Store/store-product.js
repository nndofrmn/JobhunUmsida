// src/stores/apiStatic.js
import { defineStore } from 'pinia';

export const useApiStaticStore = defineStore('apiStatic', {
  state: () => ({
    products: [
      { id: 1, name: 'Product 1', price: 100 },
      { id: 2, name: 'Product 2', price: 200 },
      { id: 3, name: 'Product 3', price: 300 },
    ],
    users: [
      { id: 1, name: 'User 1' },
      { id: 2, name: 'User 2' },
    ],
  }),
  getters: {
    getProducts: (state) => state.products,
    getUsers: (state) => state.users,
  },
});
