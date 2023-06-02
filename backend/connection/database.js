import { Sequelize } from 'sequelize';

const db = new Sequelize('jptv20_lablanding', 'root', '', {
 host: 'localhost',
 dialect: 'mysql',
});

export default db;