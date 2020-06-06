const renderProfile = async(req, res)=>{
  try {
    console.log('Hlo')
    const user = req.user;
    console.log(user)
  } catch (err) {
    console.log(err)
  }
}

export default renderProfile