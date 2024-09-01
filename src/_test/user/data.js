//positive
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

//negative
const userEmptyFields = {
    userInput: {
        firstName: '',
        lastName: ''
    }
};


module.exports = { user, userUpdate,userEmptyFields };
