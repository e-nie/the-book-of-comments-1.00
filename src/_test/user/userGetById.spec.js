const { expect } = require('chai');
const { gqlRequest } = require('../gqlRequest');
const { userGetByIdQ } = require('./queries');
const { user } = require('./data');

let respData = null;
let postData = null;

describe('USER GET BY ID', () => {
    describe('USER GET BY ID - POSITIVE', () => {
        it('', (done) => {
            postData = {
                query: userGetByIdQ,
                variables: {
                    "userId": '66be2ca3343324afa90250fe'
                }
            };
            gqlRequest(postData)
                .expect(200)//supertest
                .end((err, res) => {
                    if (err) return done(err);
                    respData = res.body.data.userGetById;
                    console.log(respData);
                    expect(respData._id).eq('66be2ca3343324afa90250fe')
                    expect(respData.firstName).eq(user.userInput.firstName)
                    expect(respData.lastName).eq(user.userInput.lastName)
                    done();
                });
        });
    });

    // describe('USER GET BY ID - NEGATIVE', () => {
    //
    // });
});
