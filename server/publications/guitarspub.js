import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Guitars from '../../imports/api/guitars';

// always limit publications by arguments
Meteor.publish('guitarpub', function () { // have to use es5 syntax here
  // this is bad practice - should always limit record amounts by retrival arg
  return Guitars.find({});
});
