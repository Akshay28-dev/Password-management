import Credentials from '../../model/Credentials.mjs';
import encryptor from 'simple-encryptor';

const key = 'sifgseygfywegnef7ewgfishiufdsf'
const Encryptor = encryptor(key)

const getData = async(req, res)=>{
  try {
    const websitename = req.params.websitename;
    const cid = req.params.credentialid;
    const user = req.user;
    const crede = await Credentials.findOne({ where : { websitename: websitename, id: cid}});
    console.log(crede.dataValues)
    const decryptPassword = Encryptor.decrypt(crede.password);
    res.send({
      websitename: crede.websitename,
      email: crede.email,
      password: decryptPassword,
      token: user.token
    })
  } catch (error) {
    console.log(error)
  }
}

export default {
  getData
}