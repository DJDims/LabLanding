import Users from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const Login = async (req, res) => {
	try {
		const user = await Users.findOne({
			where: {
				name: req.body.username,
			},
		});
		const match = await bcrypt.compare(req.body.password, user.password);
		if (!match) return res.status(400).json({ msg: 'Wrong Password' });
		const userId = user.id;
		const name = user.name;
		const accessToken = jwt.sign({ userId, name },
			process.env.ACCESS_TOKEN_SECRET, {
			expiresIn: '1d',
		});
		res.cookie('token', accessToken, {
			httpOnly: true,
			maxAge: 24 * 60 * 60 * 1000,
		});
		res.json({ accessToken });
	} catch (error) {
		res.status(404).json({ msg: 'Username not found' });
	}
};

export const Logout = async (req, res) => {
	const token = req.cookies.token;
	if (!token) return res.sendStatus(204);
	await res.clearCookie('token');
	return res.sendStatus(200);
};