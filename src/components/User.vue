<template>
  <div>{{ userName }} ✌🏼 {{ id.split("").reverse().join("") }}</div>
  <router-link :to="`/users/${id}/profile`">check profile</router-link>
  <router-link :to="`/users/${id}/posts`">check posts</router-link>
  <router-view></router-view>
  <router-link to="/">Home</router-link>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
    },
  },
  data() {
    return {
      userName: "",
    };
  },
  mounted() {
    this.userName = this.$route.params.id;
  },
};
</script>

<style lang="" scoped>
a {
  margin: 10px;
}
</style>
