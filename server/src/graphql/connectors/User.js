/**
 * User content type
 *
 * A user is the primary authentication and authorization
 * record for people who directly use the application.
 * Users are distinct from people/person.
 * People are assets tracked within the database.
 * People may or may-not interact with the database as users.
 */
import Sequelize from 'sequelize';
import sequelize from './sequelize';

const User = sequelize.define('user', {
  email: { type: Sequelize.STRING },
  sub: { type: Sequelize.STRING },
}, {
  paranoid: true,
});

export default User;
