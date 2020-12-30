<template>
  <section class="left">
    <router-link to="/child">CHECK CHILD</router-link>
    <br />
    <router-link :to="{ name: 'users', params: { id: 'James' } }">CHECK USER</router-link>
    <br />
    <router-link to="/redir">CHECK REDIRECT</router-link>
  </section>
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

<style lang="css" scoped>
.left {
  position: absolute;
  left: 10%;
  margin-right: 100px;
}
.left span,
a {
  margin: 10px;
}
.left + div {
  margin-left: 20%;
}
</style>
