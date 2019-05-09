import React, {Component} from 'react';

class BrandLabel extends Component{
    render(){
        return(
            <label className="brand-label">{this.props.value}</label>
        )
    }
}

export default BrandLabel;