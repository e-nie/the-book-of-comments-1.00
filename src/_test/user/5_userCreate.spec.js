const { expect } = require('chai');
const { userCreateQ, userCreateWrongQ } = require('./queries');
const { user,userEmptyFields } = require('./data');
const { gqlRequest } = require('../gqlRequest');
const User = require('../../models/User');
const mongoose = require('mongoose');


let respData = null;
let postData = null;
let hook = 'beforeHook';
before('DELETE MANY', () => {
    User.deleteMany({});
    console.log('users deleted');
});

describe('USER CREATE', () => {
    describe('USER CREATE - POSITIVE TESTS', () => {
        it('user create all fields', (done) => {
            postData = {
                query: userCreateQ,
                variables: user
            };
            gqlRequest(postData)
                .expect(200)//supertest
                .end((err, res) => {
                    if (err) return done(err);
                    respData = res.body.data.userCreate;
                    console.log(respData);
                    expect(respData.firstName).eq(user.userInput.firstName);
                    expect(respData.lastName).eq(user.userInput.lastName);
                    done();
                });
        });
    });


//=================== NEGATIVE TESTS ===============================================

    describe('USER CREATE - NEGATIVE TESTS', () => {
        it('user create  - empty lastName type - negative', (done) => {
            postData = {
                query: userCreateQ,
                variables: userEmptyFields
            };
            gqlRequest(postData)
                .expect(400)//supertest
                .end((err, res) => {
                    if (err) return done(err);
                    respData = res.body.errors[0]
                    console.log(respData);
                    expect(respData.message).eq('Variable "$userInput" got invalid value null at "userInput.lastName"; Expected non-nullable type "String!" not to be null.');
                    // expect(respData.lastName).eq(userEmptyFields.userInput.lastName);
                    done();
                });
        });

        it('user create - wrong query - negative', (done) => {
            postData = {
                query: userCreateWrongQ,
                variables: user
            };
            gqlRequest(postData)
                .expect(400)//supertest
                .end((err, res) => {
                    if (err) return done(err);
                    respData = res.body.errors[0].message
                    console.log(respData);
                    expect(respData).eq('Cannot query field "firstName_" on type "User". Did you mean "firstName" or "lastName"?');
                    // expect(respData.lastName).eq(userEmptyFields.userInput.lastName);
                    done();
                });
        });
    });
});
