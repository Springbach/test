import React from 'react'

// Context
const State: React.Context<{}> = React.createContext({})
const Dispatch: React.Context<{}> = React.createContext({})

// Reducer
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        auth: !state.auth,
      }
    default:
      return state
  }
}

// Provider
const Provider: any = (props: any) => {
  const [state, dispatch] = React.useReducer(reducer, { auth: false })

  return (
    <State.Provider value={state}>
      <Dispatch.Provider value={dispatch}>{props.children}</Dispatch.Provider>
    </State.Provider>
  )
}

// Export
export const Auth = {
  State,
  Dispatch,
  Provider,
}
