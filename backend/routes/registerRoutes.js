import express from 'express';
import {findAllRegisters, findRegistersByEducation, createRegister} from '../controllers/registerController.js'


const registerRouter = express.Router();

registerRouter.get('/', findAllRegisters);
registerRouter.get('/:education', findRegistersByEducation);
registerRouter.post('/', createRegister);

export default registerRouter;