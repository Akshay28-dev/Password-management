import sequelize from './db/psql.mjs';

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';


import UserapiRouter from './router/apiroutes/userapi.mjs';
import HomenormalRouter from './router/normalroutes/Homenormal.mjs';
import CredentialsapiRouter from './router/apiroutes/credentialsapi.mjs';
import CredentialsnormalRouter from './router/normalroutes/Credentialsnormal.mjs';
import ProfilenormalRouter from './router/normalroutes/profilenormal.mjs';

dotenv.config({})


const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.json())
app.use(cors());

sequelize.sync();

app.use(UserapiRouter);
app.use(HomenormalRouter);
app.use(CredentialsapiRouter);
app.use(CredentialsnormalRouter);
app.use(ProfilenormalRouter);

app.listen( PORT, ()=>{
  console.log(`Server Running on ${PORT}`)
} )

