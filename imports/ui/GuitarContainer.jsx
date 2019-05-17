import React, {Component} from 'react';
import GuitarBlock from './GuitarBlock';
import Splash from './Splash';

import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Meteor } from 'meteor/meteor';
import Guitars from '../api/collections/Guitars';
import Brands from '../api/collections/Brands';

class GuitarContainer extends TrackerReact(Component){
    constructor(props) {
        super(props);        
        
        this.state = {
            subscription : {
                guitar_info : Meteor.subscribe('guitarsPub'),
                brand_infro : Meteor.subscribe('brandsPub')
            }
        }

       this.getGuitars = this.getGuitars.bind(this);
       this.getBrands = this.getBrands.bind(this);
    }

    componentWillUnmount() {
        this.state.subscription.guitar_info.stop();
    }
    
    getGuitars(){
        return Guitars.find({}).fetch();
    }

    getBrands(){
        return Brands.find({}).fetch();
    }

    render(){
        if (!this.getGuitars() || !this.getBrands()) {
            return <Splash/>;
        }

        return(
            <div className="guitar-div">
                <GuitarBlock guitars={this.getGuitars()} brands={this.getBrands()}/>
            </div>
        )
    }
}

export default GuitarContainer;