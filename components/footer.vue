<template>
  <footer class="mt-12">
    <div class="condor-logo mb-4">
      <img class="w-44 mx-auto" src="~/assets/images/logos/logo_stub_md.png" alt="">
    </div>
    <div class="h-5 w-full block bg-brand-yellow" />
    <div class="bg-black pt-4">
      <div class="info flex flex-col justify-center w-full pb-8 text-white sm:flex-row">
        <div class="text-center pb-4 mx-4 info-block">
          <div class="text-brand-red">
            OFFICE
          </div>
          <div>ADDRESS</div>
          <div>LUBBOCK, TX 79424</div>
        </div>
        <div class="text-center pb-4 mx-4 info-block">
          <div class="text-brand-blue">
            CONTACT
          </div>
          <div>806.123.4567</div>
          <div>EMAIL@GMAIL.COM</div>
        </div>
        <div class="text-center pb-4 mx-4 info-block">
          <div class="text-brand-yellow">
            HOURS
          </div>
          <div>MON &mdash; SUN</div>
          <div>8AM - 5PM</div>
        </div>
      </div>
      <div class="footer-copy flex flex-col items-center w-full px-24 md:flex-row">
        <div class="badge mb-8 md:mb-0">
          <img src="~/assets/images/logos/NJ_Logo.png" alt="Nathan Jordan Real Estate">
        </div>
        <div class="w-full text-gray-300 flex flex-col items-center mb-8 md:mb-0">
          <p class="text-center">
            &copy; 2023 CONDOR PROPERTY MANAGEMENT. ALL RIGHTS RESERVED
          </p>
          <div class="pt-4">
            <img class="w-full mx-auto" src="~/assets/images/logos/related_logos.png" alt="Realtor Credentials">
          </div>
        </div>
        <div class="social-icons flex flex-row justify-between items-end md:flex-col">
          <img class="py-2" src="~/assets/images/logos/social/fb.png" alt="">
          <img class="py-2" src="~/assets/images/logos/social/ig.png" alt="">
          <img class="py-2" src="~/assets/images/logos/social/tw.png" alt="">
        </div>
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
  .condor-logo{
    background-image: url('~/assets/images/backgrounds/foot-lines.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .footer-copy{
    .badge, .social-icons{
      width: 150px;
    }
  }
}
</style>
