<template>
  <Disclosure v-slot="{ open }" as="nav" class="bg-inherit mb-4">
    <div class="mx-auto max-w-none px-2 sm:px-6 lg:px-8 nav-shadow border-b-zinc-200">
      <div class="flex flex-wrap justify-between lg:items-center sm:justify-start">
        <img class="mx-0 my-7 sm:m-7 sm:hidden" src="~/assets/images/logo_sm.png" alt="Condor">
        <img class="hidden mx-0 my-7 h-16 w-fit sm:m-7 sm:block" src="~/assets/images/logo_lg.png" alt="Condor">
        <div class="flex justify-self-end sm:hidden align-middle">
          <!-- Mobile menu button-->
          <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-7xl">
      <div class="relative flex items-center justify-between">
        <div class="w-full items-center mt-8">
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-8 items-center justify-between">
              <div>
                <a
                  v-for="item in activeLinks"
                  :key="item.name"
                  class="nav-item"
                  :href="item.href"
                  :class="[item.current ? 'text-cyan-600' : 'text-black hover:text-cyan-400', 'px-3 py-2 lg:mx-4 rounded-md text-sm font-medium']"
                  :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</a>
              </div>

              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Mobile Menu -->
    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <DisclosureButton
          v-for="item in activeLinks"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[item.current ? 'text-cyan-600' : 'text-black hover:text-cyan-400', 'block px-3 py-2 rounded-md text-base font-medium']"
          :aria-current="item.current ? 'page' : undefined"
        >
          {{ item.name }}
        </DisclosureButton>
        <SearchBar />
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
const route = useRoute();
const navigation = [
  { name: 'Home', href: '/', current: true, showInNav: true },
  { name: 'About', href: '#', current: false, showInNav: false },
  { name: 'Meet the Team', href: '#', current: false, showInNav: true },
  { name: 'Blog', href: '/blog', current: false, showInNav: false },
  { name: 'Contact', href: '#', current: false, showInNav: false }
];
navigation.forEach((navItem) => {
  if (navItem.href === route.path) {
    navItem.current = true;
  } else {
    navItem.current = false;
  }
});
const activeLinks = navigation.filter(item => item.showInNav);
</script>
<style scoped lang="scss">
.nav-item{
  text-decoration: none;
  font-weight: bold;
}

.nav-shadow{
  box-shadow: 0 0 50px 0 black;
}

</style>
