import React, { Component } from 'react';

class Questions extends Component {

    render() {
        return (
            <div className="container mt-5">
                <div className="row text-center">
                  <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                  <h2 className="text-light">Question (1)</h2>
                    <div className="card shadow mt-4 pt-3 pb-3">
                      <div className="card-body">
                        <p className="lead">The actual question</p>
                        <button className="btn btn-primary mt-2" type="submit">Answer A</button><br/>
                        <button className="btn btn-primary mt-2" type="submit">Answer B</button><br/>
                        <button className="btn btn-primary mt-2" type="submit">Answer C</button><br/>
                        <button className="btn btn-primary mt-2" type="submit">Answer D</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        )
    }
}

export default Questions;
