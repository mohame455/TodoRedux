import React, { Component } from 'react';
import Todo from './components/Todo';
import './App.css'
import List from './components/List';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( <div>
      <Todo/>
      <List/>
    </div> );
  }
}
 
export default App;
