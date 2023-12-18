<template>
  <div class="container">
    <button><a href="/login">Powrót</a></button>
  </div>
  <div>
    <h1>Zarejestruj się</h1>
    <fieldset>
      <legend>Rejestracja</legend>
      <form @submit.prevent="register">
        <label for="username">Nazwa użytkownika:</label><br />
        <input
          style="width: 400px"
          v-model="user.email"
          type="text"
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
<script setup>
import "@/style.css";
const user = ref({
  email: "",
  password: "",
});

const supabase = useSupabaseClient();
const register = async () => {
  const { data, error } = await supabase.auth.signUp({
    email: user.value.email,
    password: user.value.password,
  });
  if (error) console.log(error);
  console.log(data);
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
