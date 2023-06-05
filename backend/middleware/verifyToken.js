import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
	const token = req.cookie.token;
	if (!token) return res.sendStatus(401);
	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
		if (err) return res.sendStatus(403);
		req.id = decoded.id;
		req.name = decoded.name;
		next();
	});
};