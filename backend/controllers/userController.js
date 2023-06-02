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
			expiresIn: '15s',
		});
		const refreshToken = jwt.sign({ userId, name },
			process.env.REFRESH_TOKEN_SECRET, {
			expiresIn: '1d',
		});
		await Users.update(
			{ refresh_token: refreshToken },
			{
				where: {
					id: userId,
				},
			},
		);
		res.cookie('refreshToken', refreshToken, {
			httpOnly: true,
			maxAge: 24 * 60 * 60 * 1000,
		});
		res.json({ accessToken });
	} catch (error) {
		res.status(404).json({ msg: 'Username not found' });
	}
};

export const Logout = async (req, res) => {
	const refreshToken = req.cookies.refreshToken;
	if (!refreshToken) return res.sendStatus(204);
	const user = await Users.findOne({
		where: {
			refresh_token: refreshToken,
		},
	});
	if (!user) return res.sendStatus(204);
	const userId = user.id;
	await Users.update(
		{ refresh_token: null },
		{
			where: {
				id: userId,
			},
		},
	);
	res.clearCookie('refreshToken');
	return res.sendStatus(200);
};