var util = require('util');
var assert = require('assert');
var proxyquire = require('proxyquire');

exports.it_should_test_middleware = function(callback) {
  var gotMockReport = false;
  var mockreports = {
    sendReport: function(obj) {
      gotMockReport = true;
      assert.equal(obj.func, '/test/foo', "Unexpected 'func': " + util.inspect(obj));
    }, '@noCallThru': true
  };

  var fhm = proxyquire('fh-middleware.js', {"./cloud/fh-reports.js": mockreports}).fhmiddleware();
  var req = {
    url: '/test/foo'
  };

  // create fake response
  var events = require('events');
  var res = new events.EventEmitter();

  fhm(req, res, function next() {
    // trigger the mock finish of the response
    res.emit('finish');

    // finish has been emitted, the mock report should be called
    assert.ok(gotMockReport, "Didn't get call to mock report");

    callback();
  });
};
