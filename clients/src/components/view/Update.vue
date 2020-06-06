<template>
  <div>
    <div v-if="loading" class="loading">
      Loading...
    </div>
    <div class="form-container">
      <br/>
      <div class="m-3 text-center"> 
        <h4>Facebook</h4>
      </div>
      <hr style="border-color: white"/>
      <form @submit.prevent="updateCredentials">
        <div class="ml-5">
          <label>Website:</label>
          <br/>
          <input type="text" class="input-profile-box" v-model="websitename" required/>
        </div>
        <div class="ml-5">
          <label>Email:</label>
          <br/>
          <input type="text" class="input-profile-box" v-model="email" required/>
        </div>
        <div class="ml-5">
          <label>Password:</label>
          <br/>
          <input type="text" class="input-profile-box" v-model="password" required/>
        </div>
        <button class="btn btn-primary btn-update" type="submit" style="margin-top: 20px;margin-bottom: 20px">Update</button>
      </form>
    </div>
  </div>
</template>

<script>
import Homeservice from '../../service/Homeservice.mjs';

export default {
  data(){
    return {
      loading: false,
      websitename: "",
      email: "",
      password: ""
    }
  },
  created(){
    console.log("Update Created")
    this.fetchData()
  },
  watch: {
    '$route': 'fetchdata'
  },
  methods:{
    async fetchData(){
      try {
        
        const webname = this.$route.params.websitename;
        const credentialid = this.$route.params.credentialsid;
        const response = await Homeservice.specificCredentials(webname, credentialid);
        console.log(response)
        this.websitename = response.data.websitename
        this.email = response.data.email
        this.password = response.data.password
      } catch (error) {
        console.log(error)
      }
    },

    async updateCredentials(){
      const webname = this.$route.params.websitename;
      const credentialid = this.$route.params.credentialsid;
      let updateCredentials = {
        websitename: this.websitename,
        email: this.email,
        password: this.password
      }
      console.log(updateCredentials)
      const response = await Homeservice.updateCredentials(webname, credentialid, updateCredentials);
      console.log(response)
      this.$router.push('/')
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
    width: auto;
    margin-left: 40%
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