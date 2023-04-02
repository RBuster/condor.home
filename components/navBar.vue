<template>
  <Disclosure v-slot="{ open }" as="nav" class="bg-inherit mb-4">
    <div class="mx-auto max-w-none px-2 sm:px-6 lg:px-8 nav-shadow border-b-zinc-200">
      <div class="flex flex-wrap justify-between lg:items-center sm:justify-start">
        <a href="/"><img
          class="mx-0 my-7 sm:m-7 sm:hidden"
          src="~/assets/images/logos/logo_sm.png"
          alt="Condor"
        ></a>
        <a href="/"><img
          class="hidden mx-0 my-7 h-16 w-fit sm:m-7 sm:block"
          src="~/assets/images/logos/logo_lg.png"
          alt="Condor"
        ></a>
        <div class="flex justify-self-end sm:hidden align-middle">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400"
          >
            <span class="sr-only">Open main menu</span>
            <div v-if="!open" class="block h-6 w-6" aria-hidden="true">
              <svg
                id="svg5"
                width="24.000002"
                height="15.786163"
                viewBox="0 0 6.3500006 4.1767557"
                version="1.1"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:svg="http://www.w3.org/2000/svg"
              >
                <defs id="defs2">
                  <linearGradient id="linearGradient9988">
                    <stop
                      id="stop9986"
                      style="stop-color: #fadc2e; stop-opacity: 1"
                      offset="0"
                    />
                  </linearGradient>
                  <linearGradient id="linearGradient3100">
                    <stop
                      id="stop3098"
                      style="stop-color: #fadc2e; stop-opacity: 1"
                      offset="0"
                    />
                  </linearGradient>
                </defs>
                <g
                  id="layer1"
                  style="display: inline"
                  transform="translate(0.00199846,-0.90827811)"
                >
                  <path
                    id="path9982-7"
                    style="
                      display: inline;
                      fill: #e9152d;
                      fill-opacity: 1;
                      stroke: none;
                      stroke-width: 0;
                      stroke-dasharray: none;
                    "
                    d="M 0.37715607,1.4377391 C 0.31341447,1.4331591 0.22103174,1.4107451 0.1792247,1.3897261 0.05343617,1.3264831 -0.00247637,1.2601649 -0.00199538,1.1747799 c 4.1987e-4,-0.074693 0.0450856,-0.1374393 0.13544147,-0.19027012 0.0654521,-0.03827 0.16103945,-0.06638 0.24557423,-0.072218 0.0763344,-0.00527 5.49839508,-0.00539 5.58145088,-1.251e-4 0.06548,0.00415 0.1550388,0.025444 0.2020551,0.048034 0.035047,0.016839 0.086595,0.04591 0.086595,0.048836 0,0.00136 0.010633,0.010633 0.023629,0.020611 0.068661,0.052721 0.095393,0.1508505 0.058903,0.2162159 -0.010112,0.018114 -0.021685,0.035035 -0.025717,0.037603 -0.00403,0.00257 -0.00733,0.00771 -0.00733,0.011432 0,0.010903 -0.070518,0.06239 -0.1174965,0.085787 -0.06777,0.033752 -0.1369847,0.050985 -0.2302893,0.057336 -0.099724,0.00679 -5.4791351,0.00651 -5.57366223,-2.877e-4 z"
                  />
                  <path
                    id="path9996"
                    style="
                      fill: #fadc2e;
                      fill-opacity: 1;
                      stroke: none;
                      stroke-width: 0;
                      stroke-dasharray: none;
                    "
                    d="M 0.39371263,3.2578838 C 0.29932569,3.2496884 0.18455377,3.2152695 0.12273521,3.1766204 0.03550319,3.1220827 -0.0045847,3.0565689 0.00224225,2.9797042 0.00703397,2.9257528 0.02571051,2.8892694 0.06764212,2.851949 0.09372248,2.8287367 0.18109166,2.774427 0.1923532,2.774427 c 0.002348,0 0.0221433,-0.00641 0.0439904,-0.014246 0.0218471,-0.00784 0.0657006,-0.018282 0.097452,-0.023216 0.0554532,-0.00862 0.16733151,-0.00897 2.8370167,-0.00897 2.6940746,0 2.7811835,2.82e-4 2.8411406,0.0092 0.1020583,0.015182 0.2333866,0.0715 0.2663226,0.1142096 0.00466,0.00605 0.011596,0.010997 0.015404,0.010997 0.00381,0 0.00692,0.00302 0.00692,0.00672 0,0.0037 0.010063,0.019643 0.022362,0.035435 0.020313,0.026081 0.022387,0.034085 0.022631,0.087362 2.449e-4,0.053638 -0.00176,0.061575 -0.023475,0.092864 -0.013059,0.018817 -0.034377,0.042332 -0.047373,0.052255 -0.012996,0.00992 -0.023629,0.019418 -0.023629,0.0211 0,0.00514 -0.05965,0.03752 -0.098966,0.053729 -0.052526,0.021656 -0.1404007,0.04118 -0.2091899,0.046478 -0.074229,0.00572 -5.48327261,0.00526 -5.54925191,-4.645e-4 z"
                  />
                  <path
                    id="path11590"
                    style="
                      fill: #184f9e;
                      fill-opacity: 1;
                      stroke: none;
                      stroke-width: 0;
                      stroke-dasharray: none;
                    "
                    d="m 0.39598523,5.0815237 c -0.0714039,-0.0063 -0.13282309,-0.018235 -0.16354751,-0.031774 -0.0152233,-0.00671 -0.0310198,-0.012197 -0.035103,-0.012197 -0.004083,0 -0.0290156,-0.012387 -0.0554048,-0.027527 C 0.08987775,4.9801629 0.03686159,4.933027 0.02544873,4.9064638 0.0215052,4.8972861 0.01465644,4.8814647 0.01022863,4.8713052 0.00580109,4.8611455 0.00217672,4.8362085 0.00217584,4.8158894 0.00216746,4.6973789 0.12374906,4.6000002 0.31929997,4.5618943 l 0.0742243,-0.014464 H 3.1810582 5.968592 l 0.070766,0.015354 c 0.139315,0.030226 0.2273334,0.080379 0.284269,0.1619769 0.021802,0.031246 0.024072,0.039802 0.024196,0.091201 8.82e-5,0.051645 -0.00202,0.059798 -0.023951,0.091128 C 6.2636,4.9931792 6.1691346,5.046335 6.0294378,5.0727662 L 5.968592,5.0842785 3.2057997,5.084975 C 1.6862638,5.0853629 0.42184738,5.083805 0.3959854,5.081525 Z"
                  />
                </g>
              </svg>
            </div>
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
                  :class="[
                    item.current ? 'text-cyan-600' : 'text-black hover:text-cyan-400',
                    'px-3 py-2 lg:mx-4 rounded-md text-sm font-medium',
                  ]"
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
          :class="[
            item.current ? 'text-cyan-600' : 'text-black hover:text-cyan-400',
            'block px-3 py-2 rounded-md text-base font-medium',
          ]"
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
import { XMarkIcon } from '@heroicons/vue/24/outline';
const route = useRoute();
const navigation = [
  { name: 'Home', href: '/', current: true, showInNav: true },
  { name: 'About', href: '#', current: false, showInNav: false },
  { name: 'Meet the Team', href: '/team-members', current: false, showInNav: true },
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
.nav-item {
  text-decoration: none;
  font-weight: bold;
}

.nav-shadow {
  box-shadow: 0 0 50px 0 black;
}
</style>
