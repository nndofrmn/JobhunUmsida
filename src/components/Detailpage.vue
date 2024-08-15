<template>
  <h1 class="text-5xl font-bold text-left mt-16 mb-8 custom-title">Working Kit by Jobhun</h1>
  <div class="px-18">
    <div class="flex justify-center">
      <!-- Image -->
      <img :src="bundle" alt="Bundle" class="w-[850px] h-[500px] object-cover rounded-lg border border-gray-400 mr-8" /> <!-- Added margin-right here -->

      <!-- Border Harga -->
      <div class="p-4 text-center border border-gray-400 rounded-lg flex flex-col h-52">
        <!-- Konten di sini -->
        <p class="text-4xl font-bold mb-4 text-left">Rp180.000,-</p>
        <div class="flex flex-row space-x-1 mb-2">
          <!-- Tombol Beli dengan background hijau dan border melengkung -->
          <button class="px-14 py-2 bg-green-500 text-white border-2 border-green-400 rounded-lg hover:bg-green-700" style="margin-right: 10px">Beli</button>
          <!-- Tombol Tertarik dengan border biasa dan border melengkung -->
          <button class="px-6 py-2 bg-transparent border border-gray-500 text-gray-700 rounded-lg hover:bg-gray-200" style="margin-right: 10px">Tertarik</button>
          <!-- Tombol Bagikan dengan border tipis dan border melengkung -->
          <button class="px-6 py-2 bg-transparent border border-gray-500 text-gray-700 rounded-lg hover:bg-gray-200">Bagikan</button>
        </div>
        <!-- Tombol Merch Jobhun dengan border kustom dan border melengkung -->
        <button class="py-1 px-1 bg-transparent border-2 border-gray-500 text-gray-700 text-xs rounded-lg hover:bg-gray-200 mt-1 whitespace-nowrap" style="width: 100px; height: 35px">Merch Jobhun</button>
      </div>
    </div>

    <div class="text-black px-14 py-8 flex justify-end items-center w-full">
      <div>
        <p class="font-bold text-black text-3xl text-center mb-6">Detail Produk</p>
        <div class="ml-auto w-5/6"> 
          <p class="text-[24px]"><i>Must have an item untuk kamu yang sat set dan organize oriented.</i></p> 
          <p class="text-[24px] font-bold text-black">1. Jobhun Productive Book</p>
          <p class="text-[20px]">Notebook ini bisa jadi mini journal untuk mencatat meeting, materi, atau daily activity kamu.</p>
          <p class="text-[24px] font-bold text-black">2. Jobhun Sticker</p>
          <p class="text-[20px]">Complete your unique work-fun balance dengan Jobhun Sticker yang bakal jadi pelengkap work stuff kamu. Tersedia 11 macam karakter dan tulisan yang sudah high quality resolution, Jobhun Sticker terbuat dari bahan vinyl berkualitas dan tentunya nggak ninggalin bekas!</p>
          <p class="text-[24px] font-bold text-black">3. Jobhun Totebag</p>
          <p class="text-[20px]">Your favorite go-to totebag ever!</p>
          <p class="text-[24px] font-bold text-black">4. Mug</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import bundle from "../assets/Homepage/bundle.jpg";
</script>

<style scoped>
.custom-title {
  margin-left: 13%;
  margin-right: auto;
}
</style>
