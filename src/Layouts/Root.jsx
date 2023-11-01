import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="mx-auto max-w-6xl font-poppins font-bold">
           <Outlet></Outlet> 
        </div>
    );
};

export default Root;