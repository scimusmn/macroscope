/**
 * Establish connection to the database with the Sequelize ORM
 */
import Sequelize from 'sequelize';

// Create MySQL connection
const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASS,
  {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    operatorsAliases: false,
  },
);

export default sequelize;
