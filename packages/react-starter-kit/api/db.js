const faker = require('faker');
const { seed } = require('./utils');

// Users
const users = seed(5, i => ({
  id: i + 1,
  name: faker.name.firstName()
}));

// Posts
const posts = seed(10, i => ({
  id: i + 1,
  title: faker.internet.domainName(),
  content: faker.lorem.paragraphs(5)
}));

module.exports = () => ({
  users,
  posts
});
