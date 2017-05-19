import React, {Component} from 'react';
import {BrowserRouter as IndexRoute, Redirect, Router, Route, NotFoundRoute, DefaultRoute, Link, RouteHandler} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Switch } from 'react-router'
import Features from './Features';
import Home from './Home';
import Header from './Header';
import NoMatch from './NoMatch';


const initalState = {
    value: null
}

const store = createStore(fromReducer, initalState);

class App extends Component {
    constructor(props){
        super(props);
        this.state= {
            profile: 'kenji'
        }
    }
    render(){
        return (
            <div>
                <Header {...this.props} />
                <Switch>
                    <Route exact path="/" render={ props => <Home title={"I am Title"}
                        status={"Here is my status"} myprofile={this.state.myprofile} {...this.props} />}
                        />
                    <Route path='/feature' render={ (props) => <Features {...this.props} />} />
                    <Route component={NoMatch}/>
                </Switch>
            </div>
        )
    }
}


export default App