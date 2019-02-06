const test=require('tape');
const superTest=require('supertest');
const router=require('../src/router');

//Server Testing
test('Home route must return status code of 200',(t)=>{
    superTest(router)
        .get('/')
        .expect('Content-Type', /html/)
        .end((err,res)=>{
            t.error(err);
            t.equal(res.statusCode,200,'should return 200');
            t.end();
        });
});
test('search route',(t)=>{
    superTest(router)
    .post('/search')
    .send('215.255.65.10')
    .expect('Content-Type','application/json')
    .end((err,res)=>{
        t.error(err);
        t.equal(res.statusCode,200,'should return 200');
        t.isNotEqual(Object.keys(res).length,0,'response should not be empty')
        t.end();
    })
})
test('not found page',(t)=>{
    superTest(router)
    .get('/sddfdf')
    .expect(404)
    .expect('Content-Type','text/html')
    .end((err,res)=>{
        t.error(err);
        t.end();
    })
})