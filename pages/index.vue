<template>
  <li v-for="product in data">
    <pre>{{ product.creationDate }}</pre>
  </li>
</template>
<script setup lang="ts">
const { data } = await useFetch("/api/products");
console.log(data.value);
</script>
