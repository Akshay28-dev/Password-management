<template>
  <div >
    <div class="container">
      <br/>
      <div class="sign-box-container ">
        <br/>
        <div class="m-2" style="text-align: center;font-size: 20px">
          Signup
        </div>
        <hr style="border-color: red"/>
        <span class="error-span" >{{ errors }}</span>
        <form @submit.prevent="sendRegister">
          <div class="ml-4 mr-4" >
            <div class="form-group">
              <label for="email">Name:</label>
              <input type="text" class="form-control" v-model="name"  id="name" placeholder="Enter name" name="name">
            </div>
            <div class="form-group">
              <label for="email">PhoneNo:</label>
              <input type="tel" class="form-control" v-model="phoneno" id="phoneno" maxlength="10" placeholder="Enter Phone number" name="phoneno">
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" class="form-control" v-model="email" id="email" placeholder="Enter email" name="email">
            </div>
            <div class="form-group">
              <label for="pwd">Password:</label>
              <input type="password" class="form-control" v-model="password" id="pwd" placeholder="Enter password" name="pwd">
            </div>
            <button type="submit" class="submit-button btn btn-primary" style="width: auto">Submit</button>
          </div>
        </form>

        <br>
        <div style="margin-bottom: 10px">
          <a class="create-account" href="/#/login">Create an account?</a>
        </div>
        <br>
      </div>
    </div>
  </div>  
</template>

<script>
import Userservice from '../service/Userservice';

export default {
  data(){
    return {
      "name": "",
      "email": "",
      "phoneno": "",
      "password": "",
      "errors": ""
    }
  },

  methods:{
    async sendRegister(){
      try {
        let userDetails = {
          name: this.name,
          email: this.email,
          phoneno: this.phoneno,
          password: this.password
        }
        const response = await Userservice.register(userDetails)
        if(response.data.error){
          console.log(response.data.error)
          throw new Error(response.data.error)
        }
        this.$store.dispatch('user/setUser', response.data.token);
        // console.log(response.data.error) 
        this.$router.push('/') 
      } catch (error) {
        // console.log(error.response.data.error)
        this.errors =  error.message
      }
      
    }
  }
}
</script>

<style>
.sign-box-container{
  width: 40%;
  height: 40%;
  background-color: black;
  color: white;
  border-color: red;
  margin-top: 2%;
  margin-left: 27%;
  border-radius: 20px
  /* margin-bottom: 30%; */
}

.error-span{
  margin-left: 30%;
  color: red;
}

.submit-button{
  margin-left: 150px;
  margin-bottom: 20px;
}

.create-account{
  margin-left: 33%;
  margin-top: 10px;
  color: white
}

.create-account:hover{
  color: blue
}

@media only screen and (max-width: 360px){
  .sign-box-container{
    width: 70%;
    margin-top: -20px;
    margin-left: 50px;
  }

  .error-span{
    margin-left: 20%;
    text-align: center;
  }
  .submit-button{
    margin-left: 20px;
    margin-top: 10px
  }

  .create-account{
    margin-left: 20%;
    margin-top: 10px
  }

}

@media only screen and (min-width: 360px) and (max-width: 650px){
  .sign-box-container{
    width: 70%;
    margin-left: 55px;
    margin-top: 20%
  }
  .submit-button{
    margin-left: 50px;
    margin-top: 10px;
  }

  .create-account{
    margin-left: 20%;
    margin-top: 10px
  }
}

@media only screen and (min-width: 650px) and (max-width: 1026px){
  .box-container{
    width: 70%;
    margin-left: 150px;
    margin-top: 35%
  }
  .submit-button{
    margin-left: 260px;
    margin-top: 20px;
  }

  .create-account{
    margin-left: 40%;
    margin-top: 10px
  }
}
</style>