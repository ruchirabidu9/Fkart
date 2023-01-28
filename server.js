const express = require('express');
const cors = require('cors');
const db = require('./app/models');
const users = require('./app/routes/users');
const app = express();

var corsOptions = {
  origin: "http://localhost:5000"
};

app.use(cors(corsOptions));
//parse requests of content-type -application/json
app.use(express.json());
//parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
const Role = db.roles;

db.sequelize.sync({force:true}).then(() => {
  console.log('Drop and Resync the database with { force : true}');
  initial();
});

//simple route
app.get('/', (req, res) => {
  res.send('Welcome To FKART');
});

app.use('/api/users', users);

// // const authRoutes = require('./app/routes/authRoutes', app);
// // const userRoutes = require('./app/routes/userRoutes', app);
// // app.use('/api/auth', authRoutes);
// // app.use('api/test', userRoutes);
//set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "supervisior"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}