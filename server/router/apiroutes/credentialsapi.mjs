import express from 'express';
import Credentials from '../../controller/apicontroller/credentialsapicontroller.mjs';
import Authentication from '../../middleware/Authentication.mjs';

const router = express.Router();

router.post('/create/credentials', Authentication ,Credentials.createCredentials);

router.post('/update/:webname/:cid', Authentication, Credentials.updateCredentials);

router.post('/delete/:cid', Authentication, Credentials.deleteCrdentials);


export default router;