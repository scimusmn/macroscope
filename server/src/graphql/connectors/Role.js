/**
 * User Roles
 *
 * Roles for users, that define a scope of permissions in the application.
 */
import Sequelize from 'sequelize';
import sequelize from './sequelize';

const Role = sequelize.define('role', {
  name: { type: Sequelize.STRING },
});

export default Role;
