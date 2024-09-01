const { expect } = require('chai');
const { userCreateQ } = require('./queries');
const { user } = require('./data');
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


    describe('USER CREATE - NEGATIVE TESTS', () => {
        it('user create all fields', () => {


        });
    });
});
