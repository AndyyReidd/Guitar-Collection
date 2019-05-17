import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Guitars from '../api/collections/Guitars';
import {Meteor} from 'meteor/meteor';
import Splash from './Splash';

class GuitarDetails extends TrackerReact(Component){
    constructor(props) {
        super(props);
    }    
    
    render(){
        if (!this.props.guitars) {
            return <Splash/>;
        }

        let guitars = this.props.guitars.map(
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