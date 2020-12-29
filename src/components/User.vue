<template>
  <div>{{ userName }} ✌🏼 {{ id }}</div>
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

<style lang="" scoped></style>
