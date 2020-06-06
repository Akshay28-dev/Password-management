import  Sequelize from 'sequelize';

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PSW, {
  host: 'localhost',
  dialect: 'postgres',
});

sequelize.authenticate()
  .then(()=>{
    console.log('Database Connected ......')
  })
  .catch((err)=>{
    console.log('Error: '+ err)
  })

export default sequelize