<template>
  <div>
    <div class="wrapper w-full mt-8 py-8">
      <div class="inner mx-auto">
        <div class="flex flex-wrap justify-center flex-col p-8 lg:flex-row">
          <div class="input-group">
            <label class="text-4xl text-white" for="fullName">NAME</label>
            <input id="farts" v-model="formData.fullName" name="fullName" class="block bg-transparent text-white text-3xl border-b-2 border-white" type="text">
          </div>
          <div class="input-group">
            <label class="text-4xl text-white" for="emailAddress">EMAIL</label>
            <input v-model="formData.email" name="emailAddress" class="block bg-transparent text-white text-3xl border-b-2 border-white" type="text">
          </div>
          <div class="input-group">
            <label class="text-4xl text-white" for="phoneNumber">PHONE</label>
            <input v-model="formData.phone" name="phoneNumber" class="block bg-transparent text-white text-3xl border-b-2 border-white" type="text">
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
        <button class="bg-brand-red block mx-auto w-32 py-2 px-4 text-white" @click="submitForm()">
          SEND
        </button>
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
      }
    };
  },
  methods: {
    async submitForm () {
      const result = await $fetch('/api/sendEmail', {
        method: 'POST',
        body: {
          data: this.formData
        }
      });
      console.log(result);
    }
  }
};
</script>
<style lang="scss">
.wrapper{
    background-image: url('~/assets/images/backgrounds/contact_us.jpg');
    background-size: auto 100%;
    background-position: left;
    background-repeat: no-repeat;
    .input-group{
        >input{
            width: 100%;
        }
        &.area{
            width: 100%;
        }
    }

}
@media(min-width: 1024px){
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
