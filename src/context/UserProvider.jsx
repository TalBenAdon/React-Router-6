import React, { createContext, useState } from 'react'

export const UserContext = createContext()

export default function UserProvider({ children }) {
   const [user, setUser] = useState(localStorage.user ? JSON.parse(localStorage.user) : false)
   console.log(user);
   return (
      <UserContext.Provider value={[user, setUser]}>
         {children}
      </UserContext.Provider>
   )
}
