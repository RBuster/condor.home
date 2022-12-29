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
const navigation = [
  { name: 'Lia Irvin', href: '/team-members/lia-irvin' }
];
</script>
