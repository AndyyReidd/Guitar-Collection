import React, {Component} from 'react';
import GuitarDetails from './Guitar-Details';
import Guitars from '../api/guitars';
import { BrandLabel } from './Brand-Label';

class GuitarBlock extends Component {
    render(){
        return(
            <div className="guitar-block">
                    <BrandLabel brands={getBrands} />
                    <GuitarDetails />
            </div>
        );
    }
}

let getBrands = () => {
    Guitars.find({}).fetch()
}

export default GuitarBlock;