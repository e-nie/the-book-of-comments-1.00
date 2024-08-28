const user = {
    userInput: {
        firstName: 'testFirstName',
        lastName: 'testLastName'
    }
};

const userUpdate = {
    userInput: {
    userId: process.env.USER_ID,
        firstName: 'FIRSTNAME UPDATED',
        lastName: 'LASTNAME UPDATED',
    }
};
module.exports = { user, userUpdate };
