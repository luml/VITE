<template>
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <!-- <FirstDay /> -->
  <span>🇨🇳</span>
  <router-link to="/child">Go click</router-link>
  <router-view></router-view>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import FirstDay from "./components/FirstDay.vue";
import ChildPage from "./components/ChildPage.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    FirstDay,
    ChildPage,
  },
};
</script>
