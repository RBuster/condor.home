<template>
  <main>
    <div class="bg-brand-yellow mx-auto text-center max-w-fit px-8 py-4 font-semibold notice">
      <a href="/legal/tx_real_estate_comm.pdf">Texas Real Estate Commission Consumer Protection Notice</a>
    </div>
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
            <h4 class="font-semibold text-base sm:text-xl mb-6" style="letter-spacing: 12px;">
              BUYING <span class="text-brand-yellow">|</span> SELLING <span class="text-brand-yellow">|</span> RENTING
            </h4>
            <h2 class="font-semibold text-4xl mb-4">
              WE HAVE YOU COVERED
            </h2>
          </div>
        </div>
      </div>
    </div>
    <!-- Jumbotron -->
    <div class="flex flex-col mt-4 mx-auto max-w-7xl sm:flex-row sm:flex-nowrap">
      <div class="w-2/3 mx-auto p-4 sm:mx-2 about-us">
        <img class="w-40 mb-4" src="~/assets/images/misc/about_us.png" alt="About Us">
        <p class="mb-2">
          Freeze in hell batman! I'm not a pervert. No more complaining. That's for sleeping with my wife. I'm not a pervert. Fugettit, i'm not going to sit on your lap. Remember, i can break your neck like a chicken's.
          Who are you? Stop being such a pussy. Alright everyone. Let's kick some ice. Crumb. Come on! Get to the choppa. Back to the carpet. I don't do requests. Who the fuck are you? One of us is in deep trouble.
        </p>
        <button class="bg-brand-red block mx-auto w-32 py-2 px-4 text-white">
          MORE
        </button>
      </div>
      <div class="bg-black h-56 w-1/3 mx-auto sm:mx-2" />
    </div>
    <div class="bg-brand-blue text-white px-8 py-4 max-w-fit mx-auto mt-4 text-lg md:text-3xl">
      CONTACT US TO MAKE THE NEXT MOVE IN YOUR LIFE.
    </div>
  </main>
</template>
<style scoped lang="scss">
.jumbotron{
  background-image: url('~/assets/images/backgrounds/jumbotron_back.jpg');
  height: 400px;
  background-position: bottom;
}
.about-us{
  background:transparent url('~/assets/images/backgrounds/wavy.png') no-repeat center center;
  background-size: 100% 100%;
}
.notice{
  position: relative;
  margin-bottom: -25px;
  z-index: 1;
}
</style>
