import { Route, Routes } from 'react-router-dom';
import { FaShoppingCart,FaBoxOpen,FaUsers} from "react-icons/fa";
import AdminProductsPage from './admin/adminProductsPage';
import AdminAddProductForm from './admin/adminAddProductForm';

export default function AdminPage() {
    return (
        <div className="w-full h-screen flex text-black ">
            <div className=" flex flex-col w-[340px] shadow-2xl h-full  p-4 gap-2 bg-secondary/20 backdrop-blur-md ">
                <div className="w-full h-[100px] flex items-center justify-center p-2   ">
                    <img
                        src="/logo.png"
                        className =" h-[150px] object-contain"
                    />
                </div>
                <h1 className="text-2xl font-bold mb-4 mt-4 px-4 py-3">Admin Dashboard</h1>
                <a href="/admin/orders" className="flex items-center gap-3 px-4 py-3 text-xl hover:bg-secondary/30 rounded-lg transition-all "><FaBoxOpen className='text-2xl' />Orders</a>
                <a href="/admin/products" className="flex items-center gap-3 px-4 py-3 text-xl hover:bg-secondary/30 rounded-lg transition-all "><FaShoppingCart className='text-2xl' />Products</a>
                <a href="/admin/users" className="flex items-center gap-3 px-4 py-3 text-xl hover:bg-secondary/30 rounded-lg transition-all "><FaUsers className='text-2xl' />Users</a>

                {/* <h1 className="text-2xl font-bold mb-4 mt-4">Using 'Link' Tags</h1>
                <link to="/admin">Admin Dashboard</link>
                <link to="/admin/orders">Orders</link>  
                <link to="/admin/products">Products</link>
                <link to="/admin/users">Users</link> */}
            </div>
            <div className="w-[calc(100%-340px)] h-full bg-primary p-2 text-xl font-bold  ">
                <Routes>
                    
                    <Route path="/orders" element={<h1>Orders Page</h1>} />
                    <Route path="/products" element={<AdminProductsPage />} />
                    <Route path="/users" element={<h1>Users Page</h1>} />
                    <Route path="/add-product" element={<AdminAddProductForm />} />

                </Routes>
            </div>
        </div>
    )
}