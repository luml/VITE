<template>
  <!-- <HelloWorld msg="Vite means fast in french, if you don't know, now you know" /> -->
  <span>🇨🇳</span>
  <router-link to="/child">CHECK CHILD</router-link>
  <br />
  <router-link :to="{ name: 'users', params: { id: 'James' } }">CHECK USER</router-link>
  <br />
  <router-link to="/redir">CHECK REDIRECT</router-link>
  <router-view class="view left-sidebar" name="FirstDay"></router-view>
  <router-view class="view main-content"></router-view>
  <router-view class="view right-sidebar" name="ChildPage"></router-view>
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
