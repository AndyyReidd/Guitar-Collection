import React from 'react';
import { Meteor } from 'meteor/meteor';
import Guitars from '/imports/api/guitars';
import Images from '../imports/api/Images';

function insertGuitar(year, brand, model, img) {
  Guitars.insert({ year, brand, model, img});
}

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (Guitars.find().count() === 0) {
    insertGuitar(1952,'Fender','Telecaster',Images.tele);
    insertGuitar(1954,'Fender','Stratocaster',Images.strat);
    insertGuitar(1958,'Fender','Jazzmaster',Images.jazz);
    insertGuitar(1962,'Fender','Jaguar',Images.jag);
  }
  else{
    console.log('Guitars already');
  }

  console.log("SRC: " + Images.tele);
});


