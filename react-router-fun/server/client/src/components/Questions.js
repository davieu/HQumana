import React, { Component } from 'react';
import { socketConnect } from 'socket.io-react';

class Questions extends Component {
  constructor(props){
    super(props)
  }
  componentWillMount = () => {
    console.log(this.props)



  }

  submitAnswer = (answer, id) => {
    console.log(answer, id)
        this.props.socket.emit('choice', {'answer': answer, 'id': id})

      }
      
    render() {
        return (
            <div className="container mt-5">
                <div className="row text-center">
                  <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                  <h2 className="text-light">{this.props.state.question.id}</h2>
                    <div className="card shadow mt-4 pt-3 pb-3">
                      <div className="card-body">
                        <p className="lead">{this.props.state.question.prompt}</p>
                        <button className="btn btn-primary mt-2" type="button" onClick={()=> {this.submitAnswer(this.props.state.question.choices[0], this.props.socket.id)}}>{this.props.state.question.choices[0]}</button><br/>
                        <button className="btn btn-primary mt-2" type="button" onClick={()=> {this.submitAnswer(this.props.state.question.choices[1], this.props.socket.id)}}>{this.props.state.question.choices[1]}</button><br/>
                        <button className="btn btn-primary mt-2" type="button" onClick={()=> {this.submitAnswer(this.props.state.question.choices[2], this.props.socket.id)}}>{this.props.state.question.choices[2]}</button><br/>
                        <button className="btn btn-primary mt-2" type="button" onClick={()=> {this.submitAnswer(this.props.state.question.choices[3], this.props.socket.id)}}>{this.props.state.question.choices[3]}</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        )
    }
}


export default socketConnect((Questions));
