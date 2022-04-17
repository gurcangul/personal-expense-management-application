import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from '../reducer/Reducer';

const initialState = {
  operations: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState, ()=>{
    const localData = localStorage.getItem('state')
    return localData ? JSON.parse(localData): []});

  useEffect(()=>{
    localStorage.setItem('state', JSON.stringify(state))

  },[state])
  function deleteOperation(id) {
    dispatch({
      type: 'DELETE_OPERATION',
      payload: id
    });
  }

  function addOperation(operation) {
    dispatch({
      type: 'ADD_OPERATION',
      payload: operation
    });
  }
  return (<GlobalContext.Provider value={{
    operations: state.operations,
    deleteOperation,
    addOperation
    
  }}>{children}</GlobalContext.Provider>);
}