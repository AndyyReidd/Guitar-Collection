import React, {Component} from 'react';
import GuitarBlock from './Guitar-Block';

class GuitarDiv extends Component{
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <div className="guitar-div">
                <GuitarBlock />
            </div>
        )
    }
}

export default GuitarDiv;