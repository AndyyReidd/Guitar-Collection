import React, {Component} from 'react';
import GuitarDetails from './GuitarDetails';
import BrandLabel from './BrandLabel';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

class GuitarBlock extends TrackerReact(Component) {
    constructor(props){
        super(props);
    }

    render(){
        let brands = this.props.brands.map(
            brand => this.makeBrand(brand.brand)
        );

        return brands;
    }

    makeBrand(brand) {
        return (
            <div className="guitar-block" key={brand}>
                <BrandLabel value={brand} />
                <GuitarDetails brand={brand} guitars={this.props.guitars} />
            </div>
        )
    }
}

export default GuitarBlock;