import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Body from './components/Body'

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      navLinks: ['SERVICES', 'PORTFOLIO', 'ABOUT', 'TEAM', 'CONTACT'],
      isMenuOpen: false,
    }
  }

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen })
  }

  render(){
    const { navLinks, isMenuOpen } = this.state;

    return (
    <div className="App">
      <NavBar
      toggleMenu = {this.toggleMenu}
      isMenuOpen = {isMenuOpen}
      links = {navLinks} 
      />
      <Body />
    </div>
  );
}
}

export default App;
