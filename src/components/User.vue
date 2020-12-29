<template>
  <div>✌🏼 {{ userName }}</div>
  <router-link to="/">Home</router-link>
</template>

<script>
export default {
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

<style lang="" scoped></style>
