import React, { Component } from 'react';

class Questions extends Component {
  
    render() {
        return (
            <div className="">
                <div><h1 className="text-center">Questions</h1></div>
                <div className="text-center questions-bg">
                <div><h1 className="text-center">Questions</h1></div>
                    <button className="btn-primary answer-button mt-2" type="submit">Answer A</button><br/> 
                    <button className="btn-primary answer-button mt-2" type="submit">Answer B</button><br/>
                    <button className="btn-primary answer-button mt-2" type="submit">Answer C</button><br/>
                    <button className="btn-primary answer-button mt-2" type="submit">Answer D</button>
                </div>
            </div>  
        )
    }
}

export default Questions;
