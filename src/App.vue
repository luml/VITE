<template>
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <FirstDay />
  <span>🇨🇳</span>
  <span>BJ</span>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FirstDay from './components/FirstDay.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    FirstDay,
  }
}
</script>
