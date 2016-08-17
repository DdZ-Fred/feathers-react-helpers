import React, { PropTypes, Children } from 'react';

const propTypes = {
  feathers: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
};

const childContextTypes = {
  feathers: PropTypes.object.isRequired,
};

class FeathersConnector extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.feathers = props.feathers;
  }

  getChildContext() {
    return {
      feathers: this.feathers,
    };
  }

  render() {
    return Children.only(this.props.children);
  }

}

FeathersConnector.propTypes = propTypes;
FeathersConnector.childContextTypes = childContextTypes;

export default FeathersConnector;
