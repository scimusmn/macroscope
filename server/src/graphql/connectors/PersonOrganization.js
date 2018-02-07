import Sequelize from 'sequelize';
import sequelize from './sequelize';

const PersonOrganization = sequelize.define('people_organization', {
  role: Sequelize.STRING,
});

export default PersonOrganization;
