const dbConfig = require("../config/dbConfig");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false
 }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user")(sequelize, Sequelize);
//db.categories = require("./category")(sequelize, Sequelize);
db.roles = require("./role")(sequelize, Sequelize);
//db.products = require("./product")(sequelize, Sequelize);

//Associations

db.roles.belongsToMany(db.users, {
  through: 'user_roles',
  foreignKey: 'roleId',
  outerKey: 'userId',
});

//Users
db.users.belongsTo(db.roles, {
  through: 'user_roles',
  foreignKey: 'roleId',
  otherKey: 'userId',
  constraint: false
});

db.ROLES = ['user', 'admin', 'supervisor'];

//Categories
//db.categories.hasMany(db.products);

//Products
//db.products.belongsTo(db.categories);

module.exports = db;