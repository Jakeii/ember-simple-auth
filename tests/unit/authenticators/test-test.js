/* jshint expr:true */
import { it } from 'ember-mocha';
import Test from 'ember-simple-auth/authenticators/test';

describe('Authenticators.Test', function() {
  beforeEach(function() {
    this.authenticator = Test.create();
  });

  describe('#restore', function() {
    it('returns a resolving promise', function(done) {
      this.authenticator.restore().then(function() {
        expect(true).to.be.true;
        done();
      });
    });
  });

  describe('#authenticate', function() {
    it('returns a resolving promise', function(done) {
      this.authenticator.authenticate().then(function() {
        expect(true).to.be.true;
        done();
      });
    });
  });

  describe('#invalidate', function() {
    it('returns a resolving promise', function(done) {
      this.authenticator.invalidate().then(function() {
        expect(true).to.be.true;
        done();
      });
    });
  });
});
