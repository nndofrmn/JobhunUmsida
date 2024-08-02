<template>
  <div
    class="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center"
  >
    <div
      class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transition-transform transform hover:scale-105"
    >
      <h2 class="text-3xl font-bold mb-6 text-center text-gray-800">Log In</h2>
      <form @submit.prevent="login">
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="email"
            v-model="userLogin.email"
            class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-3"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            v-model="userLogin.password"
            class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-3"
            required
          />
        </div>
        <button
          type="submit"
          class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full px-5 py-3 text-center transition-transform transform hover:scale-105"
        >
          Log In
        </button>
        <button
          type="reset"
          class="mt-4 block text-sm text-purple-500 hover:text-purple-800 text-center"
        >
          Forgot Password
        </button>
      </form>
      <div class="flex items-center justify-center my-6">
        <span class="text-gray-500">or</span>
      </div>
      <div class="flex flex-col space-y-3">
        <button
          class="bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg flex items-center justify-center transition-transform transform hover:scale-105"
          type="button"
        >
          <svg class="w-6 h-6 mr-2" viewBox="0 0 48 48">
            <path
              fill="#EA4335"
              d="M24 9.5c3.21 0 5.27 1.39 6.47 2.56l4.86-4.85C32.16 4.56 28.52 3 24 3 14.8 3 7.09 9.4 4.93 18h6.07C12.7 12.82 17.9 9.5 24 9.5z"
            ></path>
            <path
              fill="#4285F4"
              d="M46.5 24c0-1.47-.13-2.9-.37-4.29H24v8.14h12.7c-.6 3.18-2.36 5.86-4.96 7.67l6.07 4.71C41.43 37.3 46.5 31.23 46.5 24z"
            ></path>
            <path
              fill="#FBBC05"
              d="M11 28.9l-4.85 3.73C8.52 36.2 15.72 41 24 41c6.48 0 11.92-2.17 15.9-5.93l-6.08-4.7c-1.6 1.35-3.63 2.18-5.82 2.18-5.53 0-10.19-3.69-11.84-8.75H11z"
            ></path>
            <path
              fill="#34A853"
              d="M4.93 18H4v6.43H4.93c1.65 5.06 6.31 8.75 11.84 8.75 2.19 0 4.22-.82 5.82-2.18l6.07 4.7C35.92 38.83 30.48 41 24 41 15.72 41 8.52 36.2 4.93 28.9z"
            ></path>
          </svg>
          Sign in with Google
        </button>
        <button
          class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg flex items-center justify-center transition-transform transform hover:scale-105"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 mr-2"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
            />
          </svg>
          Sign in with Facebook
        </button>
        <button
          class="bg-black hover:bg-gray-800 text-white font-bold py-3 rounded-lg flex items-center justify-center transition-transform transform hover:scale-105"
          type="button"
        >
          <svg class="w-6 h-6 mr-2" viewBox="0 0 496 512">
            <path
              d="M496 294.1c0 131.6-108.2 233.9-245.7 233.9-65.5 0-126.1-26.7-172.6-74.7-8.2-8.4-15.8-17.3-22.7-26.7-7.4-10-14.3-20.5-20.7-31.3C-3.2 324.7 7.7 247.5 52.5 205.5c12.1-11.3 25.1-20.4 39-28 11.6-6.3 23.9-11.3 36.5-14.8 16.5-4.7 33.3-6.9 50.1-6.9 15.7 0 30.8 2 45.3 5.7 14.2 3.7 27.6 9.2 40.1 16.4 13.8 8 26.6 17.5 38.2 28.4 13.3 12.4 25.3 26.3 36.2 41.3 12.4 16.7 23.1 34.6 31.9 53.7 1.3 2.9 2.4 5.9 3.6 8.8 5.7 14.2 10.3 28.6 14.6 43.1 4.8 15.5 8.6 31.1 11.7 46.8 4 20.5 6.6 41.1 7.5 61.7 0.2 4.3 0.4 8.5 0.5 12.8z"
            />
          </svg>
          Sign in with Apple
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const userLogin = ref({
  email: "",
  password: "",
});
const router = useRouter();

const login = () => {
  console.log(userLogin.value.email);
  console.log(userLogin.value.password);
  if (userLogin.value.email !== "" && userLogin.value.password !== "") {
    router.push("/homepage"); // Ganti '/homepage' dengan rute tujuan setelah login
  } else {
    alert("Silakan isi email dan password");
  }
};
</script>

<style scoped>
form {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
