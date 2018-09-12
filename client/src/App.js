import React from "react";
import Search from "./pages/Search/Search";
import Home from "./pages/Home/Home";
import Mypets from "./pages/Mypets/Mypets";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      savedPets: []
    };
    this.searchAnimals = this.searchAnimals.bind(this);
    this.savePet = this.savePet.bind(this);
  }

  searchAnimals(e) {
    e.preventDefault();
    axios.get("http://localhost:3001/api").then(response => {
      this.setState({ searchResults: response.data });
    });
    // API.getPets().then(({data}) => {
    //   console.log(data);
    //   this.setState({ searchResults: data });
    // })
  }

  savePet(petId) {
    let savedPets = [...this.state.savedPets];
    if (savedPets.indexOf(petId) === -1) {
      savedPets.push(petId);
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
              render={props => <Home searchAnimals={this.searchAnimals} />}
            />
            <Route
              exact
              path="/search"
              render={props => (
                <Search savePet={this.savePet} {...this.state} />
              )}
            />
            <Route
              exact
              path="/savedpets"
              render={props => <Mypets {...this.state} />}
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
