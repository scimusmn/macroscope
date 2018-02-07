/**
 * Performance content type
 *
 */
import Sequelize from 'sequelize';
import sequelize from './sequelize';

const User = sequelize.define('performance', {
  type: { type: Sequelize.STRING },
}, {
  paranoid: true,
});

export default User;
