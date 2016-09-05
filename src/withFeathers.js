import React, { PropTypes } from 'react';

export default function withFeathers(mapServiceToProps) {
  return function wrapInWithFeathers(WrappedComponent) {
    const wrappedComponentName = WrappedComponent.displayName
    || WrappedComponent.name
    || 'Component';
    const displayName = `withFeathers(${wrappedComponentName})`;

    const contextTypes = {
      feathers: PropTypes.object,
    };

    function WithFeathers(props, context) {
      const serviceNameSuffix = 'Service';
      const feathersServices = {};

      if (mapServiceToProps) {
        if (Array.isArray(mapServiceToProps)) {
          if (mapServiceToProps.length) {
            for (const serviceName of mapServiceToProps) {
              Object.defineProperty(feathersServices, `${serviceName}${serviceNameSuffix}`, {
                value: context.feathers.service(serviceName),
                enumerable: true,
              });
            }
          } else {
            throw new Error('mapServiceToProps is empty and consequently useless.');
          }
        } else {
          throw new Error(`mapServiceToProps should be an Array of service names but
            an ${typeof mapServiceToProps} is found instead`);
        }
      }

      return <WrappedComponent feathers={context.feathers} {...props} {...feathersServices}/>;
    }
    WithFeathers.displayName = displayName;
    WithFeathers.contextTypes = contextTypes;
    return WithFeathers;
  };
}
