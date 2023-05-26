import express from 'express';
import { Register, Login, Logout } from '../controllers/userController.js';
import { verifyToken } from '../middleware/verifyToken.js';
import { refreshToken } from '../controllers/refreshToken.js';

const userrouter = express.Router();

userrouter.post('/register', Register);
userrouter.post('/login', Login);
userrouter.get('/token', refreshToken);
userrouter.delete('/logout', Logout);

export default userrouter;