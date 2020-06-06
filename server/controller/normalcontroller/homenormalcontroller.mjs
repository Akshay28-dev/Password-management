import Credentials from '../../model/Credentials.mjs';
import encryptor from 'simple-encryptor';

const key = 'sifgseygfywegnef7ewgfishiufdsf'
const Encryptor = encryptor(key)
const renderHome = async (req, res) =>{
  try {
    const user = req.user;
    if(!user){
      let error = new Error('User is not Defined')
      throw error
    }

    const file = await Credentials.findAll({ where : { userid: user.id }});
    // console.log(file.dataValues)
    
    const dataArr = [];
    for( var i = 0; i < file.length; i++){
      const decryptPassword = Encryptor.decrypt(file[i].dataValues.password);
      let dataDetails = {
        id: file[i].dataValues.id,
        websitename: file[i].dataValues.websitename,
        email: file[i].dataValues.email,
        password: decryptPassword
      }
      // console.log(file[i].dataValues)
      dataArr.push(dataDetails)
    }
    // console.log(user.token)
    res.send({
      file: dataArr,
      token: user.token,
      user: user
    }).status(200)

  } catch (error) {
    console.log(error)
    res.send({
      error: error.message
    })
  }// console.log('Home')

}

export default {
  renderHome
}