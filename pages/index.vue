<template>
  <button><a href="/create-product">Dodaj produkt</a></button>

  <button><a href="/login">Zaloguj się</a></button>

  <fieldset>
    <legend>LISTA PRODUKTÓW</legend>
    <span v-for="product in data">
      <hr />
      <label>Title:</label>
      <span>{{ product.title }}</span> <br />
      <label>Description:</label>
      <span>{{ product.description }}</span
      ><br />
      <label>Creation date:</label>
      <span>{{ product.creationDate }}</span
      ><br />
      <img :src="product.imageUrl" />
      <br />

      <textarea
        v-model="input"
        id="description"
        placeholder="Napisz komentarz"
      ></textarea>
      <button @click="addCom(product._id)">Skomentuj!</button>
      <button>Wyświetl komentarze</button>
    </span>
  </fieldset>
</template>

<script setup lang="ts">
import "@/style.css";
const addCom = async (productId) => {
  const { data } = await useFetch("/api/add-comment", {
    method: "POST",
    body: JSON.stringify({
      productId,
      description: input.value,
    }),
  });
};
const input = ref(null);
const { data } = await useFetch("/api/products");
console.log(data.value);
</script>
