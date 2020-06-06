<template>
  <div>
    <nav class="navbar navbar-expand-lg  navbar-light">
      <a class="navbar-brand m-3" href="#" style="font-size: 20px">Store Password</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto " style="margin-left: 70%">
          <li class="nav-item ml-2">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item ml-2">
            <form @submit.prevent="logout">
              <button class="nav-link" style="border: none;background-color: transparent">LogOut</button>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import Userservice from '../service/Userservice';
export default {
  methods:{
    async logout(){
      console.log("Log out Entered")
      const response = await Userservice.logout();
      console.log(response)
      this.$store.dispatch('user/setUser', null)
      this.$store.dispatch('user/setToken', null)
      this.$router.push('/login')
    }
  }
}
</script>

<style>
.navbar{
  height: 30%;
  border-bottom: 1px solid black;
  /* background-color: black; */
  /* color: white; */
}

a{
  color: black;
  font-size: 20px
}

a:hover{
  color: black;
  text-decoration: none;
}

</style>