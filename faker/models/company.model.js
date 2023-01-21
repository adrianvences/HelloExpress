// import { faker } from '@faker-js/faker'; this is ES6 module syntax
// we have to change to common js
// common js import syntax

const { faker } = require("@faker-js/faker");

class Company {
  constructor() {
    this._id = faker.database.mongodbObjectId();
    this.name = faker.company.name();
    this.address = faker.address.buildingNumber()
    this.street = faker.address.street()
    this.city = faker.address.city()
    this.state = faker.address.state()
    this.zipcode = faker.address.zipCode()
    this.country = faker.address.country()
  }
}

const companies = [
  new Company(),
  new Company(),
  new Company(),
  new Company(),
  new Company(),
  new Company(),
]




// COMMON js export
module.exports = { Company, companies};