import Sequelize from 'sequelize';
import sequelize from './sequelize';
import PersonOrganization from './PersonOrganization';
import Person from './Person';

const Organization = sequelize.define('organization', {
  name: { type: Sequelize.STRING },
  address: { type: Sequelize.STRING },
  city: { type: Sequelize.STRING },
  state: { type: Sequelize.STRING },
  zipCode: { type: Sequelize.STRING },
}, {
  paranoid: true,
});

export default Organization;
