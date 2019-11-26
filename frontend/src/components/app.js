import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import LandingPage from './landing_page';
import './app.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      form: ""
    }
    this.showLogin = this.showLogin.bind(this);
    this.showSignup = this.showSignup.bind(this);
  }

  showSignup() {
    console.log("signup clicked");
    this.setState({ form: "signup" });
  }

  showLogin() {
    console.log("login clicked");
    this.setState({ form: "login" });
  }

  // hideforms(){
  //   this.setState({ form: "" });
  // }

  render() {
    return (
      <div className="app-div">
        <NavBarContainer
          showSignup={this.showSignup}
          showLogin={this.showLogin}
        />
        <Switch>
          <ProtectedRoute exact path="/polls" component={MainPage} />
          {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
          {/* <AuthRoute exact path="/" component={LandingPage} /> */}

          <AuthRoute
            path="/"
            component={() => <LandingPage formType={this.state.form} />}
          />
        </Switch>
      </div>
    );
  }

}

export default App;