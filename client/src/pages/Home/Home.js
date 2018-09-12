import React, { Component } from "react";
import Search from "../Search";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.data = [{ id: 1, animal: "Dog", name: "rosco", breed: "Husky" }];
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
    return (
      <div className="Home">
        <div className="searchBar">
          <h1 className="h1">Welcome to Adopt-A-Pet</h1>
          <h2 className="h2">Search for a pet!</h2>
          <form className="searchInput">
            <div className="search-group">
              <select
                type="input"
                className="form-control"
                name="animalType"
                onChange={this.props.handleChange}
                id="searchTerm"
                placeholder="Choose search term"
              >
                <option value="dog">Animal Type</option>
                <option value="dog">Dogs</option>
                <option value="cat">Cats</option>
              </select>
              <input
                type="input"
                name="zipCode"
                onChange={this.props.handleChange}
                value={this.props.zipCode}
                className="form-control"
                id="zipSearch"
                placeholder="Zip Code"
              />
              <div>
                <button
                  onClick={this.props.searchAnimals}
                  className="searchSubmit"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
        <Search {...this.props}/>
      </div>
    );
  }
}

export default Home;


// <option>Rabbits</option>
// <option>Small & Furry</option>
// <option>Scales, Fins, & Other</option>
// <option>Birds</option>
// <option>Horses</option>
// <option>Barnyard</option>
