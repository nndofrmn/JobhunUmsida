// src/stores/apiStatic.js
import { defineStore } from 'pinia';

export const useApiStaticStore = defineStore('apiStatic', {
  state: () => ({
    products: JSON.parse(localStorage.getItem('products')) || [
      { id: 1, name: 'Product 1', price: 100 },
      { id: 2, name: 'Product 2', price: 200 },
      { id: 3, name: 'Product 3', price: 300 },
    ],
    users: JSON.parse(localStorage.getItem('users')) || [
      { id: 1, name: 'User 1' },
      { id: 2, name: 'User 2' },
    ],
  }),
  getters: {
    getProducts: (state) => state.products,
    getUsers: (state) => state.users,
    getProductById: (state) => (id) => state.products.find(product => product.id === id),
    getUserById: (state) => (id) => state.users.find(user => user.id === id),
  },
  actions: {
    addProduct(product) {
      product.id = this.products.length ? this.products[this.products.length - 1].id + 1 : 1;
      this.products.push(product);
      this.saveProducts();
    },
    updateProduct(updatedProduct) {
      const index = this.products.findIndex(product => product.id === updatedProduct.id);
      if (index !== -1) {
        this.products[index] = updatedProduct;
        this.saveProducts();
      }
    },
    deleteProduct(id) {
      this.products = this.products.filter(product => product.id !== id);
      this.saveProducts();
    },
    addUser(user) {
      user.id = this.users.length ? this.users[this.users.length - 1].id + 1 : 1;
      this.users.push(user);
      this.saveUsers();
    },
    updateUser(updatedUser) {
      const index = this.users.findIndex(user => user.id === updatedUser.id);
      if (index !== -1) {
        this.users[index] = updatedUser;
        this.saveUsers();
      }
    },
    deleteUser(id) {
      this.users = this.users.filter(user => user.id !== id);
      this.saveUsers();
    },
    saveProducts() {
      localStorage.setItem('products', JSON.stringify(this.products));
    },
    saveUsers() {
      localStorage.setItem('users', JSON.stringify(this.users));
    },
  },
});
