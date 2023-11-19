<template>
  <div class="container">
    <button><a href="/">Powrót</a></button>
    <button><a href="/create-login">Zarejestruj się</a></button>
  </div>
</template>
<script lang="ts" setup>
const user = ref({
  username: "",
  password: "",
});

const login = async () => {
  // TODO send user Data to the login endpoint and redirect if  successful
};
</script>
