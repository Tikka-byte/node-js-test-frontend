import { Route, Routes } from 'react-router-dom';

export default function AdminPage() {
    return (
        <div className="w-full h-screen flex  ">
            <div className=" flex flex-col w-[360px] h-full bg-amber-200 text-black p-4 gap-2">
                <h1 className="text-2xl font-bold mb-4">Using 'a' Tags</h1>
                <a href="/admin">Admin Dashboard</a>
                <a href="/admin/orders">Orders</a>  
                <a href="/admin/products">Products</a>
                <a href="/admin/users">Users</a>

                {/* <h1 className="text-2xl font-bold mb-4 mt-4">Using 'Link' Tags</h1>
                <link to="/admin">Admin Dashboard</link>
                <link to="/admin/orders">Orders</link>  
                <link to="/admin/products">Products</link>
                <link to="/admin/users">Users</link> */}
            </div>
            <div className="w-[calc(100%-360px)] h-full bg-red-100">
                <Routes>
                    <Route path="/" element={<h1>Admin Dashboard</h1>} />
                    <Route path="/orders" element={<h1>Orders Page</h1>} />
                    <Route path="/products" element={<h1>Products Page</h1>} />
                    <Route path="/users" element={<h1>Users Page</h1>} />
                </Routes>
            </div>
        </div>
    )
}