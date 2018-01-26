import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        // 'Still deciding';
        return;
      case false:
        // logged out
        return (
          <li>
            <a href="/auth/google"> Login with Google</a>
          </li>
        );
      default:
        // 'Logged in'
        return (
          <li>
            <a href="/"> Logout with Google</a>
          </li>
        );
    }
  }
  render() {
    // console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="brand-logo">OurOffice</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

// function mapStateProps(state) {
//   return { auth: state.auth };
// }
function mapStateProps({ auth }) {
  return { auth };
}

export default connect(mapStateProps)(Header);
