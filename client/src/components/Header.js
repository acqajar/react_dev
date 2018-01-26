import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

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
            <Link to="/auth/google">Login with Google</Link>
            // <a href="/auth/google"> Login with Google</a>
          </li>
        );
      default:
        // 'Logged in'
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="3" style={{ margin: '0 10px' }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="2">
            <Link to="/api/logout">OurOffice</Link>
            // <a href="/api/logout"> Logout</a>
          </li>
        ];
    }
  }
  render() {
    // console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? '/surveys' : '/'} className="brand-logo">
            OurOffice
          </Link>
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
