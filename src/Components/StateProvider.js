//setup data layer
//we need this to track the basket
import React from "react";
import { createContext, useContext, useReducer } from "react";

//This is the DATA LAYER
export const StateContext = createContext();

// Build  a Provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

//THe parent component of stateProvider is index.js
