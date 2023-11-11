<style>
body {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vh;
  background: #74ebd5;
  background: -webkit-linear-gradient(to right, #acb6e5, #74ebd5);
  background: linear-gradient(to right, #acb6e5, #74ebd5);
}
</style>
<template>
  <div>
    <h1>Dodaj nowy produkt</h1>
    <fieldset>
      <legend>Dane produktu</legend>
      <form @submit.prevent="submitForm">
        <label for="title">Tytuł:</label><br />
        <input v-model="item.title" type="text" id="title" required />
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

<script>
import axios from "axios";

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
