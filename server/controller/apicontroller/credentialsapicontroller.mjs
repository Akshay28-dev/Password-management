import Credentials from '../../model/CRedentials.mjs';
import { v4 as uuidv4 } from 'uuid';
import encryptor from 'simple-encryptor';

const key = 'sifgseygfywegnef7ewgfishiufdsf'
const Encryptor = encryptor(key)
const createCredentials = async (req, res)=>{
  try {
    const credentialsData = req.body;
    const user = req.user;
    // console.log(user)
    const id = uuidv4()
    const password = Encryptor.encrypt(credentialsData.password)
    const credentialsCheck = await Credentials.findOne({ where: { email: credentialsData.email, websitename: credentialsData.websitename}})
    console.log(credentialsCheck)
    if(credentialsCheck){
      let error = new Error('Website and Email is already exists');
      throw error
    }
    
    await Credentials.create({
      id: id,
      websitename: credentialsData.websitename,
      email: credentialsData.email,
      password: password,
      userid: user.id
    });
    
    res.send({msg: "Successfully Created"}).status(200)
  } catch (error) {
    console.log(error)
    res.send({error: error.message}).status(400)
  }
};

const updateCredentials = async(req, res)=>{
  try {
    const webname = req.params.webname;
    console.log(webname);
    const user = req.user;
    console.log(user)
    const credentialsUpdate = req.body;
    console.log(credentialsUpdate)
    const cid = req.params.cid;
    const updateCredentials = await Credentials.findOne({where : { id: cid}});
    if(!updateCredentials){
      let error = new Error('HTTP Error');
      throw error
    }
    const password = Encryptor.encrypt(credentialsUpdate.password)
    await Credentials.update({
      websitename: credentialsUpdate.websitename, 
      email: credentialsUpdate.email, 
      password: password  
    }, { where: { id: cid, userid: user.id }})
    res.send({
      token: user.token
    })
  } catch (error) {
    console.log(error.message)
  }
}

const deleteCrdentials = async(req, res)=>{
  try {
    const cid = req.params.cid;
    console.log("cid: "+cid)
    const user = req.user;
    console.log(user)
    await Credentials.destroy({ where: { id: cid, userid: user.id}})
    res.send({
      token: user.token
    }).status(200)
  } catch (error) {
    console.log(error)
    res.send({
      error: "Credentials is not deleted"
    })
  }
}
export default {
  createCredentials,
  updateCredentials,
  deleteCrdentials
}