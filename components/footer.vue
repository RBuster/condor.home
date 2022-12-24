<template>
  <footer>
    <div class="">
      <img class="w-44 mx-auto" src="~/assets/images/logo_stub_md.png" alt="">
    </div>
    <div class="h-5 w-full block bg-yellow-400" />
    <div class="bg-black pt-4">
      <div class="info flex flex-col justify-center w-full pb-8 text-white sm:flex-row">
        <div class="text-center pb-4 mx-4 info-block">
          <div class="text-red-500">
            OFFICE
          </div>
          <div>ADDRESS</div>
          <div>LUBBOCK, TX 79424</div>
        </div>
        <div class="text-center pb-4 mx-4 info-block">
          <div class="text-red-500">
            CONTACT
          </div>
          <div>806.123.4567</div>
          <div>EMAIL@GMAIL.COM</div>
        </div>
        <div class="text-center pb-4 mx-4 info-block">
          <div class="text-red-500">
            HOURS
          </div>
          <div>MON &mdash; SUN</div>
          <div>8AM - 5PM</div>
        </div>
      </div>
      <div class="w-full text-center text-gray-300">
        &copy; 2023 CONDOR PROPERTY MANAGEMENT. ALL RIGHTS RESERVED
      </div>
      <p class="text-center text-gray-300">
        Dave made this website
      </p>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer'
};
</script>
<style scoped lang="scss">
footer{
  .info{
    .info-block{
      min-width: 172px;
      font-size: .75rem;
    }
    div{
      font-family: 'Aviano Serif';
    }

  }
}
</style>
