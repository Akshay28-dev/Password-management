import express from 'express';
import HomeController from '../../controller/normalcontroller/homenormalcontroller.mjs';
import Authentication from '../../middleware/Authentication.mjs';

const router = express.Router();

router.get('/', Authentication ,HomeController.renderHome);

export default router