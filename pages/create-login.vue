<template>
  <div class="container">
    <button><a href="/">Powrót</a></button>
  </div>
  <div>
    <h1>Zarejestruj się</h1>
    <fieldset>
      <legend>Rejestracja</legend>
      <form @submit.prevent="submitForm">
        <label for="username">Nazwa użytkownika:</label><br />
        <input
          style="width: 400px"
          v-model="item.username"
          type="text"
          id="username"
          placeholder="Podaj nazwę użytkownika"
          required
        />
        <br />
        <label for="password">Hasło:</label><br />
        <input
          style="width: 400px"
          v-model="item.password"
          type="password"
          id="password"
          placeholder="Podaj hasło użytkownika"
          required
        />
        <br />
        <button type="submit">Zarejestruj się</button>
      </form>
    </fieldset>
  </div>
</template>
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
        const response = await axios.post("/api/add-user", this.item);

        this.item = {
          username: "",
          password: "",
        };
        const { username, password } = await useFetch;

        console.log("Dodano użytkownika:", response.data);
      } catch (error) {
        console.error("Wystąpił błąd podczas zapisywania użytkownika:", error);
      }
    },
  },
};
</script>
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
