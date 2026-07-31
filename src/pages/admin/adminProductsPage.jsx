import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AdminProductsPage() {
    return (
        <div className="w-full h-full flex flex-col ">
            <Link to="/admin/add-product" className="w-[60px] h-[60px] bg-accent/70 fixed hover:bg-accent/90 right-[35px] bottom-[35px] rounded-full flex items-center justify-center text-white ">
                <FaPlus className='text-2xl' />
            </Link>
        </div>
    )
}