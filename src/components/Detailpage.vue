<template>
  <h1 class="text-5xl font-bold text-left mt-16 mb-8 custom-title">
    Working Kit by Jobhun
  </h1>

  <div class="flex custom-container">
    <!-- Image -->
    <img
      :src="bundle"
      alt="Bundle"
      class="w-[850px] h-[500px] object-cover rounded-lg border-1 border-gray-400 shadow-lg hover:scale-105 transition-transform duration-300"
    />

    <!-- Border Harga -->
    <div
      class="p-5 text-center border-slate-500 rounded-lg flex flex-col"
      style="width: 450px; min-width: 300px; border-width: 3px"
    >
      <!-- Konten di sini -->
      <p class="text-4xl font-bold mb-4 text-left">Rp180.000,-</p>
      <div class="flex flex-row space-x-1 mb-2">
        <!-- Tombol Beli dengan background hijau dan border melengkung -->
        <button
          class="px-14 py-2 bg-green-500 text-white border-2 border-green-400 rounded-lg hover:bg-green-700"
          style="margin-right: 10px"
        >
          Beli
        </button>
        <!-- Tombol Tertarik dengan border biasa dan border melengkung -->
        <button
          class="px-6 py-2 bg-transparent border border-gray-500 text-gray-700 rounded-lg hover:bg-gray-200"
          style="margin-right: 10px"
        >
          Tertarik
        </button>
        <!-- Tombol Bagikan dengan border tipis dan border melengkung -->
        <button
          class="px-6 py-2 bg-transparent border border-gray-500 text-gray-700 rounded-lg hover:bg-gray-200"
        >
          Bagikan
        </button>
      </div>
      <!-- Tombol Merch Jobhun dengan border kustom dan border melengkung -->
      <button
        class="py-1 px-1 bg-transparent border-2 border-gray-500 text-gray-700 text-xs rounded-lg hover:bg-gray-200 mt-1 whitespace-nowrap"
        style="width: 100px; height: 35px"
      >
        Merch Jobhun
      </button>
    </div>
  </div>

  <div
    class="absolute w-[937px] h-[250px] left-[350px] top-[750px] font-normal text-[16px] leading-[22px] text-black space-y-4"
  >
    <p>
      <i>Must have an item untuk kamu yang sat set dan organize oriented.</i> Di
      dalam "Working Kit by Jobhun" ini ada beberapa item yang bisa kamu
      dapatkan, antara lain:
    </p>
    <p>
      <b>1. Jobhun Productive Book</b><br />Notebook ini bisa jadi mini journal
      untuk mencatat meeting, materi, atau daily activity kamu.
    </p>
    <p>
      <b>2. Jobhun Sticker</b><br />Complete your unique work-fun balance dengan
      Jobhun Sticker yang bakal jadi pelengkap work stuff kamu. Tersedia 11
      macam karakter dan tulisan yang sudah high quality resolution, Jobhun
      Sticker terbuat dari bahan vinyl berkualitas dan tentunya nggak ninggalin
      bekas!
    </p>
    <p><b>3. Jobhun Totebag</b><br />Your favorite go-to totebag ever!</p>
    <p><b>4. Mug</b></p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import bundle from "../assets/Homepage/totebag.jpg";
</script>

<style scoped>
.custom-title {
  margin-left: 13%;
  margin-right: auto;
}

.custom-container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 13%;
}

.custom-container img {
  margin-right: 5rem; /* Spacing between image and border harga */
}

.custom-border {
  width: auto; /* Adjust width to fit content */
  height: auto; /* Adjust height to fit content */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.custom-border .flex-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between; /* Distribute buttons evenly */
  gap: 1rem; /* Space between buttons */
}
</style>
