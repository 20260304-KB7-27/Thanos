<template>
  <div>
    <h3>{{ mine.name }}</h3>
    <p>{{ mine.mbti }}</p>
    <p>{{ mine.birthday }}</p>
    <p>{{ mine.hobby }}</p>
  </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const BASEURI = '/api/students';

const mine = ref({});

const fetchAllStudent = async () => {
  try {
    const response = await axios.get(BASEURI);

    if (response.status === 200) {
      console.log(response.data);

      mine.value = response.data[1];
    } else {
      console.log('데이터 조회 실패');
    }
  } catch (e) {
    console.log('error : ', e);
  }
};

onMounted(() => {
  fetchAllStudent();
});
</script>

<style scoped></style>
