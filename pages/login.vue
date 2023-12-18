<template>
  <div class="container">
    <button><NuxtLink to="/">Powrót</NuxtLink></button>
    <button><NuxtLink to="/register">Zarejestruj się</NuxtLink></button>
  </div>
  <div>
    <button @click.prevent="logout">Wyloguj się</button>
    <h1>Zaloguj się</h1>
    <fieldset>
      <legend>Logowanie</legend>
      <label for="username">Nazwa użytkownika:</label><br />
      <input
        style="width: 400px"
        v-model="user.email"
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
      <!-- <button @click.prevent="register" class="button">Zarejestruj się</button> -->
    </fieldset>
  </div>
</template>
<script lang="ts" setup>
import "@/style.css";
const user = ref({
  email: "",
  password: "",
});

const supabase = useSupabaseClient();

const login = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: user.value.email,
    password: user.value.password,
  });
  if (error) console.log(error);
  console.log(data);
};

const register = async () => {
  const { data, error } = await supabase.auth.signUp({
    email: user.value.email,
    password: user.value.password,
  });
  if (error) console.log(error);
  console.log(data);
};

const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) console.log(error);
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
