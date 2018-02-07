import Sequelize from 'sequelize';
import sequelize from './sequelize';

/**
 * Email content type
 *
 * Emails belong to People in a one way relationship
 */
const Email = sequelize.define('email', {
  address: { type: Sequelize.STRING },
  addressType: { type: Sequelize.STRING },
}, {
  paranoid: true,
});

export default Email;
