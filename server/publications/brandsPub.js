import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Brands from '../../imports/api/collections/brands';

// always limit publications by arguments
Meteor.publish('brandsPub', function () { // have to use es5 syntax here
  // this is bad practice - should always limit record amounts by retrival arg
  return Brands.find({});
});
