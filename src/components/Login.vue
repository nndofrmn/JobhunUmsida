<template>
  <div id="app">
    <div>
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-5">
          <h2 class="text-center text-2xl font-bold mb-6 text-black">Login</h2>
          <label for="email" class="block mb-2 text-sm font-medium text-black">
            Username
          </label>
          <input
            type="email"
            v-model="userLogin.email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-black"
            >Password</label
          >
          <input
            type="password"
            v-model="userLogin.password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            type="submit"
            @click="login()"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            LOG IN
          </button>
          <button
            type="#"
            class="text-sky-600 hover-sky 600 text-center"
            @click="ForgetPass()"
          >
            Forget password
          </button>
        </div>
        <div class="flex items-center justify-center my-4">
          <span class="text-gray-500"> or </span>
        </div>
        <div class="flex flex-col space-y-2">
          <button
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"
            type="button"
          >
            Sign in with Google
          </button>
          <button
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"
            type="button"
          >
            Sign in with Facebook
          </button>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"
            type="button"
          >
            Sign in with X
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const userLogin = ref({
  email: "",
  password: "",
});

const login = () => {
  console.log(userLogin.value.email);
  console.log(userLogin.value.password);
  if (userLogin.value.email != "" && userLogin.value.password != "") {
    router.push("/homepage");
  } else {
    alert("Silakan isi email dan password");
  }
};
</script>
