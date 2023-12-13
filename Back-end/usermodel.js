import { DataTypes } from 'sequelize';
import sequelize from './database-connection.js';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  userType: {
    type: DataTypes.ENUM('normaluser', 'admin'),
    allowNull: false,
  },
});

User.sync();

export default User;
