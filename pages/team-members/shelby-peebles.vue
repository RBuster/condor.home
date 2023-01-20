<template>
  <div>
    <div>
      <nav class="bg-grey-light rounded-md w-fit mx-auto text-center mb-8 font-semibold">
        <ol class="list-reset flex">
          <li><a href="#" class="text-black">HOME</a></li>
          <li><span class="text-brand-red mx-2">></span></li>
          <li><a href="#" class="text-black">MEET THE TEAM</a></li>
          <li><span class="text-brand-red mx-2">></span></li>
          <li class="text-black">
            LIA IRVIN
          </li>
        </ol>
      </nav>
    </div>
    <!-- Jumbotron -->
    <div
      class="
      text-center
      relative
      overflow-hidden
      bg-no-repeat
      bg-cover
      jumbotron
      h-60
      sm:h-80"
    >
      <div
        class="
        w-full
        h-full
        overflow-hidden
        bg-fixed"
        style="background-color: rgba(255, 255, 255, 0.6)"
      >
        <div class="flex items-center justify-center h-full">
          <div class="text-black">
            <h2 class="font-semibold text-7xl mb-4 sm:text-9xl">
              LIA IRVIN
            </h2>
            <span class="block text-right w-full text-brand-blue font-bold">DRE# 000000000000</span>
          </div>
        </div>
      </div>
    </div>
    <!-- Jumbotron -->
    <div class="relative team-member-wrapper hidden lg:block">
      <div class="bg-black w-3/4 h-80 mb-28 team-member-background">
        <div class="team-member-copy-lg hidden lg:block">
          <p class="text-white" v-html="teamMemeberCopy" />
        </div>
        <div class="team-member-image">
          <img src="/team-members/Lia_Irvin.jpg" alt="Lia Irvin Realtor">
        </div>
      </div>
    </div>
    <div class="bg-black h-fit p-4 block lg:hidden">
      <div class="team-member-image">
        <img src="/team-members/Lia_Irvin.jpg" alt="Lia Irvin Realtor">
      </div>
      <div class="team-member-copy-sm mt-16 text-center mb-8 mx-8 text-white">
        <p v-html="teamMemeberCopy" />
      </div>
    </div>

    <div class="contact bg-brand-yellow text-center p-2 text-4xl ml-0 md:ml-96 md:text-left">
      <span class="pb-2 sm:pb-0">806.123.4567</span> <span class="hidden sm:inline-block">|</span> email@gmail.com
    </div>
  </div>
</template>
<script setup>
const teamMemeberCopy = `<span class="text-brand-yellow">LOREM</span> The pavement with his enemy. Hahaha. I'm here. I eat green barrettes for breakfast. I'll live to see you eat that contract. Take it back. You're a fucking choir boy compared to me...
            Get down. Because i'm going to ram it into your stomach and break your goddamn spine! Hasta la vista baby. Into the tunnel. You lie! You got what you want... Here's a couple of acres... I'm a terminator.`;
</script>
<style scoped lang="scss">
.jumbotron{
  background-image: url('~/assets/images/backgrounds/teammember_jumbo.jpg');

}

.team-member-wrapper{
  height: fit-content;
}
.team-member-image{
    position: relative;
    top: 2rem;
    margin: 0 auto;
    z-index: 1;
    height: 75%;
    width: fit-content;
    border: solid white 10px;
    >img{
      height: 500px;
    }
}
.team-member-background{
  position: absolute;
  right: 0;
  top: 0;
  height: 50%;
  width: 100%;
  .team-member-copy-lg{
      position: absolute;
      right: 0;
      width: 55%;
      padding: 1rem;
    }
}
@media (min-width: 440px) {
  .team-member-image{
    position: relative;
    top: 2rem;
    margin: 0 auto;
    z-index: 1;
    height: fit-content;
    width: fit-content;
  }
  .team-member-background{
    position: absolute;
    right: 0;
    top: 0;
    height: 400px;
    width: 100%;
  }
  .team-member-wrapper{
    height: fit-content;
  }
}
@media (min-width: 700px) {
  .team-member-image{
    position: static;
    height: fit-content;
    width: fit-content;
  }
  .team-member-background{
    position: absolute;
    right: 5%;
    top: 90px;
    height: 400px;
    width: 650px;
    .team-member-copy-lg{
      width: 35%;
    }
  }
  .team-member-wrapper{
    height: 45rem;
  }
}
@media (min-width: 830px) {
  .team-member-background{
    .team-member-copy-lg{
      width: 60%;
    }
  }
}

@media (min-width: 920px) {
  .team-member-image{
      position: static;
      height: fit-content;
      width: fit-content;
  }

  .team-member-background{
    right: 5%;
    width: 850px;
  }
}
@media(min-width: 1024px){
  .team-member-image{
      position: relative;
      left: -33%;
      top: 60px;
      height: fit-content;
      width: fit-content;
  }
}
@media (min-width: 1180px) {
  .team-member-image{
      position: relative;
      left: -33%;
      top: 60px;
      height: fit-content;
      width: fit-content;
  }
  .team-member-background{
    right: 15%;
    .team-member-copy-lg{
      width: 55%;
    }
  }
}
@media (min-width: 1350px) {
  .team-member-image{
      position: relative;
      left: -33%;
      top: 60px;
      height: fit-content;
      width: fit-content;
  }
  .team-member-background{
    .team-member-copy-lg{
      width: 60%;
    }
  }
}
@media (min-width: 1600px) {
  .team-member-image{
      position: relative;
      left: -40%;
      top: 62px;
      height: fit-content;
      width: fit-content;
  }
  .team-member-background{
    right: 15%;
    width: 60%;
    .team-member-copy-lg{
      width: 70%;
    }
  }
}
</style>
