const { expect } = require('chai');
const { usersGetAllQ } = require('./queries');
const { user } = require('./data');
const { gqlRequest } = require('../gqlRequest');

let respData = null;
let postData = null;

describe('USER GET ALL', () => {
    describe('USER GET ALL - POSITIVE TESTS', () => {

        it('users get all', (done) => {
            postData = {
                query: usersGetAllQ,
                variables: {
                    "amount": 3 // we can limit amount, get all by default (with null)
                }
            };
            gqlRequest(postData)
                .expect(200)//supertest
                .end((err, res) => {
                    if (err) return done(err);
                    respData = res.body.data.usersGetAll;
                    console.log(respData);
                    expect(respData.length).to.be.greaterThan(0);
                    expect(respData).to.be.an('array').that.is.not.empty;
                    // expect(respData).to.be.an('array').that.does.not.deep.include( {
                    //         _id: '66aec5ea9d219777bb2dbc1c',
                    //         firstName: 'test1',
                    //         lastName: 'test1'
                    //     },
                    // )

                    done();
                });
        });

    });


});
