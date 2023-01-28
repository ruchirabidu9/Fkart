
module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("roles", {
    roleId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: Sequelize.STRING
    }
  });
  return Role;
}  
