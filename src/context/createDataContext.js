import React, { useReducer } from 'react';

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const dispatchableActions = Object.keys(actions).reduce(
      (accActions, actionName) => {
        const actionObj = actions[actionName]();
        const action = () => dispatch(actionObj);
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
