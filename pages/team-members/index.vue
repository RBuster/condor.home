<template>
  <div class="max-w-7xl mx-auto">
    <h1 class="text-5xl mb-8">
      All Team Members
    </h1>
    <a
      v-for="item in navigation"
      :key="item.name"
      :href="item.href"
      class="mb-4"
    >{{ item.name }}</a>
  </div>
</template>
<script setup>
const route = useRoute();
const navigation = [
  { name: 'Lia Irvin', href: route.fullPath + 'lia-irvin' }
];
</script>
