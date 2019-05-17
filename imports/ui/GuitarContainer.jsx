import React, {Component} from 'react';
import GuitarBlock from './GuitarBlock';
import Splash from './Splash';

import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Meteor } from 'meteor/meteor';
import Guitars from '../api/collections/guitars';



class GuitarContainer extends TrackerReact(Component){
    constructor(props) {
        super(props);        
        
        this.state = {
            subscription : {
                guitar_info : ''
            }
        }

        this.getGuitars = this.getGuitars.bind(this);
    }

    componentWillUnmount() {
        this.state.subscription.guitar_info.stop();
    }
    
    getGuitars(){
        return Guitars.find({}).fetch();
    }

    componentDidMount() {
        this.setState({
            subscription : {
                guitar_info : Meteor.subscribe('guitarsPub')
            }
        });
    }

    render(){
        if (!this.getGuitars()) {
            return <Splash/>;
        }

        return(
            <div className="guitar-div">
                <GuitarBlock />
            </div>
        )
    }

 
}

export default GuitarContainer;