<!-- src/views/EditAttraction.vue -->
<template>
    <div>
    <h1>Edit Attraction</h1>
    <form @submit.prevent="editAttraction">
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
      <button type="submit">Save Changes</button>
    </form>
  </div>
  </template>
  
  <script>
  import apiClient from '@/apiClient';
  
  export default {
    name: 'EditAttraction',
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
    created() {
      const id = this.$route.params.id;
      apiClient.get(`/attractions/${id}`)
        .then(response => {
          this.attraction = response.data;
        })
        .catch(error => {
          console.error('There was an error fetching the attraction!', error);
        });
    },
    methods: {
      editAttraction() {
        const id = this.$route.params.id;
        apiClient.put(`/attractions/${id}`, this.attraction)
          .then(() => {
            this.$router.push('/attractions');
          })
          .catch(error => {
            console.error('There was an error editing the attraction!', error);
          });
      }
    }
  };
  </script>
  