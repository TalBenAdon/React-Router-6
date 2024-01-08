import { Route, Routes } from "react-router-dom"

import UserProvider from "./context/UserProvider"


import { Suspense, lazy } from "react"
const Admin = lazy(() => import('./pages/Admin'))
const Home = lazy(() => import("./pages/Home"))
const Login = lazy(() => import("./pages/Login"))
const Logout = lazy(() => import("./pages/Logout"))
import MainLayout from "./components/layout/MainLayout"
import AdminLayout from "./components/layout/AdminLayout"

function App() {


  return (
    <UserProvider>

      <Suspense fallback={<h1>Loading...</h1>}>

        <Routes>

          <Route element={<MainLayout />}>
            {/* client */}
            <Route>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="logout" element={<Logout />} />
            </Route>
            {/* admin */}

            <Route element={<AdminLayout />}>
              <Route path="admin">
                <Route index element={<Admin />} />
              </Route>
            </Route>

          </Route>
          {/* TODO - add 404 page */}
        </Routes>
      </Suspense>
    </UserProvider>
  )
}

export default App