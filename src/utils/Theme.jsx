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

const contextSpecProps = (context={}, spec=false, props={}) => {
  if (! spec) {
    return props;
  }
  let result = { };
  const input = isFunction(spec)
    ? spec(context)
    : context[spec];

  if (isObject(input)) {
    Object.assign(result, input);
  }
  else {
    result[spec] = input;
  }
  Object.assign(result, props);
  return result;
}

export const Themer = (options) => {
  const Context = React.createContext(options);

  const Provider = ({children, ...props}) =>
    <Context.Provider value={{ ...options, ...props }}>
      {children}
    </Context.Provider>

  const Consumer = Component => props =>
    <Context.Consumer>
      {context => <Component {...context} {...props} context={context}/>}
    </Context.Consumer>

  const Component = (Implementation, spec) => props =>
    <Context.Consumer>
      {context => <Implementation {...contextSpecProps(context, spec, props) }/>}
    </Context.Consumer>

  const Map = (Component, map) => props =>
    <Context.Consumer>
      {context => <Component { ...contextMapProps(context, map, props) }/>}
    </Context.Consumer>

  return { Context, Provider, Consumer, Map, Component }
}

export const Theme  = Themer();
export const Themed = Theme.Component;

export default Theme
