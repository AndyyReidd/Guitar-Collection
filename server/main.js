import { Meteor } from 'meteor/meteor';
import Guitars from '../imports/api/collections/guitars';
import Brands from '../imports/api/collections/brands';

function insertGuitar(year, brandId, model, img) {
  Guitars.insert({ year, brandId, model, img});
}

function insertBrand(brand){
  Brands.insert({brand});
}

Meteor.startup(() => {

  // If the Guitars collection is empty, add some data.
  if (Guitars.find({},{"brand":1.0}).count() == 0) {
    insertGuitar(52,'Fender','Telecaster',Images.tele);
    insertGuitar(54,'Fender','Stratocaster',Images.strat);
    insertGuitar(58,'Fender','Jazzmaster',Images.jazz);
    insertGuitar(62,'Fender','Jaguar',Images.jag);
    
    insertGuitar(49,'Gibson','ES-175',Images.es_175);
    insertGuitar(52,'Gibson','Les Paul',Images.lp);
    insertGuitar(58,'Gibson','ES-335',Images.es_335);
    insertGuitar(61,'Gibson','SG',Images.sg);

    insertGuitar(53,'Gretsch','Duo Jet',Images.duo);
    insertGuitar(55,'Gretsch','Country Gentlemen',Images.g6122);
    insertGuitar(55,'Gretsch','G6120',Images.g6120);
    insertGuitar(55,'Gretsch','White Falcon',Images.g6136);
  }
  else{
    console.log('Guitars already');
  }

  
  // If the Guitars collection is empty, add some data.
  if (!Brands.findOne({})) {
    insertBrand('Fender');
    insertBrand('Gibson');
    insertBrand('Gretsch');
  }
  else{
    console.log('Brands already');
  }

  Meteor.publish('guitarsPub', ()=> Guitars.find());
  Meteor.publish('brandsPub', ()=> Brands.find());

});


