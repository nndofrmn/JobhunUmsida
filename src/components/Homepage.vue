<template>
  <div class="mx-20">
    <Header />
    <main class="flex-grow bg-white">
      <!-- Hero Section -->
      <div class="flex flex-wrap justify-center">
        <div
          class="flex flex-col lg:flex-row w-full max-w-md lg:max-w-6xl ml-16"
        >
          <!-- Text Content -->
          <div>
            <h2 class="text-4xl font-semibold mb-4 font-inter">
              WorkIt by Jobhun
            </h2>
            <p class="text-gray-700 text-lg text-justify w-[559px] h-auto">
              Sedang mencari jasa penyedia corporate gift yang unik demi
              meningkatkan citra perusahaan sekaligus membangun hubungan yang
              langgeng dengan klien, mitra bisnis, atau karyawan Anda? Temukan
              solusinya di Workit by Jobhun, di sini kamu dapat memesan dan
              kustomisasi corporate gift sesuai kebutuhan. Workit by Jobhun
              merupakan layanan dari Jobhun yang menyediakan corporate gift
              untuk klien, karyawan, hingga berbagai acara perusahaan.
            </p>
          </div>

          <!-- Banner Image -->
          <div
            class="lg:w-1/3 mt-8 lg:mt-0 lg:ml-5 flex justify-center lg:justify-end"
          >
            <img :src="BannerImage" alt="Banner Image" class="w-full h-auto" />
          </div>
        </div>
      </div>

      <!-- Keunggulan Section -->
      <section>
        <h2 class="text-xs lg:text-2xl font-semibold text-center my-10 mb-8">
          Mengapa Harus Memesan di WorkIt by Jobhun?
        </h2>
        <div class="grid gap-8 xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div
            class="p-4 bg-custom-yellow rounded-lg shadow-md flex items-center"
          >
            <img
              :src="KeunggulanImage1"
              alt="keunggulan"
              class="size-28 rounded-lg mr-2 sm:mr-6 ml-2 sm:ml-4"
            />
            <div>
              <h3 class="text-lg sm:text-sm lg:text-base font-semibold mb-2">
                Kreativitas tanpa batas
              </h3>
              <p class="text-gray-700 text-xs sm:text-xs lg:text-sm">
                Workit by Jobhun siap untuk bekerjasama dengan Anda dalam
                menyediakan layanan corporate gift yang sesuai dengan identitas
                perusahaan. Mulai dari desain yang inovatif hingga personalisasi
                yang detail, kami memastikan setiap produk mencerminkan
                keunggulan bisnis Anda.
              </p>
            </div>
          </div>

          <div
            class="p-4 sm:p-6 bg-custom-yellow rounded-lg shadow-md flex items-center"
          >
            <img
              :src="KeunggulanImage2"
              alt="keunggulan"
              class="size-28 rounded-lg mr-2 sm:mr-6 ml-2 sm:ml-4"
            />
            <div>
              <h3 class="text-lg sm:text-sm lg:text-base font-semibold mb-2">
                Memiliki jenis produk yang beragam menyesuaikan bujet
              </h3>
              <p class="text-gray-700 text-xs sm:text-xs lg:text-sm">
                Mulai dari merchandise promosi hingga corporate gift karyawan
                yang fungsional, kami memiliki beragam jenis produk yang siap
                dipesan, dan dapat disesuaikan dengan kebutuhan dan bujet
                perusahaan.
              </p>
            </div>
          </div>

          <div
            class="p-4 sm:p-6 bg-custom-yellow rounded-lg shadow-md flex items-center"
          >
            <img
              :src="KeunggulanImage3"
              alt="keunggulan"
              class="size-28 rounded-lg mr-2 sm:mr-6 ml-2 sm:ml-4"
            />
            <div>
              <h3 class="text-lg sm:text-sm lg:text-base font-semibold mb-2">
                Kualitas bintang lima
              </h3>
              <p class="text-gray-700 text-xs sm:text-xs lg:text-sm">
                Kami menggunakan bahan material yang terbaik dan memerhatikan
                setiap detail dalam setiap produksi. Dengan standar dan kualitas
                tinggi, corporate gift dari kami bukan hanya sekadar hadiah,
                tetapi juga investasi jangka panjang untuk meningkatkan citra
                dan reputasi perusahaan Anda.
              </p>
            </div>
          </div>

          <div
            class="p-4 sm:p-6 bg-custom-yellow rounded-lg shadow-md flex items-center"
          >
            <img
              :src="KeunggulanImage4"
              alt="keunggulan"
              class="size-28 rounded-lg mr-2 sm:mr-6 ml-2 sm:ml-4"
            />
            <div>
              <h3 class="text-lg sm:text-sm lg:text-base font-semibold mb-2">
                Pelayanan yang luar biasa
              </h3>
              <p class="text-gray-700 text-xs sm:text-xs lg:text-sm">
                Kami tidak hanya menyediakan produk berkualitas, tetapi juga
                memberikan pelayanan yang unggul. Kami berkomitmen untuk
                memastikan setiap tahap, dari konsep hingga pengiriman, berjalan
                dengan lancar dan memenuhi harapan Anda dan perusahaan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Produk yang Harus Dibeli -->
      <section class="mt-20">
        <h2 class="text-xs lg:text-2xl font-semibold text-center my-10 mb-8">
          Produk yang Harus Dibeli
        </h2>
        <div class="flex flex-wrap justify-center gap-8">
          <div
            v-for="product in products"
            :key="product.name"
            class="flex flex-col items-center p-4 bg-white shadow-md rounded-lg max-w-xs"
          >
            <div class="relative mb-4">
              <img
                :src="product.img"
                :alt="product.name"
                class="object-cover rounded-md w-80 h-48"
              />
            </div>
            <h3 class="text-lg font-semibold mt-2">{{ product.name }}</h3>
          </div>
        </div>

        <div class="text-center text-xl mt-5">
          <p class="mb-4">Dan masih banyak lagi!</p>
          <router-link class="font-semibold"
            >Gimana cara pemesanannya?</router-link
          >
        </div>
        <p class="mt-3 text-center">
          Tertarik bekerjasama dengan kami? Konsultasikan bersama marketing kami
          melalui
          <router-link class="text-green-500 no-underline hover:underline"
            >WhatsApp!</router-link
          >
        </p>
      </section>

      <!-- Text Dapatkan Produk -->
      <section class="text-xs lg:text-2xl font-semibold text-center my-5">
        <p>Dapatkan produk-produk penunjang produktivitas kerjamu di sini!</p>
      </section>

      <!-- Flexbox Layout -->
      <section class="mt-10 px-4">
        <div class="flex flex-wrap justify-center gap-8">
          <div
            class="flex flex-col items-center w-full sm:w-80 md:w-72 lg:w-80 h-auto p-6 bg-slate-50 rounded-lg shadow-md"
            v-for="(product, index) in products"
            :key="product.id"
          >
            <img
              :src="product.img"
              :alt="product.name"
              class="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 class="text-base sm:text-lg font-semibold mb-2">
              {{ product.name }}
            </h3>
            <p class="text-gray-700 mb-4 text-sm sm:text-base">
              Rp{{ product.price }},-
            </p>
            <router-link
              :to="product.link + product.id"
              class="px-4 py-2 sm:px-6 sm:py-3 bg-green-500 text-white rounded-xl hover:bg-green-600"
            >
              Detail Produk
            </router-link>
          </div>
        </div>

        <div class="text-center mt-8 text-xs sm:text-sm">
          <router-link
            :to="{ name: 'searchPage' }"
            class="no-underline hover:underline text-black"
          >
            Cari produk lainnya ->
          </router-link>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";
import BannerImage from "../assets/Homepage/banner-image.png";
import KeunggulanImage1 from "../assets/Homepage/keunggulan1.png";
import KeunggulanImage2 from "../assets/Homepage/keunggulan2.png";
import KeunggulanImage3 from "../assets/Homepage/keunggulan3.png";
import KeunggulanImage4 from "../assets/Homepage/keunggulan4.png";

// Import data produk dari file terpisah
import { products } from "../Store/productData";
</script>
