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
		firstname: { type: DataTypes.STRING },
		lastname: { type: DataTypes.STRING },
		birthday: {type: DataTypes.DATEONLY},
		email: { type: DataTypes.STRING, unique: true },
		phone: { type: DataTypes.STRING, unique: true },
		education: {type: DataTypes.ENUM('Basic', 'Secondary', 'Higher')}
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