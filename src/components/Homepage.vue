<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Navbar -->
    <nav class="bg-white shadow">
      <div
        class="container mx-auto px-6 py-3 flex items-center justify-between"
      >
        <div class="text-2xl font-bold text-gray-800">wollkite</div>
        <div class="flex items-center space-x-4">
          <a href="#" class="text-gray-800 hover:text-blue-600">Home</a>
          <a href="#" class="text-gray-800 hover:text-blue-600">Shop</a>
          <a href="#" class="text-gray-800 hover:text-blue-600">Contact</a>
          <a href="#" class="text-gray-800 hover:text-blue-600">Cart</a>
          <router-link
            to="/login"
            class="text-gray-800 hover:text-blue-600 px-4 py-2 rounded"
          >
            Log In
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <header class="bg-purple-800 text-white py-20">
      <div class="container mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Welcome to E-Shop</h1>
        <p class="text-lg md:text-xl mb-8">
          Your one-stop shop for the best products.
        </p>
        <a href="#" class="bg-blue-500 text-white px-6 py-3 rounded text-lg">
          Shop Now
        </a>
      </div>
    </header>

    <!-- Products Section -->
    <section class="container mx-auto px-6 py-12">
      <h2 class="text-3xl font-bold text-center mb-12">Featured Products</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Product Cards -->
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

// Jika ada logika atau fungsi yang diperlukan, bisa ditambahkan di sini
const router = useRouter();
</script>
