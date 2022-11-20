<template>
  <div>
    <h1 class="text-4xl">
      Blog posts
    </h1>
    <hr class="mb-6">
    <div v-for="page in content" :key="page.path">
      <a :href="page._path">{{ page.title }}</a>
    </div>
  </div>
</template>
<script setup lang="ts">
const content = await queryContent('/blog').find();
</script>
