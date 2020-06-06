import axios from 'axios';
import store from '../store/store';

export default () => {
  return axios.create({
    baseURL: `http://localhost:5001/`,
    headers:{
      Authorization: `${store.state.user.token}`
    }
  })
}