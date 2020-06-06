import sequelize from '../db/psql.mjs';
import Sequelize from 'sequelize';

let credentialsSchema = {
  id:{
    type: Sequelize.STRING,
    allowNull:false,
    primaryKey: true
  },
  websitename: {
    type: Sequelize.STRING,
    required: true
  },
  email: {
    type: Sequelize.STRING,
    required: true
  },
  password:{
    type: Sequelize.STRING,
    required: true
  },
  userid:{
    type: Sequelize.STRING
    // references: 'users',
    // referencesKey: 'id'
  }
}

const Credentials = sequelize.define('credentials', credentialsSchema)

export default Credentials;