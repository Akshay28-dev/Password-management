import Signup from './components/Sign.vue';
import Login from './components/Login.vue';
import Otp from './components/verification/Otp.vue';
import Header from './components/DesktopHeader.vue';
import Home from './components/view/Home.vue'
// import Profile from './components/view/Profile.vue';
import Update from './components/view/Update.vue';

export const routes = [
  {
    path:'/login',
    components:{
      default:Login
    }
  },
  {
    path:'/signup',
    components:{
      default: Signup      
    }
  },
  {
    path: '/',
    components:{
      header: Header,
      default: Home
    }
  },
  {
    path:'/update/:websitename/:credentialsid',
    components:{
      header: Header,
      default: Update
    }
  }
]