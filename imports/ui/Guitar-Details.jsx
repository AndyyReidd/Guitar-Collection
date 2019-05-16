import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Guitars from '../api/guitars';

class GuitarDetails extends TrackerReact(Component){
    render(){
        const guitars = Guitars.find({}).fetch().map(
            guitar => this.makeGuitar(guitar)
          );          
        
        return guitars;
    }

    makeGuitar(guitar) {
        if (guitar.brand == this.props.brand)
        {
            return (
                <div className="guitar-details" key={guitar._id}>
                    <img className="guitar-img" src={guitar.img}></img>
                    <br />'{guitar.year} {guitar.model}<br />
                </div>
            );
       }
    } 
}

export default GuitarDetails;