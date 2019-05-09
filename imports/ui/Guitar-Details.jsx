import React, {Component} from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Guitars from '../api/guitars';

class GuitarDetails extends Component{
    render(){
        const guitars = this.props.guitars.map(
            guitar => this.makeGuitar(guitar)
          );          
          
        return (
            guitars
        );
    }

    makeGuitar(guitar) {
        if (guitar.brand == this.props.brand)
        {
            return (
                <div className="guitar-details" key={guitar._id}>
                    <img className="guitar-img" src={guitar.img}></img>
                    <p>{guitar.year} {guitar.model}</p>
                </div>
            );
       }
    }

//     <li key={guitar._id}>
//     {guitar.year} {guitar.brand} {guitar.model} <img src={guitar.img}></img>
//   </li>  
 
}

export default GuitarDetailsContainer = withTracker(() => {
    return {
      guitars: Guitars.find().fetch(),
    };
  })(GuitarDetails);
  