import React from 'react';
import Search from './pages/Search/Search';
import Home from './pages/Home/Home';
import Mypets from './pages/Mypets/Mypets';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
    <Router>
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/savedpets" component={Mypets} />

                {/* <Route component={NoMatch} /> */}
            </Switch>
            <Footer />
        </div>
    </Router>
)

export default App;