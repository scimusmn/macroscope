/**
 * Mutation container for editing a profile
 */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import SEND_MESSAGE from './graphql/SendMessage.graphql';
import Admin from './Admin';

class AdminContainer extends React.Component {
  /**
   * Pass form values to the mutation query and go to the profile view
   */
  mutationSendMessage = (type) => {
    console.log(type);
    console.log('----^ ^ ^ ^ ^ type ^ ^ ^ ^ ^----');
    this.props.mutate({
      variables: {
        type: 'run-selected',
        timestamp: new Date().toISOString(),
      },
    });
  };

  render() {
    return (
      <Admin
        handleClick={this.mutationSendMessage}
      />
    );
  }
}

AdminContainer.propTypes = {
  mutate: PropTypes.func.isRequired,
};

const AdminSendMessageMutationContainer = graphql(SEND_MESSAGE)(AdminContainer);

export default AdminSendMessageMutationContainer;
