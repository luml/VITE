<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <ul>
    <li>Try vue-router, tbc</li>
    <li>layout</li>
    <li>Make sure it will be continued</li>
  </ul>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style lang="">
ul {
  list-style: none;
}
</style>
