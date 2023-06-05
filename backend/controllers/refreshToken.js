import Users from '../models/user.js';
import jwt from 'jsonwebtoken';

export const refreshToken = async (req, res) => {
	try {
		if (!req.cookies.token) return res.sendStatus(401);
		jwt.verify(req.cookies.token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
			if (err) return res.sendStatus(403);
			const userId = decoded.id;
			const name = decoded.name;
			const accessToken = jwt.sign({ userId, name },
				process.env.ACCESS_TOKEN_SECRET, {
				expiresIn: '1d',
			});
			res.json({ accessToken });
		});
	} catch (error) {
		console.log(error);
	}
};