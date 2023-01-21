<template>
  <div class="max-w-7xl mx-auto">
    <div class="text-center mt-4 mb-4 max-w-7xl mx-auto">
      <div class="text-xl">
        MEET THE
      </div>
      <div class="flex flex-nowrap items-center justify-center text-6xl">
        <div class="border-b-2 w-40 mr-8" />
        TEAM
        <div class="border-b-2 w-40 ml-8" />
      </div>
      <p class="mb-4 w-3/4 mx-auto">
        You blew my cawva! You've just been erased... Do it! Hey light head. Fuck you. Now listen to me very carefully. Feel how soft my skin is. The iceman cometh...
      </p>
    </div>
    <a
      v-for="item in navigation"
      :key="item.name"
      :href="item.href"
      class="mb-4 block"
    >{{ item.name }}</a>
  </div>
</template>
<script setup>
const navigation = [
  { name: 'Lia Irvin', href: '/team-members/lia-irvin' },
  { name: 'Shelby Peebles', href: '/team-members/shelby-peebles' }
];
</script>
