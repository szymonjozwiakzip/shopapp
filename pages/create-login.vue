<template>
  <div class="container">
    <button><a href="/">Powrót</a></button>
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
const supabase = useSupabaseClient();
const user = ref({
  email: "",
  password: "",
});
const register = async () => {
  const { error } = await supabase.auth.signUp({
    email: user.value.email,
    password: user.value.password,
    options: {
      emailRedirectTo: "http://localhost:3000/confirm",
    },
  });
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
