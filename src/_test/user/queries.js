//here we place what we want to see in response

const { Promise } = require('mongoose');
const userCreateQ = `mutation UserCreate($userInput: UserFields) {
  userCreate(userInput: $userInput) {
    _id
    firstName
    lastName
  }
}`;


const userGetByIdQ = `query UserGetById($userId: ID!) {
    userGetById(userId: $userId) {
     _id
        firstName
        lastName       
    }
}`;

module.exports = { userCreateQ, userGetByIdQ };
