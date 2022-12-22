<template>
  <main>
    <!-- Jumbotron -->
    <div
      class="
      p-12
      text-center
      relative
      overflow-hidden
      bg-no-repeat
      bg-cover
      jumbotron"
    >
      <div
        class="absolute
        top-0
        right-0
        bottom-0
        left-0
        w-full
        h-full
        overflow-hidden
        bg-fixed"
        style="background-color: rgba(0, 0, 0, 0.6)"
      >
        <div class="flex justify-end items-end h-full pb-12 pr-12">
          <div class="text-white">
            <h4 class="font-semibold text-base mb-6" style="letter-spacing: 12px;">
              BUYING <span class="text-yellow-300">|</span> SELLING <span class="text-yellow-300">|</span> RENTING
            </h4>
            <h2 class="font-semibold text-4xl mb-4">
              WE HAVE YOU COVERED
            </h2>
          </div>
        </div>
      </div>
    </div>
    <!-- Jumbotron -->
    <div class="flex">
      ABOUT US
    </div>
  </main>
</template>
<style scoped lang="scss">
.jumbotron{
  background-image: url('~/assets/images/jumbotron_back.jpg');
  height: 400px;
  background-position: bottom;
}
</style>
