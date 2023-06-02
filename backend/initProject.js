import bcrypt from 'bcrypt';

import db from './connection/database.js';

import User from './models/user.js';
import Register from './models/register.js';

try {
    await db.authenticate();
    console.log('Database connected');
} catch (error) {
    console.log('Connection error: ', error);
}

db.sync({force: true}).then(async () => {
    const salt = await bcrypt.genSalt();
	const hashPassword = await bcrypt.hash("12345", salt);
    await User.create({
        id: 1,
        name: "Admin",
        email: "admin@ee.ee",
        password: hashPassword
    });
    console.log('Initialization success');
})
