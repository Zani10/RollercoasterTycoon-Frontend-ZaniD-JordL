<!-- src/views/AddMaintenanceRecord.vue -->
<template>
    <div>
      <h1>Add Maintenance Record for {{ attraction.name }}</h1>
      <form @submit.prevent="addMaintenanceRecord">
        <div>
          <label for="date">Date:</label>
          <input v-model="maintenance.date" id="date" required type="date">
        </div>
        <div>
          <label for="description">Description:</label>
          <input v-model="maintenance.description" id="description" required>
        </div>
        <button type="submit">Add Record</button>
      </form>
    </div>
  </template>
  
  <script>
  import apiClient from '@/apiClient';
  
  export default {
    name: 'AddMaintenanceRecord',
    data() {
      return {
        attraction: {},
        maintenance: {
          date: '',
          description: '',
          resolved: false
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
      addMaintenanceRecord() {
        const id = this.$route.params.id;
        apiClient.post(`/attractions/${id}/maintenance`, this.maintenance)
          .then(() => {
            this.$router.push(`/attractions/${id}/maintenance`);
          })
          .catch(error => {
            console.error('There was an error adding the maintenance record!', error);
          });
      }
    }
  };
  </script>
  