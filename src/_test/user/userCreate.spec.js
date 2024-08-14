const { expect } = require('chai');

// import { expect } from 'chai';
const {userCreateQ} = require('./queries');
const {user } = require('./data');
const { gqlRequest } = require('../gqlRequest');



let respData = null;
let postData = null;

describe('USER CREATE', () => {
    describe('USER CREATE - POSITIVE TESTS', () => {
        it('user create all fields', (done) => {
            postData = {
                query: userCreateQ,
                variables: user
            };
            gqlRequest(postData)

                .end((err, res) => {
                    if (err) return done(err);
                    respData = res.body;
                    console.log(respData);
                    // expect(resData).eq();
                    done()
                });
        });
    });

    describe('USER CREATE - NEGATIVE TESTS', () => {
        it('user create all fields', () => {


        });
    });
});
