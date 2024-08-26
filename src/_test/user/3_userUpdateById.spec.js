const { expect } = require('chai');
const { gqlRequest } = require('../gqlRequest');
const { userGetByIdQ, userCreateQ, userUpdateByIdQ } = require('./queries');
const { user, userUpdate } = require('./data');

let respData = null;
let postData = null;
let userId = null;

describe('USER UPDATE BY ID', () => {
    describe('USER UPDATE BY ID - POSITIVE', () => {

        it('User Update By Id', (done) => {
            postData = {
                query: userUpdateByIdQ,
                variables: {
                    userInput: {
                        firstName: user.userInput.firstName,
                        lastName: user.userInput.lastName,
                        userId: process.env.USER_ID
                    }
                }
            };
            gqlRequest(postData)
                .expect(200)//supertest
                .end((err, res) => {
                    if (err) return done(err);
                    respData = res.body.data.userUpdateById;
                    console.log(respData);
                    expect(respData.firstName).eq(userUpdate.userInput.firstName);
                    expect(respData.lastName).eq(userUpdate.userInput.lastName);
                    done();
                });
        });
    });
});
