import { Link } from "react-router-dom";
import { useState, } from "react";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
    const [status, setStatus] = useState("on");

    return (
        <div className="w-full h-screen flex  bg-[url('/bg.jpg')] bg-cover bg-center  justify-center items-center">
            <div className="w-[400px] h-[650px] backdrop-blur-md rounded-lg shadow-2xl flex flex-col items-center ">
                <img src="/logo.png" className="w-[150px] h-[80px] object-cover mt-2  p-2 rounded-lg bg-secondary/30 " />
                <h1 className="text-3xl font-bold text-secondary italic  mt-4">Welcome </h1>
                <div className="w-full flex flex-col items-center mt-3 p-2 ">
                    <label className="w-full mt-4 text-lg font-semibold text-secondary p-2 ">Email</label>
                    <input type="text" placeholder="user@gmail.com" className="w-[90%] h-[40px] rounded-lg p-3 border-2 border-secondary outline-none focus:border-secondary  transition-all duration-300" />
                    <label className="w-full mt-4 text-lg font-semibold text-secondary p-2 ">Password</label>
                    <input type="password" placeholder="********" className="w-[90%] h-[40px] rounded-lg p-3 border-2 border-secondary outline-none focus:border-secondary transition-all duration-300" />
                </div>
                <button className="w-[90%] h-[40px] bg-accent/50 text-white font-bold rounded-lg mt-5 hover:bg-secondary transition-all duration-300">Log in</button>
                <p className="w-full p-5 "> <Link to="/forgot-password" className="text-black secondary font-semibold underline hover:no-underline">Forgot Password ?</Link></p>
                <p className=" text-black">Don't have an account? <Link to="/register" className="text-primary font-semibold underline ">Register</Link></p>
                <button className="w-[90%] h-[40px] bg-primary text-black font-bold rounded-lg mt-5  transition-all duration-300 flex items-center justify-center gap-2 hover:bg-gray-500 "><FcGoogle />Login with Google</button>

            </div>

        </div>
    )
}