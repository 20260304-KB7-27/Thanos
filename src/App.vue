<template>
  <div class="container">
    <Header></Header>
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import { computed, onMounted, provide, reactive } from 'vue';
import axios from 'axios';
</script>

<style scoped></style>
