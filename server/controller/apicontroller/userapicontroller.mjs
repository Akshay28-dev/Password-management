import User from '../../model/User.mjs';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const privatekey = "seiufgsiugfiegfiugbfiadsbvinviahwiuefhwefrw";

const register = async (req, res)=>{
  try {
    const user = req.body
    console.log(user)
    const checkEmail = await User.findOne({where: { email: user.email }});
    if(checkEmail){
      let error = new Error('Email is already Registered');
      throw error
    }
    const id = uuidv4();
    const password = await bcrypt.hash(user.password, 10);
    jwt.sign({id: id}, privatekey, async(err, token)=>{
      console.log(id)
      await User.create({
        id: id,
        name: user.name,
        email: user.email,
        phoneno: user.phoneno,
        password: password,
        token: token
      })
      res.send({ 
        token: token
      })
    })
  } catch (error) {
    console.log(error)
    res.send({error: error.message}).status(400)
  }
}

const login = async (req, res)=>{
  try {
    const user = req.body;
    console.log('Login user: '+user.email)
    const checkEmail = await User.findOne({email: user.email });
    console.log("Check Email: "+checkEmail)
    if(!checkEmail){
      let error = new Error('Email is not exists');
      throw error
    }
    const checkPassword = await bcrypt.compare(user.password, checkEmail.password);
    console.log("Password: "+checkPassword)
    if(!checkPassword){
      let error = new Error('Password is incorrect');
      throw error
    }

    jwt.sign({id: checkEmail.id}, privatekey, async (err, token)=>{
      // console.log(token, checkEmail.id)
      const tokens = token;
      console.log("Tokens: "+token)
      await User.update({ token: tokens }, { where: { id: checkEmail.id}})
      res.json({
        token: tokens,
        user: checkEmail
      }).status(200)

    })  
  } catch (error){
    res.json({error: error.message}).status(400)
  }
}

const logout = async(req, res)=>{
  try {
    const user = req.user;
    await User.update({ token: null}, { where: { id: user.id}});
    res.send({
      token: null,
      user: null
    }).status(200)
  } catch (error) {
  }
}
export default  {
  register,
  login,
  logout
}