<!-- src/views/MaintenanceRecords.vue -->
<template>
    <div>
      <h1>Maintenance Records for {{ attraction.name }}</h1>
      <router-link :to="`/maintenance/add/${attraction.id}`">Add Maintenance Record</router-link>
      <ul>
        <li v-for="record in maintenanceRecords" :key="record.id">
          {{ record.date }} - {{ record.description }} - {{ record.resolved ? 'Resolved' : 'Unresolved' }}
          <button @click="resolveRecord(record.id)" v-if="!record.resolved">Resolve</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import apiClient from '@/apiClient';
  
  export default {
    name: 'MaintenanceRecords',
    data() {
      return {
        attraction: {},
        maintenanceRecords: []
      };
    },
    created() {
      const id = this.$route.params.id;
      apiClient.get(`/attractions/${id}`)
        .then(response => {
          this.attraction = response.data;
          this.fetchMaintenanceRecords(id);
        })
        .catch(error => {
          console.error('There was an error fetching the attraction!', error);
        });
    },
    methods: {
      fetchMaintenanceRecords(attractionId) {
        apiClient.get(`/attractions/${attractionId}/maintenance`)
          .then(response => {
            this.maintenanceRecords = response.data;
          })
          .catch(error => {
            console.error('There was an error fetching the maintenance records!', error);
          });
      },
      resolveRecord(recordId) {
        apiClient.put(`/maintenance/${recordId}/resolve`)
          .then(() => {
            this.fetchMaintenanceRecords(this.attraction.id);
          })
          .catch(error => {
            console.error('There was an error resolving the maintenance record!', error);
          });
      }
    }
  };
  </script>
  