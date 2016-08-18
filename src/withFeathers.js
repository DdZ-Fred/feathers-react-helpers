import React, { PropTypes } from 'react';

export default function withFeathers(WrappedComponent) {
  const wrappedComponentName = WrappedComponent.displayName
    || WrappedComponent.name
    || 'Component';
  const displayName = `withFeathers(${wrappedComponentName})`;

  const contextTypes = {
    feathers: PropTypes.object,
  };

  function WithFeathers(props, context) {
    return <WrappedComponent feathers={context.feathers} {...props}/>;
  }
  WithFeathers.displayName = displayName;
  WithFeathers.contextTypes = contextTypes;
  return WithFeathers;
}
