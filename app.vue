<template>
  <div>
    <h1>Dodaj nowy produkt</h1>
    <fieldset>
      
    <legend>Dane użytkownika</legend>
    <form @submit.prevent="submitForm">
      <label for="title">Tytuł:</label><br>
      <input v-model="item.title" type="text" id="title" required>
      <br>
      <label for="description">Opis:</label><br>
      <textarea v-model="item.description" id="description" required></textarea>
      <br>
      <label for="creationDate">Data:</label><br>
      <input v-model="item.creationDate" type="date" id="creationDate" required>
      <br>
      <label for="imageUrl">Zdjęcie:</label><br>
      <input v-model="item.imageUrl" type="text" id="imageUrl" required>

      <br>
      <button type="submit">Dodaj</button>
    </form>
    </fieldset>
  </div>
</template>


<script>
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export default {
  data() {
    return {
      item: {
        id: '',
        title: '',
        description: '',
        creationDate: '',
        imageUrl: '',
        isDeleted: ''
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        this.item.id = uuidv4();
        const response = await axios.post('/api/add-product', this.item);

        this.item = {
          id: '',
          title: '',
          description: '',
          creationDate: '',
          imageUrl: '',
          isDeleted: 'no'
        };

        console.log('Dodano produkt:', response.data);
      } catch (error) {
        console.error('Wystąpił błąd podczas zapisywania produktu:', error);
      }
    }
  }
};
</script>