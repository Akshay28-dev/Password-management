import sequelize from '../db/psql.mjs';
import Sequelize from 'sequelize';

let userSchema = {
  id:{
    type: Sequelize.STRING,
    allowNull:false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    required: true
  },
  email: {
    type: Sequelize.STRING,
    required: true,
    unique: true
  },
  phoneno:{
    type: Sequelize.STRING,
    required: true,
    unique: true
  },
  password: {
    type: Sequelize.STRING
  },
  token:{
    type: Sequelize.STRING,
    default: null
  }
}

const User = sequelize.define('user', userSchema)

export default User;