import { DataTypes } from 'sequelize';
import sequelize from './database-connection.js';
import User from './usermodel.js';


const Article = sequelize.define("Article",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author:{
        type:DataTypes.STRING,
        allownull:false
      }
})


User.hasOne(Article);
Article.belongsTo(User);



Article.sync()

export default Article