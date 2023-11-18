<template>
  <div class="container">
    <button><a href="/">Powrót</a></button>
  </div>
  <div>
    <h1>Dodaj nowy produkt</h1>
    <fieldset>
      <legend>Dane produktu</legend>
      <form @submit.prevent="submitForm">
        <label for="title">Tytuł:</label><br />
        <input
          style="width: 400px"
          v-model="item.title"
          type="text"
          id="title"
          placeholder="Podaj tytuł produktu"
          required
        />
        <br />
        <label for="description">Opis:</label><br />
        <textarea
          v-model="item.description"
          id="description"
          placeholder="Podaj opis produktu"
        ></textarea>
        <br />
        <label for="imageUrl">Zdjęcie:</label><br />
        <input
          style="width: 400px"
          v-model="item.imageUrl"
          type="text"
          id="imageUrl"
          placeholder="Podaj URL"
        />

        <br />
        <button type="submit">Dodaj</button>
      </form>
    </fieldset>
  </div>
</template>
<style>
body {
  text-align: center;
}
.container {
  text-align: center;
}
form {
  text-align: left;
}
fieldset {
  width: 50%;
  margin: 0 auto;
  padding: 10px;
  border: 8px double #f55549;
  width: 400px;
}
</style>
<script>
import "@/style.css";
import axios from "axios";
//const { data } = await useFetch("/api/products");
//console.log(data.value);

export default {
  data() {
    return {
      item: {
        title: "",
        description: "",
        imageUrl: "",
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post("/api/add-product", this.item);

        this.item = {
          title: "",
          description: "",
          imageUrl: "",
        };
        const { title, description, imageUrl } = await useFetch;

        console.log("Dodano produkt:", response.data);
      } catch (error) {
        console.error("Wystąpił błąd podczas zapisywania produktu:", error);
      }
    },
  },
};
</script>
