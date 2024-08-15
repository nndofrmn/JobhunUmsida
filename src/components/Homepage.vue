<template>
  <div>
    <Header />
    <main class="flex-grow bg-white">
      <div class="flex flex-wrap justify-center">
        <!-- Left Side (Text) -->
        <div class="w-full max-w-md lg:max-w-6xl mt-48 ml-16">
          <h2 class="text-5xl font-semibold mb-4 font-inter">
            WorkIt by Jobhun
          </h2>
          <p class="text-gray-700 text-3xl px-4 text-justify">
            Sedang mencari jasa penyedia corporate gift yang unik demi
            meningkatkan citra perusahaan sekaligus membangun hubungan yang
            langgeng dengan klien, mitra bisnis, atau karyawan Anda? Temukan
            solusinya di Workit by Jobhun, di sini kamu dapat memesan dan
            kustomisasi corporate gift sesuai kebutuhan. Workit by Jobhun
            merupakan layanan dari Jobhun yang menyediakan corporate gift untuk
            klien, karyawan, hingga berbagai acara perusahaan.
          </p>
        </div>

        <!-- Right Side (Banner Image) -->
        <div class="mt-24 ml-5">
          <img
            :src="BannerImage"
            alt="Banner Image"
            class="w-full max-w-[500px] h-auto"
          />
        </div>
      </div>

      <!-- Keunggulan -->
      <section class="mt-16 px-4 lg:px-20">
        <h2 class="text-2xl lg:text-3xl font-semibold text-center mb-8">
          Mengapa Harus Memesan di WorkIt by Jobhun?
        </h2>
        <div class="grid gap-8 xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div
            class="p-4 sm:p-6 bg-custom-yellow rounded-lg shadow-md flex items-center"
          >
            <img
              :src="KeunggulanImage1"
              alt="keunggulan"
              class="w-20 h-20 sm:w-40 sm:h-40 rounded-lg mr-4 sm:mr-8 ml-4 sm:ml-10"
            />
            <div>
              <h3 class="text-lg sm:text-2xl lg:text-4xl font-semibold mb-2">
                Kreativitas tanpa batas
              </h3>
              <p class="text-gray-700 text-base sm:text-xl lg:text-2xl">
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
              class="w-20 h-20 sm:w-40 sm:h-40 rounded-lg mr-4 sm:mr-8 ml-4 sm:ml-10"
            />
            <div>
              <h3 class="text-lg sm:text-2xl lg:text-4xl font-semibold mb-2">
                Memiliki jenis produk yang beragam menyesuaikan bujet
              </h3>
              <p class="text-gray-700 text-base sm:text-xl lg:text-2xl">
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
              class="w-20 h-20 sm:w-40 sm:h-40 rounded-lg mr-4 sm:mr-8 ml-4 sm:ml-10"
            />
            <div>
              <h3 class="text-lg sm:text-2xl lg:text-4xl font-semibold mb-2">
                Kualitas bintang lima
              </h3>
              <p class="text-gray-700 text-base sm:text-xl lg:text-2xl">
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
              class="w-20 h-20 sm:w-40 sm:h-40 rounded-lg mr-4 sm:mr-8 ml-4 sm:ml-10"
            />
            <div>
              <h3 class="text-lg sm:text-2xl lg:text-4xl font-semibold mb-2">
                Pelayanan yang luar biasa
              </h3>
              <p class="text-gray-700 text-base sm:text-xl lg:text-2xl">
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
        <section class="mt-20">
          <h2 class="text-2xl lg:text-3xl font-semibold text-center mb-8">
            Produk yang Harus Dibeli
          </h2>
          <div class="flex flex-wrap justify-center gap-8">
            <div
              v-for="product in products"
              :key="product.name"
              class="flex flex-col items-center px-15"
            >
              <div class="relative mx-20">
                <img
                  :src="product.img"
                  :alt="product.name"
                  class="object-cover rounded-md mb-1 w-[570px] h-[420px]"
                />
              </div>
              <h3 class="text-2xl font-semibold mt-4">{{ product.name }}</h3>
            </div>
          </div>

          <div class="text-center text-3xl">
            <p class="mt-10 mb-5">Dan masih banyak lagi!</p>
            <router-link class="font-semibold mt-5">
              Gimana cara pemesanannya?
            </router-link>
            <p class="mt-5">
              Tertarik bekerjasama dengan kami? Konsultasikan bersama marketing
              kami melalui
              <router-link class="text-green-500 no-underline hover:underline">
                WhatsApp!
              </router-link>
            </p>
          </div>
        </section>
      </section>

      <!-- Text Dapatkan Produk -->
      <section class="text-center text-4xl mt-10 font-semibold">
        <p>Dapatkan produk-produk penunjang produktivitas kerjamu di sini!</p>
      </section>

      <!-- Flexbox Layout -->
      <section class="mt-20 px-4">
        <div class="flex flex-wrap justify-center gap-8">
          <div
            class="flex flex-col items-center w-[600px] h-[540px] p-6 bg-slate-50 rounded-lg shadow-md"
            v-for="(product, index) in products"
            :key="product.id"
          >
            <img
              :src="product.img"
              :alt="product.name"
              class="w-full h-[370px] object-cover rounded-md mb-2"
            />
            <h3 class="text-lg font-semibold">{{ product.name }}</h3>
            <p class="text-gray-700 mt-2">Rp{{ product.price }},-</p>
            <router-link
              :to="product.link + product.id"
              class="mt-4 px-6 py-4 bg-green-500 text-white rounded-xl hover:bg-green-600"
            >
              Detail Produk
            </router-link>
          </div>
        </div>

        <div class="text-center mt-8 text-2xl no-underline hover:underline">
          <router-link :to="{ name: 'searchPage' }">
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
