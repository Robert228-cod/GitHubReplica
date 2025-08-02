import { useState } from 'react'
import { UserContext } from './UserContext'

export const UserProvider = ({children, dataUser, dataRepo}) => {

  return (
    <UserContext.Provider value={{dataUser, dataRepo}}>
        {children}
    </UserContext.Provider>
  )
}
