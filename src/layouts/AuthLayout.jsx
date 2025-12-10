import { Outlet } from "react-router"
import Navbar from "../pages/Shared/Navbar"

function AuthLayout() {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}

export default AuthLayout