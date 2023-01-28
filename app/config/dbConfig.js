module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: '090699',
  DB: "FKART",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};