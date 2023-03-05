/* eslint-disable react/display-name */
import React from 'react'
import { isFunction, isObject } from './misc';

const contextMapProps = (context={}, map={}, props={}) => {
  let result = { };
  Object.entries(map).forEach(
    ([key, value]) => {
      result[key] = context[value];
    }
  );
  Object.assign(result, props);
  return result;
}

// function to merge any properties from a context section identified by the spec
// name (i.e. context[spec]) into the runtime properties in props
const contextSpecProps = (context={}, spec=false, props={}) => {
  if (! spec) {
    return props;
  }
  let result = { };

  // if the spec is a function then we call it with the context,
  // otherwise we assume it's the name of an entry in theme context
  const input = isFunction(spec)
    ? spec(context)
    : context[spec];

  if (isObject(input)) {
    // theme props are assumed to be defaults that can be overridden
    // by component props
    Object.assign(result, input, props);
  }
  else if (isFunction(input)) {
    // conversely, a theming function is allowed to override component props
    Object.assign(result, props, input(props, context));
  }
  else {
    // a single value is added to the result props
    result[spec] = input;
    Object.assign(result, props);
  }
  return result;
}

export const Themer = (options) => {
  // the Context is a regular react context
  const Context = React.createContext(options);

  // the Provider is the wrapper that goes somewhere near the top
  // level of your app, along with custom theme properties
  const Provider = ({children, ...props}) =>
    <Context.Provider value={{ ...options, ...props }}>
      {children}
    </Context.Provider>

  // the Consumer is a HOC which wraps another component constructor and
  // mixes theme properties into the properties passed to it.
  const Consumer = Component => props =>
    <Context.Consumer>
      {context => <Component {...context} {...props} context={context}/>}
    </Context.Consumer>

  // the Component is used to wrap the implementation of a UI component
  // and has a second argument which is the name of the theme specification
  // e.g. "Button" to use the theme values for Button
  const Component = (Implementation, spec) => React.forwardRef(
    (props, ref) =>
      <Context.Consumer>
        {context => <Implementation {...contextSpecProps(context, spec, props) } ref={ref}/>}
      </Context.Consumer>
  );

  const Map = (Component, map) => props =>
    <Context.Consumer>
      {context => <Component { ...contextMapProps(context, map, props) }/>}
    </Context.Consumer>

  return { Context, Provider, Consumer, Map, Component }
}

export const Theme  = Themer();
export const Themed = Theme.Component;

export default Theme
