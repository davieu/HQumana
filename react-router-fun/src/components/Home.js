import React, { Component } from 'react';

class Home extends Component {
  
    render() {
        return (
            <div className="content row justify-content-center" >
<div className="home col-xs-8 col-s-8 offset-xs-2 offset-s-2 justify-content-center">
  <h1>Hello!</h1>
  <div className="container">
    <form>
    <input placeholder="Username" type="text" name="username1" className="username" required />
              <label for="username1" >Username Required</label>
    <input placeholder="Password" type="password" className="password1" name="password" required/>
      <label for="password1">Password Required</label>
    <button className="btn login" type="submit">Sign In</button>
    </form>
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
  