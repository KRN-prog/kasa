import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Logement from './pages/Logement';
import About from './pages/About';
import Error404 from './pages/404';


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/logement/:idLogement' component={Logement} />
                <Route component={Error404} />
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);