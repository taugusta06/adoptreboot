import React from 'react';
import Search from './pages/Search/Search';
import Home from './pages/Home/Home';
import Mypets from './pages/Mypets/Mypets';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            searchResults: []
        }
        this.searchAnimals = this.searchAnimals.bind(this);
    }

    searchAnimals() {
        axios.get('http://localhost:3001/api', {}).then(response => {
            this.setState({ searchResults: response.data });
            var newSearch = this.state;
            console.log(typeof newSearch);
        });
    }


render() {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/" render={(props) => <Home searchAnimals={this.searchAnimals} /> } />
                    <Route exact path="/search" render={(props) => <Search {...this.state} />} />
                    <Route exact path="/savedpets" component={Mypets} />
                    {/* <Route component={NoMatch} /> */}
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}
}

export default App;