
import api from "../lib/api";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    function handleRegister() {

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }


        api.post("/users/register",
            {
                email: email,
                firstName: firstName,
                lastName: lastName,
                password: password
            })
            .then((res) => {

                toast.success("Register Successful");

                //browse store
                localStorage.setItem("token", res.data.token);

                if (res.data.isAdmin) {
                    navigate("/admin");
                } else {
                    navigate("/")
                }


            }).catch((err) => {
                console.log(err);
                toast.error("Register Failed");
            });
    }



    return (
        <div className="w-full h-screen flex  bg-[url('/bg.jpg')] bg-cover bg-center  justify-center items-center ">
            <div className="w-[400px] h-[700px]  backdrop-blur-md rounded-lg shadow-2xl flex flex-col items-center ">
                <img src="/logo.png" className="w-[150px] h-[80px] object-cover mt-2  p-2 rounded-lg bg-secondary/30 " />
                <h1 className="text-3xl font-bold text-secondary italic  mt-2">Get Started  </h1>

                <label className="w-full mt-4 text-lg font-semibold text-black p-2 ">Email</label>
                <input
                    value={email}
                    onChange={
                        (e) => setEmail(e.target.value)}

                    type="text" placeholder="user@gmail.com" className="w-[90%] h-[40px] rounded-lg p-3 border-2 border-secondary outline-none focus:border-secondary  transition-all duration-300" />
                <div className="w-[90%] flex flex-row gap-4 mt-4">

                    <div className="w-1/2 flex flex-col gap-1">
                        <label className="text-sm font-semibold text-black">
                            First Name
                        </label>

                        <input
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            type="text"
                            placeholder="John"
                            className="w-full h-[40px] rounded-lg px-3 border-2 border-secondary outline-none focus:border-primary transition-all duration-300"
                        />
                    </div>

                    <div className="w-1/2 flex flex-col gap-1">
                        <label className="text-sm font-semibold text-black">
                            Last Name
                        </label>

                        <input
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            type="text"
                            placeholder="Doe"
                            className="w-full h-[40px] rounded-lg px-3 border-2 border-secondary outline-none focus:border-primary transition-all duration-300"
                        />
                    </div>

                </div>


                <label className="w-full mt-4 text-lg font-semibold text-black p-2 ">Password</label>
                <input
                    value={password}
                    onChange={
                        (e) => setPassword(e.target.value)}

                    type="password" placeholder="********" className="w-[90%] h-[40px] rounded-lg p-3 border-2 border-secondary outline-none focus:border-secondary transition-all duration-300" />
                <label className="w-full mt--4 text-lg font-semibold text-black p-2 ">Confirm Password</label>
                <input
                    value={confirmPassword}
                    onChange={
                        (e) => setConfirmPassword(e.target.value)}
                    type="password" placeholder="********" className="w-[90%] h-[40px] rounded-lg p-3 border-2 border-secondary outline-none focus:border-secondary transition-all duration-300" />

                <button onClick={handleRegister} className="w-[90%] h-[40px] bg-accent/50 text-white font-bold rounded-lg mt-5 hover:bg-secondary transition-all duration-300">Register</button>
                <p className=" text-black mt-2">Already have an account? <Link to="/login" className=" mt-2 text-primary font-semibold underline ">Login</Link></p>

                <button onClick={handleRegister} className="w-[90%] h-[40px] bg-primary text-black font-bold rounded-lg mt-4  transition-all duration-300 flex items-center justify-center gap-2 hover:bg-gray-500 "><FcGoogle />Register with Google</button>





            </div>

        </div>
    )
}