import React, { useReducer } from 'react';

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const dispatchableActions = Object.entries(actions).reduce(
      (accActions, [actionName, actionFunc]) => {
        const action = (...args) => dispatch(actionFunc(...args));
        return { ...accActions, [actionName]: action };
      }, {},
    );

    return (
      <Context.Provider value={{ state, ...dispatchableActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
