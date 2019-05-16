import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="nav-bar">
                <ul>
                    {this.props.exclude != "Add Guitar" ? 
                        <li><Link className="nav-bar-Link" to="add-guitar">Add Guitars</Link></li>
                    : null}

                    {this.props.exclude != "Guitars" ? 
                        <li><Link className="nav-bar-Link" to="/">View Guitars</Link></li>
                    : null}
                </ul>
            </div>
        );
    }
}

export default Navbar;
