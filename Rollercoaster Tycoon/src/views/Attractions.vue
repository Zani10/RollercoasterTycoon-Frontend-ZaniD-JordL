<!-- src/views/Attractions.vue -->
<template>
    <div>
      <h1>Attractions</h1>
      <router-link to="/attractions/add">Add New Attraction</router-link>
      <ul>
        <li v-for="attraction in attractions" :key="attraction.id">
          {{ attraction.name }}
          <router-link :to="`/attractions/edit/${attraction.id}`">Edit</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import apiClient from '@/apiClient';
  
  export default {
    name: 'Attractions',
    data() {
      return {
        attractions: []
      };
    },
    created() {
      apiClient.get('/attractions')
        .then(response => {
          this.attractions = response.data;
        })
        .catch(error => {
          console.error('There was an error fetching the attractions!', error);
        });
    }
  };
  </script>
  