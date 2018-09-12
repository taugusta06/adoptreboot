import React, { Component } from 'react';
import './Home.css';
// import Results from '../../components/Results/Results';
import axios from 'axios';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: null,
        }
        this.data = [{ id: 1, animal: 'Dog', name: 'rosco', breed: 'Husky' }];
        // this.handleSearch = this.handleSearch.bind(this);
    }
    // handleSearch(evt) {
    //     axios.get('http://localhost:3001/api', {}).then(response => {
    //         this.setState({searchResults: response.data});
    //         var newSearch = this.state;
    //         console.log(typeof newSearch);

    //     });
    // }
    render() {
        console.log(this.state);
        return (
            <div>
                <div className="searchBar">
                    <h1 className='h1'>Welcome to Adopt-A-Pet</h1>
                    <h2 className='h2'>Search for a pet!</h2>
                    <form className="searchInput">
                        <div className="search-group">
                            <select type="input" className="form-control" id="searchTerm" placeholder="Choose search term">
                                <option>Animal Type</option>
                                <option>Dogs</option>
                                <option>Cats</option>
                                <option>Rabbits</option>
                                <option>Small & Furry</option>
                                <option>Scales, Fins, & Other</option>
                                <option>Birds</option>
                                <option>Horses</option>
                                <option>Barnyard</option>


                            </select>
                            <input type="input" className="form-control" id="zipSearch" placeholder="Zip Code"></input>
                            <div>
                                <button onClick={this.props.searchAnimals} className="searchSubmit">Search</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>



        );
    }
}



export default Home;
