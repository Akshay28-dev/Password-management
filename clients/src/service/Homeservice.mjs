import Api from './Api';

export default {
  renderHome(){
    return Api().get('/')
  },

  createCredentials(credentials){
    return Api().post('/create/credentials', credentials)
  },

  specificCredentials(webname, credentialid){
    return  Api().get('/update/'+webname+'/'+credentialid)
  },

  updateCredentials(webname, credentialid, credentials){
    return Api().post('/update/'+webname+'/'+credentialid, credentials)
  },

  deleteCredentials(credentialid){
    return Api().post('/delete/'+credentialid)
  }
}