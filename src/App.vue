<template>
  <div>
    <HeaderComponent />
    <main>
      <router-view />
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/Header.vue";
import FooterComponent from "./components/Footer.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>
