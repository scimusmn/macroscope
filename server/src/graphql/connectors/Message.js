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

const Message = sequelize.define('message', {
  type: { type: Sequelize.STRING },
  timestamp: { type: Sequelize.STRING },
}, {
  paranoid: true,
});

export default Message;
