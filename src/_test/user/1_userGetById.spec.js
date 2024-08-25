const { expect } = require('chai');
const { gqlRequest } = require('../gqlRequest');
const { userGetByIdQ, userCreateQ } = require('./queries');
const { user } = require('./data');
const User = require('../../models/User');

let respData = null;
let postData = null;


describe('USER GET BY ID', () => {
    describe('USER GET BY ID - POSITIVE', () => {
        it('User get by id', (done) => {
            postData = {
                query: userGetByIdQ,
                variables: {
                    userId: process.env.USER_ID
                }
            };

            gqlRequest(postData)
                .expect(200)//supertest
                .end((err, res) => {
                    if (err) return done(err);
                    respData = res.body.data.userGetById;
                    console.log(respData);

                    expect(respData.firstName ).eq(user.userInput.firstName);
                    expect(respData.lastName ).eq(user.userInput.lastName);
                    expect(respData._id ).eq(process.env.USER_ID);
                    expect(respData).to.deep.equal({
                        _id: process.env.USER_ID,
                        ...user.userInput
                    });
                    done();
                });
        });

        // describe('USER GET BY ID - NEGATIVE', () => {
        //
        // });

    });
});
