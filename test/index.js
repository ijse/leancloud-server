
"use semicolon-less"

var should = require('should')
var request = require('supertest')

var config = require('../config/global.json')
var app = "http://localhost:" + config.port

describe('Test Hello', function() {

  it('should return hello', function(done) {
    request(app)
    .post('/avos/hello')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, /result/, done)
  })


})