import db from '../connection/database.js';
import { DataTypes, Model } from 'sequelize';

class Register extends Model { }
Register.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		firstname: { 
			type: DataTypes.STRING,
			allowNull: false
		 },
		lastname: { 
			type: DataTypes.STRING,
			allowNull: false
		 },
		birthday: {
			type: DataTypes.DATEONLY,
			allowNull: false
		 },
		email: { 
			type: DataTypes.STRING, 
			unique: true,
			allowNull: false,
			validate: {
				isEmail: true
			}
		 },
		phone: { 
			type: DataTypes.STRING, 
			unique: true,
			allowNull: false
		 },
		education: {
			type: DataTypes.ENUM('Basic', 'Secondary', 'Higher'),
			allowNull: false
		}
	},
	{
		sequelize: db,
		tableName: 'registers',
		freezeTableName: true,
		modelName: 'Register',
		timestamps: false,
	},
);

export default Register;