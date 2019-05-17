import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Guitars from '../api/collections/guitars';
import {Meteor} from 'meteor/meteor';
import Splash from './Splash';

class GuitarDetails extends TrackerReact(Component){
    constructor(props) {
        super(props);

        this.state = ({
            subscription : {
                guitar_info : ''
            }
        })
        
    }

    componentDidMount() {
        this.setState({
            subscription : {
                guitar_info : Meteor.subscribe('guitarPub')
            }
        })
    }

    componentWillUnmount() {
        this.state.subscription.guitar_info.stop();
    }

    getGuitars(){
        return Guitars.find({}).fetch();
    }
    
    
    render(){
        if (!this.getGuitars()) {
            return (<Splash/>);
        }

        let guitars = getGuitars().map(
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