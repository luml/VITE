<template>
  <button>
    <router-link to="/" v-slot="{ route }">Login</router-link>
  </button>
</template>

<script>
export default {
  // mounted() {
  //   console.log(1111, this.$route);
  // },
};
</script>

<style scoped>
button {
  width: 80px;
  height: 32px;
  border: none;
  border-radius: 2px;
  font-size: 19px;
}
</style>
