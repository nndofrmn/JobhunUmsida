<!-- src/components/Header.vue -->
<template>
  <header class="bg-white text-black p-4 shadow-md w-full border-bottom">
    <div class="mx-auto flex items-center justify-between mt-8">
      <img :src="logo" alt="Logo" class="w-32 relative left-28" />
      <nav class="flex space-x-6 text-3xl font-semibold">
        <router-link to="/cari-expert" class="hover:underline text-custom-black"
          >Cari Expert</router-link
        >
        <router-link
          to="/jadi-expert"
          class="hover:underline text-custom-black custom-navbar"
          >Jadi Expert</router-link
        >
        <router-link
          to="/layanan"
          class="hover:underline text-custom-black custom-navbar"
          >Layanan</router-link
        >
        <div class="border-l border-gray-300 h-11"></div>
        <div class="relative group">
          <a href="#" class="hover:underline flex items-center w-32">
            <img :src="userIcon" alt="User" :style="customStyle" />
          </a>
          <div
            class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <router-link
              to="/dashboard"
              class="block px-4 py-2 hover:bg-gray-100"
              >Dashboard</router-link
            >
            <router-link
              to="/pengaturan"
              class="block px-4 py-2 hover:bg-gray-100"
              >Pengaturan</router-link
            >
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Keluar</a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import Logo from "@/assets/Homepage/JobhunHomePage.png";
import UserIcon from "@/assets/Homepage/user-icon.png";

const logo = ref(Logo);
const userIcon = ref(UserIcon);
</script>

<style scoped>
/* Tambahkan gaya khusus untuk header jika diperlukan */
</style>
