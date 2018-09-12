import React, { Component } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'

class NavBar extends Component {
    constructor(props) {
    super(props);

    this.state = {
        currentlySelectedTab: 0,
    }
    this.navBarConfig=[{name: 'Home', link:'/'},{name: 'Search', link:'/search'},{name: 'Saved Pets', link:'/savedpets'}];
    }
    handlePageChange(index) {
        this.setState({
            currentlySelectedTab: index
        });
    }
    componentDidMount(){
        // console.log(this.props.history.location.pathname);
        
        //take pathanme and loop through navBarConfig and check to find a match between pathname and link key. If match is found set State at currentlySelectedTab with that index
        //for of loop typically used on an array
        var newState = {};
        for(var navIndex in this.navBarConfig)
            if(this.navBarConfig[navIndex].link === this.props.history.location.pathname) {
                newState['currentlySelectedTab'] = +navIndex;
            };
            
        
        console.error(newState);
        this.setState(newState);
        //for in loop typically used for objects
        // for (this.props.history.location.pathname in index) {
        //     if (index === this.navBarConfig.link) {
        //     return { (currentlySelectedTab === index)
        //     }
        //     }
        // }
}
    render() {
        return (
            <div className='navbar-container'>
                <div className="navbar-links">
                    {this.navBarConfig.map((navBarItem, index)=> {
                        // console.log(navBarItem);
                       return (
                       <div key={index} className="nav-link-holder"><Link className={index === this.state.currentlySelectedTab ? 'selected' : null} to={navBarItem.link}><span onClick={() => this.handlePageChange(index)} className={`anchor`}>{navBarItem.name}</span></Link></div>
                    );
                    })}
                </div>
            </div>
        );
    }
}
export default withRouter(NavBar);