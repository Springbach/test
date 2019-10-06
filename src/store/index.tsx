import React, { useReducer } from "react";
import { initialState, State, Actions, reducer } from "./auth";


interface ContextProps {
  state: State;
  //dispatch: ({type}:{type:string}) => void;
  dispatch: React.Dispatch<Actions>;
}


export const StoreCTX = React.createContext({} as ContextProps);

export function Store(props: any) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };
  return (
    <StoreCTX.Provider value={value}>{props.children}</StoreCTX.Provider>
  );
}
