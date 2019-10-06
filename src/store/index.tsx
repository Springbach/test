import React, { useReducer } from "react";
import { initialState, IState, Actions, reducer } from "./auth";


interface IContextProps {
  state: IState;
  //dispatch: ({type}:{type:string}) => void;
  dispatch: React.Dispatch<Actions>;
}


export const StoreCTX = React.createContext({} as IContextProps);

export function Store(props: any) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };
  return (
    <StoreCTX.Provider value={value}>{props.children}</StoreCTX.Provider>
  );
}
