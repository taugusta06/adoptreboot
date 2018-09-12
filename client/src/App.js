import React from "react";
import Home from "./pages/Home/Home";
import Mypets from "./pages/Mypets/Mypets";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      savedPets: [],
      animalType: "dog",
      zipCode: "85297"
    };
    this.searchAnimals = this.searchAnimals.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removePet = this.removePet.bind(this);
    this.savePet = this.savePet.bind(this);
  }

  handleChange(e){
    const {value, name} = e.target;
    this.setState({[name]: value});
  }

  searchAnimals(e) {
    const {zipCode, animalType} = this.state;
    e.preventDefault();
    axios.get(`http://localhost:3001/api/animals/${zipCode}/${animalType}`).then(response => {
      this.setState({ searchResults: response.data });
    });
  }

  savePet(pet) {
    let savedPets = [...this.state.savedPets];
    if (savedPets.indexOf(pet) === -1) {
      savedPets.push(pet);
    }
    this.setState({ savedPets });
  }

  removePet(pet) {
    let savedPets = [...this.state.savedPets];
    if (savedPets.indexOf(pet) !== -1) {
      savedPets.splice(savedPets.indexOf(pet), 1);
    }
    this.setState({ savedPets });
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Home
                  {...this.state}
                  handleChange={this.handleChange}
                  searchAnimals={this.searchAnimals}
                  savePet={this.savePet}
                />
              )}
            />
            <Route
              exact
              path="/savedpets"
              render={props => (
                <Mypets removePet={this.removePet} {...this.state} />
              )}
            />
            {/* <Route component={NoMatch} /> */}
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
