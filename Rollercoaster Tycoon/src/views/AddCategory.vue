<!-- src/views/AddCategory.vue -->
<template>
    <div>
      <h1>Add New Category</h1>
      <form @submit.prevent="addCategory">
        <div>
          <label for="name">Name:</label>
          <input v-model="category.name" id="name" required>
        </div>
        <button type="submit">Add Category</button>
      </form>
    </div>
  </template>
  
  <script>
  import apiClient from '@/apiClient';
  
  export default {
    name: 'AddCategory',
    data() {
      return {
        category: {
          name: ''
        }
      };
    },
    methods: {
      addCategory() {
        apiClient.post('/categories', this.category)
          .then(() => {
            this.$router.push('/categories');
          })
          .catch(error => {
            console.error('There was an error adding the category!', error);
          });
      }
    }
  };
  </script>
  