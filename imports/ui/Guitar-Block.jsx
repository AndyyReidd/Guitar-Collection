import React, {Component} from 'react';
import GuitarDetails from './Guitar-Details';
import Guitars from '../api/guitars';
import BrandLabel from './Brand-Label';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


class GuitarBlock extends TrackerReact(Component) {
    constructor(props){
        super(props);

        this.state = {usedBrands : new Array()};
    }

    render(){
        const brands = Guitars.find({}).fetch().map(
            guitar => this.makeBrand(guitar.brand)
        );

        return brands;
    }

    makeBrand(brand) {
        if (!this.state.usedBrands.includes(brand))
        {
            this.state.usedBrands.push(brand);


            return (
                <div className="guitar-block" key={brand}>
                    <BrandLabel value={brand} />
                    <GuitarDetails brand={brand} />
                </div>
            )
        }
    }
}

export default GuitarBlock;

/*
export default GuitarBlockContainer = withTracker(() => {
    return {
      guitars: Guitars.find().fetch()        
    };
  })(GuitarBlock);
  */
  