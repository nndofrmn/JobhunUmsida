<template>
  <div id="app">
    <div class="login-container">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Email:</label>
          <input v-model="email" type="email" id="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input v-model="password" type="password" id="password" required />
        </div>
        <button type="submit">Login</button>
        <p v-if="message" :class="{ error: isError }">{{ message }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const message = ref('');
const isError = ref(false);

const login = async () => {
  try {
    const response = await fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email.value, password: password.value }),
    });

    const result = await response.json();

    if (response.ok) {
      message.value = result.message;
      isError.value = false;
    } else {
      message.value = result.message;
      isError.value = true;
    }
  } catch (error) {
    message.value = 'An error occurred';
    isError.value = true;
  }
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}

.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;
  font-size: 16px;
}

p.error {
  color: red;
}

p {
  margin-top: 20px;
}
</style>
