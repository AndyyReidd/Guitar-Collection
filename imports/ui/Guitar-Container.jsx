import React, {Component} from 'react';
import GuitarBlock from './Guitar-Block';
import Splash from './splash';

import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Meteor } from 'meteor/meteor';
import Guitars from '../api/guitars';



class GuitarContainer extends TrackerReact(Component){
    constructor(props) {
        super(props);        
        this.state = {
            subscription : {
                guitar_info : Meteor.subscribe('guitarpub')
            },
            guitars : ''
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
        const allGuitars = this.getGuitars();
        console.log(Guitars.find({}).fetch());
        this.setState({guitars:allGuitars});
    }
    

    render(){
        if (!this.getGuitars()) {
            return (<Splash/>);
        }        

        return(
            <div className="guitar-div">
                <GuitarBlock guitars={this.state.guitars} />
            </div>
        )
    }

 
}

export default GuitarContainer;