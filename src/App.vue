<template>
  <HelloWorld msg="Vite means fast in french, if you don't know, now you know" />
  <span>🇨🇳</span>
  <router-link to="/child">CHECK CHILD</router-link>
  <!-- <router-link to="/users/elio">CHECK USER</router-link> -->
  <router-link :to="{ name: 'users', params: { id: 'James' } }">CHECK USER</router-link>
  <router-view></router-view>
  <router-view class="view left-sidebar" name="LeftSidebar"></router-view>
  <router-view class="view main-content"></router-view>
  <router-view class="view right-sidebar" name="RightSidebar"></router-view>
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
