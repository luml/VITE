<template>
  <div>
    <h3>Posts List</h3>
    <router-link :to="`/users/${id}/posts/inc`">up-list</router-link>
    <router-link :to="`/users/${id}/posts/dec`">down-list</router-link>
  </div>
  <router-view class="view one"></router-view>
  <router-view class="view two" name="a"></router-view>
  <router-view class="view three" name="b"></router-view>
</template>

<script>
export default {
  data() {
    return {
      id: "",
    };
  },
  mounted() {
    this.id = this.$route.params.id;
  },
};
</script>

<style lang="" scoped></style>
