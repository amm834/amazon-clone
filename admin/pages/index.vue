<script setup>

const name = ref('');
</script>

<template>
  <h1>Index page</h1>
  <input type="text" v-model="name">
  {{ name }}
</template>

