<template>
  <h3>Home</h3>
  <RouterLink to="/rules" class="btn btn-primary me-2">
    <button>팀 규칙으로 이동</button>
  </RouterLink>
  <RouterLink to="/about" class="btn btn-primary">
    <button>팀 소개로 이동</button>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped></style>
