import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header'
import Dashboard from './Dashboard'
import SurveyNew from './surveys/SurveyNew'
const Landing = () => <h2>Landing</h2>

//TURNED APP INTO A CLASS
//to use REACTS lifecycle methods you need to refactor
//App to a class component instead of a stateless component
//as it was before - look below
class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
//first argument is mapStateToProps which
//is null because we dont have it
//Instead of passing in mapDispatchToProps,
// we pass in our actions.
//miss out being able to customize names of functions
export default connect(null, actions)(App);