<template>
  <div class="container">
    <button><a href="/">Powrót</a></button>
    <button><a href="/create-login">Zarejestruj się</a></button>
  </div>
  <div>
    <h1>Zaloguj się</h1>
    <fieldset>
      <legend>Logowanie</legend>
      <label for="username">Nazwa użytkownika:</label><br />
      <input
        style="width: 400px"
        v-model="user.username"
        type="text"
        class="input"
        id="username"
        placeholder="Podaj nazwę użytkownika"
        required
      />
      <br />
      <label for="password">Hasło:</label><br />
      <input
        style="width: 400px"
        v-model="user.password"
        type="password"
        class="input"
        id="password"
        placeholder="Podaj hasło użytkownika"
        required
      />
      <br />
      <button @click.prevent="login" class="button">Zaloguj się</button>
    </fieldset>
  </div>
</template>
<script lang="ts" setup>
import "@/style.css";
const user = ref({
  username: "",
  password: "",
});

const login = async () => {};
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
