import db from '../connection/database.js';
import { DataTypes, Model } from 'sequelize';

class User extends Model { }
User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		name: { 
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		email: { 
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true
			}
		},
		password: { 
			type: DataTypes.STRING,
			allowNull: false
		},
	},
	{
		sequelize: db,
		tableName: 'users',
		freezeTableName: true,
		modelName: 'User',
		timestamps: false,
	},
);

export default User;