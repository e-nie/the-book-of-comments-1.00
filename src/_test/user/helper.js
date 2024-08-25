/*
this helper drops the database and create user
 */

const { userCreateQ } = require('./queries');
const { user } = require('./data');
const { gqlRequest } = require('../gqlRequest');
const User = require('../../models/User');


let respData = null;
let postData = null;
process.env.USER_ID = null

before('DELETE MANY', () => {
    User.deleteMany({});
    console.log('users deleted');
});

describe('USER CREATE', () => {
    it('user create all fields - HELPER', (done) => {
        postData = {
            query: userCreateQ,
            variables: user
        };
        gqlRequest(postData)
            .expect(200)//supertest
            .end((err, res) => {
                if (err) return done(err);
                respData = res.body.data.userCreate;
                process.env.USER_ID = respData._id
                console.log('TEST USER CREATED =>', respData);
                done();
            });
    });
});





