<template>
  <h1>The WORLD'S SIMPLEST FAMILY TREE</h1>
  <section class="left">
    <router-link to="/login" v-slot="{ href, route, navigate, isActive, isExactActive }">
      <NavLink :active="isActive" :href="href" @click="navigate">
        {{ isActive === true ? "LOGIN" : "LOGINOUT" }}
      </NavLink>
    </router-link>
    <br />
    <router-link to="/child">CHECK CHILD</router-link>
    <br />
    <router-link :to="{ name: 'users', params: { id: 'James' } }"
      >CHECK CHILD NAME</router-link
    >
    <br />
    <router-link to="/redir">REDIRECT</router-link>
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
  data() {
    return {
      isLogin: "LOGIN",
    };
  },
  methods: {
    navigate(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="css" scoped>
h1 {
  margin-left: 20%;
}
.left {
  position: absolute;
  left: 10%;
  margin-right: 100px;
}
.left span,
a {
  margin: 10px;
}
.left a {
  font-size: 20px;
}
.left + div {
  margin-left: 20%;
}
</style>
