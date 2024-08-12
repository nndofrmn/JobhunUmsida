<template>
  <div class="mx-auto bg-white text-black">
    <Header />
    <main>
      <div class="container mx-auto flex p-6">
        <!-- Sidebar Menu -->
        <div class="w-1/4 bg-gray-100 p-4 rounded-lg shadow-md mr-6">
          <ul class="space-y-2">
            <li>
              <router-link
                to="/konsultasi"
                class="block text-black hover:underline"
              >
                Konsultasi
              </router-link>
            </li>
            <li>
              <router-link
                to="/konsultasi"
                class="block text-black hover:underline"
              >
                Pelatihan
              </router-link>
            </li>
            <li>
              <router-link
                to="/konsultasi"
                class="block text-black hover:underline"
              >
                Pelatihan
              </router-link>
            </li>
            <!-- Daftar menu lainnya -->
          </ul>
        </div>

        <!-- Product List Section -->
        <div class="flex-1">
          <h1 class="text-3xl font-bold mb-6">Daftar Produk</h1>
          <table
            class="min-w-full bg-white shadow-md rounded-lg overflow-hidden"
          >
            <thead class="bg-gray-200">
              <tr>
                <th class="py-3 px-4 text-left">No</th>
                <th class="py-3 px-4 text-left">Gambar</th>
                <th class="py-3 px-4 text-left">Nama Produk</th>
                <th class="py-3 px-4 text-left">Kategori</th>
                <th class="py-3 px-4 text-left">Harga</th>
                <th class="py-3 px-4 text-left">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in products" :key="product.id">
                <td class="py-3 px-4">{{ index + 1 }}</td>
                <td class="py-3 px-4">
                  <img
                    :src="product.image"
                    alt="Product Image"
                    class="w-24 h-16 object-cover"
                  />
                </td>
                <td class="py-3 px-4">{{ product.name }}</td>
                <td class="py-3 px-4">{{ product.category }}</td>
                <td class="py-3 px-4 text-green-500 font-bold">
                  {{ product.price }}
                </td>
                <td class="py-3 px-4">
                  <button
                    class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Beli Sekarang
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
  <footer />
</template>

<script setup>
import { ref } from "vue";

const products = ref([
  {
    id: 1,
    name: "Produk 1",
    category: "Kategori 1",
    price: "Rp. 100.000",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    name: "Produk 2",
    category: "Kategori 2",
    price: "Rp. 150.000",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    name: "Produk 2",
    category: "Kategori 2",
    price: "Rp. 150.000",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    name: "Produk 2",
    category: "Kategori 2",
    price: "Rp. 150.000",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 5,
    name: "Produk 2",
    category: "Kategori 2",
    price: "Rp. 150.000",
    image: "https://via.placeholder.com/300x200",
  },
  // Tambahkan produk lainnya jika diperlukan
]);
</script>
