const { expect } = require('chai');
const { gqlRequest } = require('../gqlRequest');
const { userGetByIdQ, userCreateQ } = require('./queries');
const { user } = require('./data');

let respData = null;
let postData = null;


describe('USER GET BY ID', () => {
    describe('USER GET BY ID - POSITIVE', () => {
        it('', (done) => {
            postData = {
                query: userGetByIdQ,
                variables: { userId: '66c76a6ca2102d52d6c4aa40' }
            };

            gqlRequest(postData)
                .expect(200)//supertest
                .end((err, res) => {
                    if (err) return done(err);
                    respData = res.body.data.userGetById;
                    console.log(respData);
                    expect(respData._id).eq('66c76a6ca2102d52d6c4aa40');
                    expect(respData.firstName).eq(user.userInput.firstName);
                    expect(respData.lastName).eq(user.userInput.lastName);
                    done();
                });
        });

        // describe('USER GET BY ID - NEGATIVE', () => {
        //
        // });

    });
});
