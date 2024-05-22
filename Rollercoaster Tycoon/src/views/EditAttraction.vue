<!-- src/views/EditAttraction.vue -->
<template>
    <div>
      <h1>Edit Attraction</h1>
      <form @submit.prevent="editAttraction">
        <!-- Form fields similar to AddAttraction.vue -->
        <!-- Fill the fields with data bound to attraction object -->
        <!-- Use v-model directive for two-way binding -->
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
  