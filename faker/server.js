const express = require('express');
const app = express()

// right here im importing the Class/model User and array users
const {User, users} = require ('./models/user.model');
const {Company, companies} = require ('./models/company.model');




//  users route // this just returns the array 
// app.get('/api/users/new', (req,res) => {

//   res.status(200).json(users);
// } )

app.post('/api/users/new', (req,res) => {
  const newUser = new User();
  console.log(newUser);
  users.push(newUser);
  res.status(201).json(newUser);
});


// companies route
// app.get('/api/companies/new', (req,res) => {

//   res.status(200).json(companies);
// } )

app.post('/api/companies/new', (req,res) => {
  const newCompany = new Company();
  console.log(newCompany);
  users.push(newCompany);
  res.status(201).json(newCompany);
});


// company and user route
app.post('/api/user/company', (req,res) => {
  const newCompany = new Company();
  const newUser = new User();
  res.status(201).json({newCompany, newUser});
});

const PORT = 5001;
app.listen(PORT,() => {
  console.log(`listening on port ${PORT}`)
});