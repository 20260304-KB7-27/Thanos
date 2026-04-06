<template>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <span class="navbar-brand ps-2">팀 소개</span>
    <button
      class="navbar-toggler"
      type="button"
      @click="isNavShow = !isNavShow"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      :class="
        isNavShow ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'
      "
    >
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/rules">팀 규칙</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">팀 소개</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
const isNavShow = ref(false);
</script>
