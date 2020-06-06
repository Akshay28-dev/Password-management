import express from 'express';
import Authentication from '../../middleware/Authentication.mjs';
import ProfileController from '../../controller/normalcontroller/profilenormalcontroller.mjs';

const router = express.Router();

router.get('/profile', Authentication, ProfileController)

export default router;