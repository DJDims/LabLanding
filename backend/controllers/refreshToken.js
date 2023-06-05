import Users from '../models/user.js';
import jwt from 'jsonwebtoken';

export const refreshToken = async (req, res) => {
	try {
		if (!req.cookies.refreshToken) return res.sendStatus(401);
		console.log(req.cookies.refreshToken);
		const user = await Users.findOne({
			where: {
				refresh_token: req.cookies.refreshToken,
			}
		});
		if (!user) return res.sendStatus(403);
		jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
			if (err) return res.sendStatus(403);
			const userId = user.id;
			const name = user.name;
			const accessToken = jwt.sign({ userId, name },
				process.env.ACCESS_TOKEN_SECRET, {
				expiresIn: '15s',
			});
			res.json({ accessToken });
		});
	} catch (error) {
		console.log(error);
	}
};