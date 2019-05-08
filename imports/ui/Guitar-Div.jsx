import React, {Component} from 'react';
import GuitarDetails from './Guitar-Details';
import GuitarBlock from './Guitar-Block';

class GuitarDiv extends Component{
    render(){
        return(
            <div>
                <GuitarBlock />
            </div>
        )
    }
}

export default GuitarDiv;