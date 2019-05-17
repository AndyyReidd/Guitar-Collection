import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Guitars from '../../imports/api/collections/Guitars';

/*export const guitarsPub = Meteor.publish('guitarsPub', function () { // have to use es5 syntax here
  // this is bad practice - should always limit record amounts by retrival arg
  return Guitars.find({});
});*/

