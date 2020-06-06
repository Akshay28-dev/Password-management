<template>
  <div >
    <div class="container">
      <br/>
      <div class="login-box-container ">
        <br/>
        <div class="m-2" style="text-align: center;font-size: 20px">
          Login
        </div>
        <hr style="border-color: red"/>
        <span class="error-span" >{{ errors }}</span>
        <form @submit.prevent="sendLogin">
          <div class="ml-4 mr-4" >
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" class="form-control" v-model="useremail" id="email" placeholder="Enter email" name="email">
            </div>
            <div class="form-group">
              <label for="pwd">Password:</label>
              <input type="password" class="form-control" v-model="userpsw" id="pwd" placeholder="Enter password" name="pwd">
            </div>
            <button type="submit" class="submit-button btn btn-primary">Login</button>
          </div>
        </form>
        <br>
        <div style="margin-bottom: 10px">
          <a class="create-account" href="/#/signup">Already have an Account?</a>
        </div>
        <br>
      </div>
    </div>
  </div>  
</template>

<script>
import Userservice from '../service/Userservice';

export default {

  data:()=>{
    return {
      useremail: "",
      userpsw: "",
      errors: ""
    }
  },
  methods: {
    async sendLogin(){
      try {
        let userData = {
          email: this.useremail,
          password: this.userpsw
        }
        console.log(userData)
        const response = await Userservice.login(userData);
        console.log(response)
        if(response.data.error){
          throw new Error(response.data.error)
        }
        console.log(response.data.token)  
        this.$store.dispatch('user/setToken', response.data.token);
        this.$store.dispatch('user/setUser', response.data.user);
        this.$router.push('/');
      } catch (error) {
        console.log(error)
        this.errors = error.message
      }
    }
  }
}
</script>

<style>
.container{
  color: white
}
.login-box-container{
  width: 40%;
  height: 40%;
  background-color: black;
  color: white;
  border-color: red;
  margin-top: 10%;
  margin-left: 27%;
  border-radius: 20px
  /* margin-bottom: 30%; */
}

.submit-button{
  margin-left: 150px;
  margin-bottom: 20px;
  width: auto;
}

.create-account{
  margin-left: 27%;
  margin-top: 10px
}

@media only screen and (max-width: 360px){
  .login-box-container{
    width: 70%;
    margin-top: -20px;
    margin-left: 50px;
  }

  .submit-button{
    margin-left: 20px;
    margin-top: 10px;
    width: auto;
  }

  .create-account{
    margin-left: 23%;
    margin-top: 10px
  }

}

@media only screen and ( max-width: 650px){
  .login-box-container{
    width: 70%;
    margin-left: 55px;
    margin-top: 20%
  }
  .submit-button{
    margin-left: 50px;
    margin-top: 10px;
    width: auto;
  }

  .create-account{
    margin-left: 10%;
    margin-top: 10px
  }
}

</style>