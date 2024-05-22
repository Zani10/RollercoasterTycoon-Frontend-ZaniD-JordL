<!-- src/views/AddAttraction.vue -->
<template>
    <div>
      <h1>Add New Attraction</h1>
      <form @submit.prevent="addAttraction">
        <div>
          <label for="name">Name:</label>
          <input v-model="attraction.name" id="name" required>
        </div>
        <div>
          <label for="category">Category:</label>
          <input v-model="attraction.category" id="category" required>
        </div>
        <div>
          <label for="capacity">Capacity:</label>
          <input v-model="attraction.capacity" id="capacity" required>
        </div>
        <div>
          <label for="yearBuilt">Year Built:</label>
          <input v-model="attraction.yearBuilt" id="yearBuilt" required>
        </div>
        <div>
          <label for="imageUrl">Image URL:</label>
          <input v-model="attraction.imageUrl" id="imageUrl">
        </div>
        <div>
          <label for="videoUrl">Onride Video URL:</label>
          <input v-model="attraction.videoUrl" id="videoUrl">
        </div>
        <button type="submit">Add Attraction</button>
      </form>
    </div>
  </template>
  
  <script>
  import apiClient from '@/apiClient';
  
  export default {
    name: 'AddAttraction',
    data() {
      return {
        attraction: {
          name: '',
          category: '',
          capacity: '',
          yearBuilt: '',
          imageUrl: '',
          videoUrl: ''
        }
      };
    },
    methods: {
      addAttraction() {
        apiClient.post('/attractions', this.attraction)
          .then(() => {
            this.$router.push('/attractions');
          })
          .catch(error => {
            console.error('There was an error adding the attraction!', error);
          });
      }
    }
  };
  </script>
  