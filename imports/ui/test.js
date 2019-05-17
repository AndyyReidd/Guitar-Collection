import React, {Component} from 'react';
import GuitarBlock from './GuitarBlock';
import Splash from './Splash';

import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Meteor } from 'meteor/meteor';
import Guitars from '../api/collections/Guitars';
import Brands from '../api/collections/Brands';

class Test extends TrackerReact(Component) {
    constructor(props) {
        super(props);        
        
        this.state = {
            subscription : {
                guitar_info : Meteor.subscribe('guitarsPub'),
                brand_infro : Meteor.subscribe('brandsPub')
            }
        }

        /*this.getGuitars = this.getGuitars.bind(this);
        this.getBrands = this.getBrands.bind(this);*/
    }

    getGuitars(){
        return Guitars.find({}).fetch();
    }

    getBrands(){
        return Brands.find({}).fetch();
    }

    render() {
        if (!this.getGuitars()) {
          return <div>Hi</div>;
        }

        let guitars = this.getGuitars();

        return guitars.map((guitar) => {
            return <div>{guitar.model}</div>
        })
    }
}

export default Test;
