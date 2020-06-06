export default{
  auth(isUserLogged, usertoken, stateToken){
    console.log("stateToken: "+stateToken)
    if (!isUserLogged){
      let error = new Error('No token');
      throw error
    }
    if(stateToken != usertoken){
      let error = new Error('Invalid Token');
      throw error
    }

  }
}