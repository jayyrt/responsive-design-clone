import './App.css';
import React from 'react';
import NavBar from './components/NavBar';

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      navLinks: ['SERVICE', 'PORTFOLIO', 'ABOUT', 'TEAM', 'CONTACT'],
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
    </div>
  );
}
}

export default App;
