<template>
  <div id="App">
    <div class="min-h-screen bg-gray-100">
      <!-- Navbar -->
      <nav class="bg-white shadow">
        <div class="container mx-auto px-6 py-3">
          <div class="flex items-center justify-between">
            <div class="text-2xl font-bold text-gray-800">wollkite</div>
            <div class="flex items-center">
              <a href="#" class="text-gray-800 hover:text-blue-600 mx-4"
                >Home</a
              >
              <a href="#" class="text-gray-800 hover:text-blue-600 mx-4"
                >Shop</a
              >
              <a href="#" class="text-gray-800 hover:text-blue-600 mx-4"
                >Contact</a
              >
              <a href="#" class="text-gray-800 hover:text-blue-600 mx-4"
                >Cart</a
              >
              <button
                @click="Login = true"
                class="text-gray-800 hover:text- px-4 py-2 rounded"
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </nav>

      <!-- Hero Section -->
      <header class="bg-purple-800 text-white py-20">
        <div class="container mx-auto text-center">
          <h1 class="text-5xl font-bold mb-4">Welcome to E-Shop</h1>
          <p class="text-lg mb-8">Your one-stop shop for the best products.</p>
          <a href="#" class="bg-blue-500 text-white px-4 py-2 rounded"
            >Shop Now</a
          >
        </div>
      </header>

      <!-- Products Section -->
      <!-- <section class="container mx-auto px-6 py-12">
        <h2 class="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Product Image"
              class="mb-4 w-full h-48 object-cover"
            />
            <h3 class="text-xl font-bold mb-2">Product 1</h3>
            <p class="text-gray-700 mb-4">Description of product 1.</p>
            <span class="text-gray-900 font-bold">$49.99</span>
            <a
              href="#"
              class="bg-blue-500 text-white px-4 py-2 rounded mt-4 inline-block"
              >Add to Cart</a
            >
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Product Image"
              class="mb-4 w-full h-48 object-cover"
            />
            <h3 class="text-xl font-bold mb-2">Product 2</h3>
            <p class="text-gray-700 mb-4">Description of product 2.</p>
            <span class="text-gray-900 font-bold">$59.99</span>
            <a
              href="#"
              class="bg-blue-500 text-white px-4 py-2 rounded mt-4 inline-block"
              >Add to Cart</a
            >
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Product Image"
              class="mb-4 w-full h-48 object-cover"
            />
            <h3 class="text-xl font-bold mb-2">Product 3</h3>
            <p class="text-gray-700 mb-4">Description of product 3.</p>
            <span class="text-gray-900 font-bold">$69.99</span>
            <a
              href="#"
              class="bg-blue-500 text-white px-4 py-2 rounded mt-4 inline-block"
              >Add to Cart</a
            </div>
          </div>
        </section>
        > -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>
