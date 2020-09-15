import { MDBCollapse, MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink } from "mdbreact";
import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import './App.css';
import { auth } from './firebase';
import About from './pages/About';
import Home from './pages/Home';
import LoginForm from './pages/LoginForm';

class App extends Component {

  signout = () => {
    // history = useHistory();

    auth.signOut().then(function () {
      console.log("sign out succesful");
      // const { history } = this.props;
      // history.push('/');
    }, function (error) {
      console.log("an error happened");
    });
  }

  state = {
    isOpen: false
  };

  // toggleCollapse = () => {
  //   this.setState({ isOpen: !this.state.isOpen });
  // }

  render() {
    // const { history } = this.props;

    return (

      <HashRouter>

        <MDBNavbar color="black" dark expand="md" scrolling fixed="top">
          {/* <MDBNavbarBrand>
              <strong className="white-text">Navbar</strong>
            </MDBNavbarBrand> */}
          {/* <MDBNavbarToggler onClick={this.toggleCollapse} /> */}
          <MDBCollapse id="navbarCollapse3"
            isOpen={this.state.isOpen} navbar
          >
            <MDBNavbarNav left>
              <MDBNavItem >
                <MDBNavLink to=""></MDBNavLink>
              </MDBNavItem>
              <MDBNavItem active>
                <MDBNavLink to="/home">Home</MDBNavLink>
              </MDBNavItem>

              <MDBNavItem >
                <MDBNavLink to=""></MDBNavLink>
              </MDBNavItem>
              <MDBNavItem >
                <MDBNavLink to=""></MDBNavLink>
              </MDBNavItem>

              <MDBNavItem active>
                <MDBNavLink to="/about">About</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>

            <MDBNavbarNav right>
              <MDBNavItem active>
                <MDBNavLink to="/"
                  onClick={this.signout}>
                  Logout</MDBNavLink>
              </MDBNavItem>

              <MDBNavItem >
                <MDBNavLink to=""></MDBNavLink>
              </MDBNavItem>

            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>

        {/* <ul>
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul> */}

        <hr />

        <Switch>
          <Route exact path="/">
            <LoginForm />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          {/* <Route path="/dashboard">
          <Dashboard />
        </Route> */}
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
