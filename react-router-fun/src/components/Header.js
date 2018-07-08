import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  
    render() {
      return (
            <div>
                
                <div className="text-center">
                <h1><b><span className="hq-color">HQ</span>umana</b></h1>
                <p mt-4 className="space-description">A real-time trivia game implementing web sockets.</p>
                <Link to={'/'} className="link-text"> Home </Link>
            
                <Link to={'/questions'} className="link-text"> questions </Link>
                
                <Link to={'/winnerPage'} className="link-text"> Winner Page </Link>
            
                <Link to={'/QuestionResults'} className="link-text"> Question Results</Link>
                </div>
            </div>
        )
    }
}

export default Header
  