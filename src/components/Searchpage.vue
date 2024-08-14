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
    <!-- First Row: Images 1, 2, and 3 -->
    <div
      class="bg-white border-5 border-gray-400 rounded-lg overflow-hidden"
      v-for="(product, index) in products"
      :key="index"
    >
      <img
        :src="product.img"
        alt="Notebook"
        class="w-full h-[370px] object-cover rounded-md mb-2"
      />
      <div class="p-4 text-center border-slate-300 border-2">
        <p class="text-2xl font-bold mb-2">{{ product.name }}</p>
        <p class="text-3xl font-bold mb-4">Rp{{ product.price }},-</p>
        <router-link
          :to="product.link + product.id"
          class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-900"
          >Detail produk</router-link
        >
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref, computed } from "vue";
import notebook1 from "../assets/Homepage/notebook.jpg";

const products = [
  {
    id: 1,
    name: "Mug",
    price: "80.000",
    img: notebook1,
    link: "/detail-page/",
  },
];
</script>

<style scoped>
.custom-image {
  max-height: 190px;
  object-fit: cover;
}

.custom-margin {
  margin: 10px;
}

.grid {
  display: grid;
}

.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.md\:grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.gap-4 {
  gap: 1rem;
}

.inline-flex {
  display: inline-flex;
}

.border {
  border: 1px solid #d1d5db;
}

.rounded {
  border-radius: 0.375rem;
}

.border-r {
  border-right: 1px solid #d1d5db;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.hover\:bg-gray-100:hover {
  background-color: #f3f4f6;
}

.text-green-500 {
  color: #48bb78;
}

.text-white {
  color: #fff;
}
</style>
