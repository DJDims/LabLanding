import express from 'express';
import {findAllRegisters, findRegistersByEducation, createRegister} from '../controllers/registerController.js'
import { verifyToken } from '../middleware/verifyToken.js';

const registerRouter = express.Router();

registerRouter.get('/', verifyToken, findAllRegisters);
registerRouter.get('/:education', verifyToken, findRegistersByEducation);
registerRouter.post('/', createRegister);

export default registerRouter;