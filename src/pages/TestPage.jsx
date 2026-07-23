import {useState} from "react";
import { toast } from "react-hot-toast";

export default function TestPage() {
    const [status, setStatus] = useState("on");
    const [loading, setLoading] = useState(false);

    return (
        <div className="w-full h-screen flex items-center justify-center flex-col " >
            <h1 className="text-3xl font-bold text-center w-full" >{status}</h1>
            <div className="w-75 h-[50px] flex justify-center items-center gap-2 " >
                <button onClick={
                    ()=>{
                        setStatus("on");
                        setLoading(true);
                        toast.success("Turned On");
                    }
                } className="p-2 text-white bg-green-600">Turn On</button>
                <button onClick={()=>{
                        setStatus("off");
                        setLoading(false);
                        toast.success("Turned Off");
                    }} className="p-2 text-white bg-red-600">Turn Off</button>
                <button onClick={()=>{
                        setStatus(status === "on" ? "off" : "on");
                    }} className="p-2 text-white bg-blue-600">Toggle</button>

                    
            </div>
            {loading && <h1 className="text-2xl font-bold">Loading...</h1> }
        </div>
    )
}


// export default function TestPage() {
//     return (
//         <div className="w-full h-full" >
//             <div className="w-[280px] h-[280px] bg-amber-200 pt-[4px] pl-[10px] m-7 ">
//                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam nam ipsum cupiditate! Possimus repudiandae eius tempore facere consectetur nihil aspernatur ipsum, aut esse reprehenderit natus eaque, dolor beatae, assumenda minus maiores. Voluptates sit alias, similique obcaecati rem soluta provident fugiat itaque suscipit.
//             </div>
//             <div className="w-[280px] h-[280px] bg-amber-200 pt-[4px] pl-[10px] m-7">
//                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam nam ipsum cupiditate! Possimus repudiandae eius tempore facere consectetur nihil aspernatur ipsum, aut esse reprehenderit natus eaque, dolor beatae, assumenda minus maiores. Voluptates sit alias, similique obcaecati rem soluta provident fugiat itaque suscipit.
//             </div>
            
//         </div>
//     )
// }


//Alignments and positioning in CSS.

// export default function TestPage(){
//     return(
//     <div className="w-full h-full" >
//       <div className="flex flex-row justify-center items-center relative gap-2 w-[600px] h-[600px] bg-yellow-300" >
//         <div className=" w-[100px] h-[100px] bg-red-500" >
//         </div>
//         <div className="fixed right-10 bottom-10 w-[100px] h-[100px] bg-green-500" >
//         </div>
//         <div className="absolute right-10 top-10 w-[100px] h-[100px] bg-blue-500" >
//         </div>
//         <div className="w-[100px] h-[100px] bg-white" >
//         </div>
//         <div className="w-[100px] h-[100px] bg-black" >
//         </div>
//       </div>
//     </div>
//     )
// }