<template>
  <div>
    <div class="card box-container" >
      
      <b-button v-b-toggle.sidebar-variant class="add-button">Add Credentials</b-button>
      <b-sidebar id="sidebar-variant" title="Add Credentials" bg-variant="dark" text-variant="light" shadow>
        <div class="px-3 py-2">
          
          <hr style="border-color: white"/>
          <form class="mt-4" @submit.prevent="sendData">
            <div>
              <label>Site Name:</label><br/>
              <input type="text" v-model="websiteName" class="input-box"/>
            </div>
            <div>
              <label>Email</label><br/>
              <input type="email" class="input-box" v-model="email"/>
            </div>
            <div>
              <label>Password:</label><br/>
              <input type="password" class="input-box" v-model="password"/>
            </div>
            <b-button block variant="primary" type="submit" style="width: auto">Submit</b-button>
          </form>
        </div>
      </b-sidebar>
    </div>
    <div class="table-container">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Site</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <!-- <div>{{credentials}}</div> -->
        <tbody v-for="data in credentials" :key="data">
          <tr>
            <td>{{ data.websitename }}</td>
            <td>{{ data.email }}</td>
            <td>{{ data.password }}</td>
            <td v-if="update">
              <span>
                <router-link :to="{ path: '/update/'+data.websitename+'/'+data.id}" class="a-button update  ml-2" style="font-size: 13px"><i class="fa fa-edit"></i> Update</router-link>
                <form @submit.prevent=deleteCredentials(data.id) method="post">
                  <button  class="a-delete delete  ml-2" style="font-size: 13px"><i class="fa fa-trash"></i> Delete </button>
                </form>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>  
</template>

<script>
import Authentication from '../../service/Authentication';
import Homeservice from '../../service/Homeservice';

import { mapState } from 'vuex'

export default {
  data(){
   return {
     loading: false,
     credentials: [],
     websiteName: '',
     email:'',
     password: '',
     update: false
   } 
  },
  created(){
    console.log('created Running');
    this.fetchData()
  },
  computed: {
    ...mapState([
      "isUserLoggedIn",
      "token",
      "user"
    ]),
  },
  watch: {
    '$route': 'fetchData'
  },
  methods:{
    async fetchData(){
      try {
        // this.loading = true;
        const response = await Homeservice.renderHome({});
        console.log(response)
        const userToken = response.data.token;
        this.$store.dispatch('user/setUser', response.data.user)
        console.log("User: "+this.$store.state.user.user)
        const stateToken = this.$store.state.user.token
        console.log("TOken: "+stateToken)
        if(!stateToken){
          this.$router.push('/login')
        }
        
        // console.log(this.$store.state.user.isUserLoggedIn)
        await Authentication.auth(this.$store.state.user.isUserLoggedIn, userToken, stateToken);
        
        if(response.data.file)
        {
          this.update = true
          for( var i =0; i < response.data.file.length; i++){
            this.credentials.push(response.data.file[i])
          }
        }
        else{
          this.update = false
        }
      // console.log(this.credentials[0][0].websitename)
      } catch (error) {
        console.log("error: "+error.message)
        this.$router.push('/login')
      }
    },
    async sendData(){
      let Datas = {
        websitename: this.websiteName,
        email: this.email,
        password : this.password
      }
      // console.log(Datas)
      const response = await Homeservice.createCredentials(Datas);
      console.log(response)
    },
    async deleteCredentials(id){
      const cid = id;
      const response = await Homeservice.deleteCredentials(cid);
      console.log(response)
      this.$router.push('/')
    }
  }
}
</script>

<style>
  .box-container{
    margin-top: 10px;
    width: 40rem;
    border-radius: 50px;
    margin-left: 25%;
    background-color: transparent;
    border-color: grey;
  }

  .add-button{
    margin-bottom: 10px;
    background-color: black;
    border-radius: 50px;

  }

  .input-box{
    margin-left: 40px;
    border-radius: 50px;
    height:30px;
    width: 80%
  }

  .table-container{
    width: 50%;
    margin-top: 50px;
    margin-left: 25%
  }

  .a-button{
    width: 100px;
    height: 20px;
  }

  .update{
    color: blue
  }

  .delete{
    color: red;
  }
  .update:hover{
    color: blue;
  }
  .delete:hover{
    color: red;
  }
  @media only screen and (max-width: 360px){
    .box-container{
      margin-top: 20px;
      margin-left: -10px;
      width: 20rem;
      height: 60px;
    }

    .btn-secondary{
      background-color: black;
      width: 150px;
      height: 35px;
      border-radius: 50px;
      font-size: 14px;
      margin-left: 80px;
      margin-top: 15px;
    }

    .table-container{
      margin-left: 20px;
      width: 10%;
    }
  }

  @media only screen and (min-width: 360px) and (max-width: 650px){
    .box-container{
      margin-top: 20px;
      margin-left: 40px;
      width: 20rem;
      height: 60px;
    }

    .btn-secondary{
      background-color: black;
      width: 150px;
      height: 35px;
      border-radius: 50px;
      font-size: 14px;
      margin-left: 80px;
      margin-top: 15px;
    }

    .table-container{
      margin-left: 30px;
      /* width: 10%; */
    }
  }

</style>