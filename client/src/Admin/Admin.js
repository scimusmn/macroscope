import React from 'react';
import { Button, Row, Col } from 'reactstrap';
import Mousetrap from 'mousetrap';

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.handleStartClick = this.handleStartClick.bind(this);
  }

  componentDidMount() {
    Mousetrap.bind('s', () => {
      console.log('Pressing S');
      this.props.handleClick();
    });
  }

  handleStartClick(message) {
    this.props.handleClick(message);
  }

  render() {
    return (
      <div>
        <h1>Admin screen</h1>
        <Row>
          <Col>
            <Button
              color="primary"
              onClick={() => this.handleStartClick('sendMessage')}
            >
              Send message
            </Button>
          </Col>
          <Col>
            <Button
              color="info"
              onClick={() => this.handleStartClick('runSelected')}
            >
              Select run
            </Button>
          </Col>
          <Col>
            <Button
              color="success"
              onClick={() => this.handleStartClick('raceInitiated')}
            >
              Start race
            </Button>
          </Col>
          <Col>
            <Button
              color='danger'
              onClick={() => this.handleStartClick('raceCompleted')}
            >
              Cross finish line
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

Admin.propTypes = {};
Admin.defaultProps = {};

export default Admin;
