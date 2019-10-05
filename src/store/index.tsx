import React from 'react'
import { Auth } from './auth'

const providers = [<Auth.Provider />]

const Store = (props: any) =>
  providers.reduce((children, parent) => React.cloneElement(parent, { children }), props.children)

export { Store, Auth }
