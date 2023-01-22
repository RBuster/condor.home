<template>
  <div class="wrapper w-full mt-8 py-8" :class="{'formSubmitted':formSubmitted}">
    <div v-if="!formSubmitted">
      <form @submit.prevent="sendEmail">
        <div class="inner mx-auto w-full">
          <div class="flex flex-wrap justify-center flex-col p-8 lg:flex-row">
            <div class="input-group">
              <label class="text-4xl text-white" for="fullName">NAME</label>
              <input v-model="formData.fullName" name="fullName" class="block bg-transparent text-white text-3xl border-b-2 border-white" type="text">
            </div>
            <div class="input-group">
              <label class="text-4xl text-white" for="emailAddress">EMAIL</label>
              <input v-model="formData.email" name="emailAddress" class="block bg-transparent text-white text-3xl border-b-2 border-white" type="email">
            </div>
            <div class="input-group">
              <label class="text-4xl text-white" for="phoneNumber">PHONE</label>
              <input v-model="formData.phone" name="phoneNumber" class="block bg-transparent text-white text-3xl border-b-2 border-white" type="number">
            </div>
          </div>
          <div class="w-full mt-8 p-8">
            <div class="input-group area mx-auto">
              <label class="text-4xl text-white" for="message">MESSAGE</label>
              <textarea
                v-model="formData.message"
                name="message"
                class="block bg-transparent text-white text-3xl border-b-2 border-white w-full"
                cols="30"
                rows="5"
              />
            </div>
          </div>
          <button
            class="bg-brand-red block mx-auto w-32 py-2 px-4 text-white button"
            :disabled="!formInvalid"
            :class="{'disabled': !formInvalid}"
            @click="submitForm()"
          >
            SEND
          </button>
        </div>
        <input id="buster" v-model="busted" class="hidden" type="text">
      </form>
    </div>
    <div v-else class="form-submitted text-white text-3xl sm:text-4xl text-center align-middle w-full mx-auto p-8 block h-96">
      <div v-if="submitSuccess">
        <p>
          Email sent successfully, we will be in touch with you soon to assist you.
        </p>
        <p class="pt-4">
          Please feel free to call any of our team in the meantime if you have any questions!
        </p>
      </div>
      <div v-else>
        <p>
          Issue sending your contact submission. Please wait and try again later, or feel free to contact one of our team members directly.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ContactUs',
  data () {
    return {
      formData: {
        fullName: '',
        phone: '',
        email: '',
        message: ''
      },
      busted: null,
      formSubmitted: false,
      submitSuccess: false
    };
  },
  computed: {
    formInvalid () {
      return !!(this.formData.fullName && this.formData.phone && this.formData.email && this.formData.message);
    }
  },
  methods: {
    async submitForm () {
      if (!this.busted && (this.formData.fullName && this.formData.phone && this.formData.email && this.formData.message)) {
        this.formSubmitted = true;
        const result = await $fetch('/api/sendEmail', {
          method: 'POST',
          body: {
            data: this.formData
          }
        });
        if (!result) {
          this.submitSuccess = false;
        } else {
          this.submitSuccess = true;
        }
      }
    }
  }
};
</script>
<style lang="scss">
@keyframes fadein {
  0%{
    opacity: 0%;
  }
  100%{
    opacity: 100%;
  }
}
.form-submitted{
  animation: fadein 2s;
}
.button.disabled{
  background-color: grey;
  color: black;
}
.wrapper{
    background-image: url('~/assets/images/backgrounds/contact_us.jpg');
    background-size: auto 100%;
    background-position: left;
    background-repeat: no-repeat;
    height: fit-content;
    &.formSubmitted{
      background-size: auto 100%;
      background-position: center;
    }
    .input-group{
        >input{
            width: 100%;
        }
        &.area{
            width: 100%;
        }
    }

}
@media(min-width: 650px){
.wrapper{
    &.formSubmitted{
      background-size: 100%;
      background-position: center;
    }
}
}
@media(min-width: 920px){
.wrapper{
    background-size: 100%;
    background-position: center;
    .input-group{
        &.area{
            width: 849px;
        }
    }
    .input-group:nth-child(3){
        >input{
            width: 100%;
        }
    }
}
}
@media(min-width: 1220px){
.wrapper{
    .input-group{
        min-width: 400px;
        >input{
            width: 90%;
        }
        &.area{
            width: 1200px;
        }
    }
    .input-group:nth-child(3){
        >input{
            width: 100%;
        }
    }
}
}
</style>
