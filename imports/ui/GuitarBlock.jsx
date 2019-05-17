import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import GuitarDetails from './GuitarDetails';
import BrandLabel from './BrandLabel';
import Brands from '../api/collections/brands';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Splash from './Splash';


class GuitarBlock extends TrackerReact(Component) {
    constructor(props){
        super(props);

        this.state = ({
            subscription : {
                brand_info : ''
            }
        });

        this.getBrands = this.getBrands.bind(this);
    }

    componentWillUnmount() {
        this.state.subscription.brand_info.stop();
    }

    componentDidMount() {
        this.setState = ({
            subscription : {
                brand_info : Meteor.subscribe('brandsPub')
            }
        });
    }

    getBrands(){
        return Brands.find({}).fetch();
    }
    

    render(){

        if (!this.getBrands()) {
            return <Splash/>
        }

        let brands = this.getBrands().map(
            guitar => this.makeBrand(guitar.brand)
        );

        return brands;
    }

    makeBrand(brand) {
        return (
            <div className="guitar-block" key={brand}>
                <BrandLabel value={brand} />
                <GuitarDetails brand={brand} />
            </div>
        )
    }
}

export default GuitarBlock;