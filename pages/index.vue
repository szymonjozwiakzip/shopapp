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
        v-model="inputValues[product._id]"
        id="description"
        placeholder="Napisz komentarz"
      ></textarea>
      <button @click="addCom(product._id)">Skomentuj!</button>
      <span
        v-for="comment in getComments(product._id)"
        :key="comment.commentId"
      >
        <p>{{ comment.description }}</p>
      </span>
    </span>
  </fieldset>
</template>

<script setup lang="ts">
import "@/style.css";

const supabase = useSupabaseUser();

const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) console.log(error);
};

console.log(supabase.value);
const addCom = async (productId) => {
  const { data } = await useFetch("/api/add-comment", {
    method: "POST",
    body: JSON.stringify({
      productId,
      description: inputValues[productId],
    }),
  });
};
const getComments = (productId) => {
  return dataC.value.filter((comment) => comment.productId === productId);
};
const inputValues = reactive({});
const input = ref(null);
const { data: dataC } = await useFetch("/api/comments");
const { data } = await useFetch("/api/products");
console.log(data.value);
</script>
