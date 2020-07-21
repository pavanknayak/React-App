import React from 'react';
import logo from './logo.svg';
import Navbar from './components/layout/Navbar';
import Users from './components/users/UserItem';
import './App.css';

class App extends React.Component {
  render(){
    
    
    return (
      <div className="App">
          <Navbar title = 'Github Finder'/>
          <Users />
      </div>
    );
  }

  
}

export default App;
