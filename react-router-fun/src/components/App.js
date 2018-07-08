import React, {Component} from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Header from './Header';
import WinnerPage from'./WinnerPage';
import QuestionResults from'./QuestionResults';
import Questions from './Questions';
import Home from './Home';

class App extends Component{
  render(){
    return(
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={Home}/>
            <Route path='/questions' component={Questions}/>
            <Route path='/QuestionResults' component={QuestionResults}/>
            <Route path='/winnerPage' component={WinnerPage}/>
          </div>
        </BrowserRouter>
      </div>
    )}
};

export default App




