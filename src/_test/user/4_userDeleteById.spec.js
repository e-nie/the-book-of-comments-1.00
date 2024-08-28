const { expect } = require('chai');
const { gqlRequest } = require('../gqlRequest');
const { userDeleteByIdQ } = require('./queries');
const { userUpdate } = require('./data');

let respData = null;
let postData = null;
let userId = null;

describe('USER DELETE BY ID', () => {
    describe('USER DELETE BY ID - POSITIVE', () => {

        it('User Delete By Id', (done) => {
            postData = {
                query: userDeleteByIdQ,
                variables: {
                    "userId": process.env.USER_ID
                }
            };
            gqlRequest(postData)
                .expect(200)//supertest
                .end((err, res) => {
                    if (err) return done(err);
                    respData = res.body.data.userDeleteById;
                    console.log(respData);
                    expect(respData).eq(true);
                    done();
                });
        });
    });
});
