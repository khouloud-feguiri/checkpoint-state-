import { Component } from 'react';
import './App.css';
import Profile from "./Profile/Profile";


export default class App extends Component {
  constructor (props) {
    super(props)
    this.state={show: false}
  }
  handleclick=()=>this.setState({show:!this.state.show})
  render(){
    return (
    <div className="App">
       <h1>click the button</h1>
    
       <button onClick={this.handleclick}>click me</button>
       {this.state.show? <Profile/>:null}

    </div>
  );
}
}
