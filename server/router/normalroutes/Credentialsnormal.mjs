import express from 'express';
import credentialsnormalcontroller from '../../controller/normalcontroller/credentialsnormalcontroller.mjs';
import Authentication from '../../middleware/Authentication.mjs';

const router = express.Router();

router.get('/update/:websitename/:credentialid', Authentication ,credentialsnormalcontroller.getData);

export default router;