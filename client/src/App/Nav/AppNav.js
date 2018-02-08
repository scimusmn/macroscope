import React from 'react';
import {
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
} from 'reactstrap';

class AppNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar light expand="md">
          <NavbarBrand href="/">Macroscope</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>

            {/* Left navigation */}
            <Nav className="mr-auto" navbar>
              {/* Anonymous user navigation */}
              <NavItem>
                <NavLink className="nav-link" href="/start">Start</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" href="/admin">Admin</NavLink>
              </NavItem>
            </Nav>

          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default AppNav;
