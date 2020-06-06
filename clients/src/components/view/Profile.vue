<template>
  <div>
    <div class="form-container">
      <br/>
      <div class="m-3 text-center"> 
        <h4>Profile</h4>
      </div>
      <hr style="border-color: white"/>
      <form @submit.prevent="updateProfile">
        <div class="ml-5">
          <label>Name:</label>
          <br/>
          <input type="text" class="input-profile-box" v-model="name"/>
        </div>
        <div class="ml-5">
          <label>Phone No:</label>
          <br/>
          <input type="text" class="input-profile-box" v-model="phoneno"/>
        </div>
        <div class="ml-5">
          <label>Email:</label>
          <br/>
          <input type="text" class="input-profile-box" v-model="email"/>
        </div>
        <div class="ml-5">
          <label>Password:</label>
          <br/>
          <input type="text" class="input-profile-box" v-model="password"/>
        </div>
        <button class="btn btn-primary btn-update" type="submit" style="margin-top: 20px;margin-bottom: 20px">Update</button>
      </form>
    </div>
  </div>
</template>

<script>
// import Homeservice from '../../service/Homeservice.mjs';

export default {
  data(){
    return {
      loading:"",
      name: "",
      email: "",
      phoneno: "",
      password: "",
      
    }
  },
  created(){
    this.fetchdata()
  },
  watch:{
    '$route': 'fetchdata'
  },
  methods:{
    async fetchdata(){
      console.log(this.$store.state.user.user)
      this.name = this.$store.state.user.user.name
      this.email = this.$store.state.user.user.email
      this.phoneno = this.$store.state.user.user.phoneno
      this.password = "**********"
    },

    async updateProfile(){
      if(!this.password){
        console.log('No password')
      }
    }
  }

}
</script>

<style>
  .form-container{
    width: 30%;
    background-color: black;
    color: white;
    margin-top: 5%;
    margin-left: 33%;
    border-radius: 20px
  }

  .input-profile-box{
    margin-left: 7%;
    width: 80%;
    border-radius: 50px;
    height:35px
  }

  .btn-update{
    width: auto
  }

  @media only screen and (max-width: 360px){
    .form-container{
      width: 80%;
      margin-left: 30px;
    }
  }

  @media only screen and (min-width: 360px) and (max-width: 650px){
    .form-container{
      width: 80%;
      margin-left: 50px;
      margin-top: 40px;
    }
  }
</style>