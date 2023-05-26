import { Sequelize } from 'sequelize';

const db = new Sequelize('lablanding', 'root', '', {
 host: 'localhost',
 dialect: 'mysql',
});

export default db;