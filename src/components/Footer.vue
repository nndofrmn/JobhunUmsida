<template>
<footer class="bg-white text-gray-800 p-4 mx-32">
  <!-- Gambar sosial media -->
  <div class="flex justify-end mb-4 mt-4">
    <img :src="instagramIcon" alt="Instagram" class="w-7 h-7 mx-2" />
    <img :src="linkedinIcon" alt="LinkedIn" class="w-7 h-7 mx-2" />
    <img :src="ytIcon" alt="YouTube" class="w-7 h-7 mx-2" />
  </div>

  <div class="mx-auto flex flex-col justify-between">
    <div class="border-t border-gray-300 mb-4"></div>

    <div
      class="flex flex-wrap justify-between items-center mb-2 mx-10 w-full max-w-md lg:max-w-6xl"
    >
      <div class="space-x-6 text-2xl">
        <router-link to="/tentang" class="hover:underline"
          >Tentang Jobhun</router-link
        >
        <router-link to="/layanan-b2b" class="hover:underline"
          >Layanan B2B/G</router-link
        >
        <router-link to="/program" class="hover:underline"
          >Program</router-link
        >
        <router-link to="/blog" class="hover:underline">Blog</router-link>
        <router-link to="/karier" class="hover:underline">Karier</router-link>
        <router-link to="/lowongan-kerja" class="hover:underline"
          >Lowongan Kerja</router-link
        >
        <router-link to="/kerja-sama" class="hover:underline"
          >Kerja Sama</router-link
        >
      </div>
    </div>
    <div class="flex-shrink-0 ml-auto">
      <img :src="kominfoIcon" alt="Kominfo" class="justify-end" />
    </div>
    <div
      class="flex justify-between items-center mx-10 w-full max-w-md lg:max-w-6xl"
    >
      <div class="flex space-x-6 text-2xl">
        <router-link to="/liputan-media" class="hover:underline"
          >Liputan Media</router-link
        >
        <router-link to="/syarat-ketentuan" class="hover:underline"
          >Syarat & Ketentuan</router-link
        >
        <router-link to="/kebijakan-privasi" class="hover:underline"
          >Kebijakan Privasi</router-link
        >
        <router-link to="/hubungi-kami" class="hover:underline"
          >Hubungi Kami</router-link
        >
      </div>
    </div>

    <div class="border-t border-gray-300 mt-4"></div>

    <p class="text-center text-2xl mt-4">
      &copy; Copyright 2023 PT Jobhun Membangun Indonesia. All Rights Reserved
    </p>
  </div>
</footer>
</template>

<script setup>
import { ref } from "vue";
import Kominfo from "@/assets/footer/image1.png";
import Instagram from "@/assets/footer/ig.png";
import LinkedIn from "@/assets/footer/linkedin.png";
import YouTube from "@/assets/footer/yt.png";

const kominfoIcon = ref(Kominfo);
const instagramIcon = ref(Instagram);
const linkedinIcon = ref(LinkedIn);
const ytIcon = ref(YouTube);
</script>
