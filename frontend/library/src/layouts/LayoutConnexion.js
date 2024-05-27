import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Header"

export default function LayoutConnexion(){
return(
    <>
<div className=" min-h-screen  ">
    <Outlet/>
</div>
<Footer/>
    </>
)
}