import React from 'react';
import { Meteor } from 'meteor/meteor';
import Guitars from '/imports/api/guitars';
import Images from '../imports/api/Images';

function insertGuitar(year, brand, model, img) {
  Guitars.insert({ year, brand, model, img});
}

Meteor.startup(() => {

  // If the Guitars collection is empty, add some data.
  if (Guitars.find({},{"brand":1.0}).count() == 0) {
    insertGuitar(1952,'Fender','Telecaster',Images.tele);
    insertGuitar(1954,'Fender','Stratocaster',Images.strat);
    insertGuitar(1958,'Fender','Jazzmaster',Images.jazz);
    insertGuitar(1962,'Fender','Jaguar',Images.jag);
    
    insertGuitar(1949,'Gibson','ES-175',Images.es_175);
    insertGuitar(1952,'Gibson','Les Paul',Images.lp);
    insertGuitar(1958,'Gibson','ES-335',Images.es_335);
    insertGuitar(1961,'Gibson','SG',Images.sg);

    insertGuitar(1953,'Gretcsh','Duo Jet',Images.duo);
    insertGuitar(1955,'Gretcsh','Country Gentlemen',Images.g6122);
    insertGuitar(1955,'Gretcsh','G6120',Images.g6120);
    insertGuitar(1955,'Gretcsh','White Falcon',Images.g6136);
  }
  else{
    console.log('Guitars already');
  }
});


