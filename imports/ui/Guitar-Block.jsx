import React, {Component} from 'react';
import GuitarDetails from './Guitar-Details';
import Guitars from '../api/guitars';
import BrandLabel from './Brand-Label';
import { withTracker } from 'meteor/react-meteor-data';


class GuitarBlock extends Component {
    constructor(props){
        super(props);

        this.state = {usedBrands : new Array()};
    }

    render(){
        const brands = this.props.brands.map(
            guitar => this.makeBrand(guitar.brand)
        );

        return(
          brands
        );
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


export default GuitarBlockContainer = withTracker(() => {
    return {
      brands: Guitars.find().fetch()        
    };
  })(GuitarBlock);
  