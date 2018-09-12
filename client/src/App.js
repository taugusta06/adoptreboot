import React from "react";
import Home from "./pages/Home/Home";
import Mypets from "./pages/Mypets/Mypets";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/Signup";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      savedPets: [],
      animalType: "dog",
      zipCode: "85297",
      email: "",
      password: "",
      isLoggedIn: false,
      user: {}
    };
    this.searchAnimals = this.searchAnimals.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.removePet = this.removePet.bind(this);
    this.savePet = this.savePet.bind(this);
  }

  handleChange(e) {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  handleSignUp(e) {
    e.preventDefault();
    const { email, password } = this.state;
    axios.post("http://localhost:3001/api/signup", { email, password });
  }

  handleSignIn(e) {
    e.preventDefault();
    const { email, password } = this.state;
    axios.post("http://localhost:3001/api/login", { email, password })
      .then(({data}) => this.setState({isLoggedIn: true, user: data.user}));
  }

  searchAnimals(e) {
    const { zipCode, animalType } = this.state;
    e.preventDefault();
    axios
      .get(`http://localhost:3001/api/animals/${zipCode}/${animalType}`)
      .then(response => {
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
            <Route
              exact
              path="/signin"
              render={props => (
                <SignIn
                  {...this.state}
                  handleChange={this.handleChange}
                  handleSignIn={this.handleSignIn}
                />
              )}
            />
            <Route
              exact
              path="/signup"
              render={props => (
                <SignUp
                  {...this.state}
                  handleChange={this.handleChange}
                  handleSignUp={this.handleSignUp}
                />
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
