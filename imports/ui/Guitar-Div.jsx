import React, {Component} from 'react';
import GuitarDetails from './Guitar-Details';
import GuitarBlock from './Guitar-Block';
import Guitars from '../api/guitars';

class GuitarDiv extends Component{
    render(){
        return(
            <div className="guitar-div">
                <GuitarBlock brands={Guitars} />
            </div>
        )
    }
}

export default GuitarDiv;