import Sequelize from 'sequelize';
import sequelize from './sequelize';
import Organization from './Organization';
import PersonOrganization from './PersonOrganization';

/**
 * Person content type
 */
const Person = sequelize.define('person', {
  firstName: { type: Sequelize.STRING },
  middleName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING },
  preferedName: { type: Sequelize.STRING },
  preferedPronouns: { type: Sequelize.STRING },
}, {
  paranoid: true,
});

export default Person;
