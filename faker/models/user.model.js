// import { faker } from '@faker-js/faker'; this is ES6 module syntax
// we have to change to common js
// common js import syntax

const { faker } = require("@faker-js/faker");

class User {
  constructor() {
    this.password = faker.internet.password();
    this.email = faker.internet.email();
    this.phoneNumber = faker.phone.number();
    this.lastName = faker.name.lastName();
    this.firstName = faker.name.firstName();
    this._id = faker.database.mongodbObjectId();
  }
}

const users = [
  new User(),
  new User(),
  new User(),
  new User(),
  new User(),
  new User(),
]

// const users  = new User ();
// console.log (users);


// COMMON js export
module.exports = { User, users};
