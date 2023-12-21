import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Main = () => {
    return (
        <div className="flex flex-col min-h-screen h-auto max-w-[1280px] mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
            
        </div>
    );
};

export default Main;