import './App.css';
import React from 'react';
import NavBar from './components/NavBar';

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      navLinks: ['services', 'portfolio', 'about', 'team', 'contact']
    }
  }

  render(){
    const { navLinks } = this.state;

    return (
    <div className="App">
      <NavBar
      links = {navLinks}
      />
    </div>
  );
}
}

export default App;
