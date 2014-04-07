// Copyright (c) FeedHenry 2011
var request = require('request');
var assert = require('assert');

module.exports = {
  'test OPTIONS request responds with the expected headers on cloud call' : function(finish) {
    request({ method: 'OPTIONS', url : process.env.FH_TEST_HOSTNAME + '/cloud/echo' }, function(err, response, body){
      assert.ok(!err, err);
      var headers = response.headers;
      assert.ok(headers['access-control-allow-origin'] === "*");
      assert.ok(headers['access-control-allow-headers'] === "Origin, X-Request-With, Content-Type, x-fh-auth-app, x-fh-auth-user");
      assert.ok(headers['access-control-allow-methods'] === 'POST, GET, OPTIONS, PUT, DELETE');
      assert.ok(headers['access-control-allow-credentials'] === "true");
      finish();
    });
  },
  'test OPTIONS request responds with the expected headers on mBaaS DB call': function(finish) {
    request({ method: 'OPTIONS', url : process.env.FH_TEST_HOSTNAME + '/mbaas/db' }, function(err, response, body){
      assert.ok(!err);
      var headers = response.headers;
      console.log(headers);
      assert.ok(headers['access-control-allow-origin'] === "*");
      assert.ok(headers['access-control-allow-headers'] === "Origin, X-Request-With, Content-Type, x-fh-auth-app, x-fh-auth-user");
      assert.ok(headers['access-control-allow-methods'] === 'POST, GET, OPTIONS, PUT, DELETE');
      assert.ok(headers['access-control-allow-credentials'] === "true");
      finish();
    });
  },
  'test OPTIONS request responds with the expected headers on sys/info/ping call': function(finish) {
    request({ method: 'OPTIONS', url : process.env.FH_TEST_HOSTNAME + '/sys/info/ping' }, function(err, response, body){
      assert.ok(!err);
      var headers = response.headers;
      assert.ok(headers['access-control-allow-origin'] === "*");
      assert.ok(headers['access-control-allow-headers'] === "Origin, X-Request-With, Content-Type, x-fh-auth-app, x-fh-auth-user");
      assert.ok(headers['access-control-allow-methods'] === 'POST, GET, OPTIONS, PUT, DELETE');
      assert.ok(headers['access-control-allow-credentials'] === "true");
      finish();
    });
  }
};