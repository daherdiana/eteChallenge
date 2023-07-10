const Sequelize = require("sequelize");
const EmployeeModel = require('./employeeModel');

const sequelize = new Sequelize(
  {
    username: 'test',
    password: 'test',
    database: 'test',
    host: 'localhost',
    port: '3006',
    dialect: 'mysql',
    pool: { max: 20, idle: 30 },
    logging: false
  }

);

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

const db = {};

db.Employee = EmployeeModel(sequelize, Sequelize);

Object.keys(db)
  .forEach((modelName) => {
    if ('associate' in db[modelName]) {
      db[modelName].associate(db);
    }
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
