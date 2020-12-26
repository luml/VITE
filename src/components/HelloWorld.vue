<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <ul>
    <li>Try vue-router</li>
    <li>Make sure it will be continued</li>
  </ul>
  <h3>Vite means fast in french, if you don't know, now you know</h3>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
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
