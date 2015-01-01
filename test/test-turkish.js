/* global describe,it */

var getSlug = require('../lib');

describe('getSlug translate turkish letters', function () {
    'use strict';

    it('should be ', function (done) {

        getSlug('ÜÄÖüäö', {
                lang: 'tr'
            })
            .should.eql('uaeouaeo');

        getSlug('ÜÖÄ äüö', {
                lang: 'tr'
            })
            .should.eql('uoae-aeuo');

        done();
    });

});
