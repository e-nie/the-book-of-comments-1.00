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
    firstName
    lastName
    _id
  }
}`;

const usersGetAllQ = `query UsersGetAll($amount: Int) {
  usersGetAll(amount: $amount) {
    _id
    firstName
    lastName
  }
}`;

const userUpdateByIdQ = `mutation UserUpdateById($userInput: UserFields) {
  userUpdateById(userInput: $userInput) {
  _id
    firstName
    lastName
  }
}`;

const userDeleteByIdQ = `mutation UserDeleteById($userId: ID) {
  userDeleteById(userId: $userId)
}
`


module.exports = { userCreateQ, userGetByIdQ, userUpdateByIdQ, usersGetAllQ , userDeleteByIdQ};
