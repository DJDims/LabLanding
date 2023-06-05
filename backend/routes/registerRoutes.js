import express from 'express';
import {findAllRegisters, createRegister} from '../controllers/registerController.js'
import { verifyToken } from '../middleware/verifyToken.js';

const registerRouter = express.Router();

registerRouter.get('/', findAllRegisters);
registerRouter.post('/', createRegister);

export default registerRouter;