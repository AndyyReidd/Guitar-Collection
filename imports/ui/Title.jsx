import React, {Component} from 'react';
import Navbar from './Navbar';

class Title extends Component {
    constructor(props) {
        super(props);
    }
    

    render(){
        return (
            <div>
                <h1>Vintage Guitar Collection - {this.props.location}</h1>
                <Navbar exclude={this.props.location}/>
            </div>
        );
    }
}

export default Title;
