import React, { Component } from 'react';

class Home extends Component {

    render() {
        return (
            <div className="container" >
              <div className="row mt-5">
                <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                  <div className="card shadow pt-3 pb-3">
                    <div className="card-body">
                      <h1 className="text-center mb-4">Lets get started!</h1>
                      <form>
                      <input placeholder="Username" type="text" name="username1" className="username" required />
                                <label className="mb-5" for="username1" >Username Required</label>
                      <button className="btn btn-primary btn-block mt-5" type="submit">Sign In</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            // <div className="not-header card justify-content-center">
            //     <h3 className="text-center mt-4 not-header">Please Enter Name Here!</h3>
            //     <div className="header-container yo">
            //         <div className="col-xs-6 mt-4 text-center yo">
            //             <form onSubmit={this.submitHandler}>
            //                 <input
            //                     className="username-input"
            //                     type="text"
            //                     placeholder="Enter Username"/>
            //                 <button className="btn-primary search-button" type="submit">Submit</button>
            //             </form>
            //         </div>
            //     </div>
            // </div>
        )
    }
}

export default Home;
