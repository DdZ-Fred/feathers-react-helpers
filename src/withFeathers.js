import React, { PropTypes } from 'react';

function withFeathers(WrappedComponent) {
  const contextTypes = {
    feathers: PropTypes.object,
  };

  class FeathersContainer extends React.Component {

    render() {
      return <WrappedComponent feathers={this.context.feathers} {...this.props}/>;
    }
  }
  FeathersContainer.contextTypes = contextTypes;
  return FeathersContainer;
}

export default withFeathers;
