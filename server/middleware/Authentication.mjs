import User from '../model/User.mjs';

export default async(req, res, next)=>{
  const authHeader = req.header('Authorization');
  console.log("Header: "+authHeader)
  if(!authHeader){
    console.log('No token')
  }

  const user = await User.findOne({where: { token: authHeader }});
  // console.log(user.dataValues)
  if(!user){
    req.user = null
    next()
  }
  
  req.user = user.dataValues
  next();
}
