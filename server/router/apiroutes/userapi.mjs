import express from 'express';
import UserController from '../../controller/apicontroller/userapicontroller.mjs';
import Authentication from '../../middleware/Authentication.mjs';

const router = express.Router();

router.post('/register', UserController.register);

router.post('/login', UserController.login);

router.post('/logout', Authentication, UserController.logout)
export default router;