const { expect } = require('chai');
const { gqlRequest } = require('../gqlRequest');
const { userGetByIdQ, userCreateQ } = require('./queries');
const { user } = require('./data');

let respData = null;
let postData = null;
let userId = null;

describe('USER GET BY ID', () => {
    describe('USER GET BY ID - POSITIVE', () => {
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
                    // console.log('userId: ', userId);
                    done();
                });
        });

        it('', (done) => {
            postData = {
                query: userGetByIdQ,
                variables: { userId }
            };
            gqlRequest(postData)
                .expect(200)//supertest
                .end((err, res) => {
                    if (err) return done(err);
                    respData = res.body.data.userGetById;
                    console.log(respData);
                    expect(respData._id).eq(userId);
                    expect(respData.firstName).eq(user.userInput.firstName);
                    expect(respData.lastName).eq(user.userInput.lastName);
                    done();
                });
        });
    });

    // describe('USER GET BY ID - NEGATIVE', () => {
    //
    // });
});
