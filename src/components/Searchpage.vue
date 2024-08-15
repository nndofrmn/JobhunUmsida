<template>
  <!-- Search Section -->
  <div class="flex items-center justify-center mt-10 mx-10 space-x-4">
    <div class="text-2xl font-bold text-black">Cari Produk</div>
    <input
      type="text"
      placeholder="Cari"
      class="border border-gray-300 rounded px-4 py-2 w-96"
    />
    <input
      type="text"
      placeholder="Produk"
      class="border border-gray-300 rounded px-4 py-2 w-96"
    />
    <button
      class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
    >
      Cari
    </button>
  </div>

  <!-- Rectangle Images and Text Columns -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 px-10">
    <div
      class="bg-white border-5 border-gray-400 rounded-lg overflow-hidden"
      v-for="(product, index) in paginatedProducts"
      :key="index"
    >
      <img
        :src="product.img"
        :alt="product.name"
        class="w-full h-[370px] object-cover rounded-md mb-2"
      />
      <div class="p-4 text-center border-slate-300 border-2">
        <p class="text-2xl font-bold mb-2">{{ product.name }}</p>
        <p class="text-3xl font-bold mb-4">Rp{{ product.price }},-</p>
        <router-link
          :to="product.link"
          class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-900"
          >Detail produk</router-link
        >
      </div>
    </div>
  </div>

  <!-- Pagination Controls -->
  <div class="flex justify-center mt-8 space-x-4">
    <button
      @click="prevPage"
      :disabled="currentPage === 1"
      class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
    >
      Previous
    </button>
    <button
      @click="nextPage"
      :disabled="currentPage === totalPages"
      class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
    >
      Next
    </button>
  </div>

</template>

<script setup>
import { ref, computed } from "vue";
import { products } from "../Store/productData";

// State for pagination
const currentPage = ref(1);
const itemsPerPage = ref(6); // Number of products per page

// Compute the paginated products
const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return products.slice(start, end);
});

// Compute total pages
const totalPages = computed(() => {
  return Math.ceil(products.length / itemsPerPage.value);
});

// Pagination controls
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};
</script>
