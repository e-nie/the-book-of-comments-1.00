const { expect } = require('chai');
const { gqlRequest } = require('../gqlRequest');
const { userGetByIdQ, userCreateQ, userUpdateByIdQ } = require('./queries');
const { user, userUpdate } = require('./data');

let respData = null;
let postData = null;
let userId = null;

describe('USER UPDATE BY ID', () => {
    describe('USER UPDATE BY ID - POSITIVE', () => {
        before('User Create', (done) => {
            postData = {
                query: userCreateQ,
                variables: user
            };
            gqlRequest(postData)
                .expect(200)//supertest, can keep it in hook
                .end((err, res) => {
                    if (err) return done(err);
                    userId = res.body.data.userCreate._id;
                    console.log('userId: ', userId);
                    done();
                });
        });
        it('User Update By Id', (done) => {
            postData = {
                query: userUpdateByIdQ,
                variables: { userId, ...userUpdate }
            };
            gqlRequest(postData)
                .expect(200)//supertest
                .end((err, res) => {
                    if (err) return done(err);
                    respData = res.body.data.userUpdate;
                    console.log(respData);
                    expect(respData.firstName).eq(userUpdate.userInput.firstName);
                    expect(respData.lastName).eq(userUpdate.userInput.lastName);
                    done();
                });
        });
    });
});
