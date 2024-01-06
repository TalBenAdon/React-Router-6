import { Route, Routes } from "react-router-dom"


import UserProvider from "./context/UserProvider"

// TODO - convert to a lazy load
import Admin from "./pages/Admin"
import Home from "./pages/Home"
import Login from "./pages/Login"

function App() {

  return (
    <UserProvider>
      {/* TODO - add suspense + Loading Page */}
      <Routes>
        {/* TODO Add MainLayout */}
        <Route>
          {/* client */}
          <Route>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
          </Route>
          {/* admin */}
          {/* TODO Add AdminLayout */}
          <Route path="admin">
            <Route index element={<Admin />} />
          </Route>
        </Route>
        {/* TODO - add 404 page */}
      </Routes>
    </UserProvider>
  )
}

export default App