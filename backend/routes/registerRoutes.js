import express from 'express';
import {findAllRegisters, findRegisterById, findRegisterByPhone, findRegisterByEmail, findRegistersByLastname, createRegister, updateRegister, deleteRegister } from '../controllers/registerController.js'


const registerRouter = express.Router();

registerRouter.get('/', findAllRegisters);
registerRouter.get('/:id', findRegisterById);
registerRouter.get('/:phone', findRegisterByPhone);
registerRouter.get('/:email', findRegisterByEmail);
registerRouter.get('/:lastname', findRegistersByLastname);
registerRouter.post('/', createRegister);
registerRouter.get('/', updateRegister);
registerRouter.delete('/logout', deleteRegister);

export default registerRouter;