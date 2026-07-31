import { Link } from "react-router-dom";
import { useState } from "react";

export default function AdminAddProductForm() {

    const [productId, setProductId] = useState("");
    const [name, setName] = useState("");
    const [altName, setAltName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState([]);
    const [price, setPrice] = useState("");
    const [labeledPrice, setLabeledPrice] = useState("");
    const [stock, setStock] = useState("");
    const [isAvailable, setIsAvailable] = useState(true);
    const [category, setCategory] = useState("Laptop");
    const [brand, setBrand] = useState("Apple");
    const [model, setModel] = useState("");

    return (
        <div className="w-full h-full p-3 bg-amber-20 rounded-lg overflow-y-auto transition">

    {/* Header */}
    <div className="w-full h-16 bg-secondary/30 rounded-lg px-6 flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Add Product</h1>

        <div className="flex gap-3">
            <Link
                to="/admin/products"
                className="px-5 py-2 rounded-lg bg-gray-500 text-white hover:bg-gray-600 transition"
            >
                Cancel
            </Link>

            <button
                className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
                Save
            </button>
        </div>
    </div>

    {/* Form */}
    <div className="grid grid-cols-3 gap-3">

        {/* Product ID */}
        <div>
            <label className="font-semibold block mb-2">Product ID</label>
            <input value={productId} onChange={(e) => setProductId(e.target.value)} className="w-full h-11 border rounded-lg px-3" />
        </div>

        {/* Product Name */}
        <div className="col-span-2">
            <label className="font-semibold block mb-2">Product Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className="w-full h-11 border rounded-lg px-3" />
        </div>

        {/* Alt Name */}
        <div className="col-span-3">
            <label className="font-semibold block mb-2">Alternative Name</label>
            <input value={altName} onChange={(e) => setAltName(e.target.value)} className="w-full h-11 border rounded-lg px-3" />
        </div>

        {/* Description */}
        <div className="col-span-3">
            <label className="font-semibold block mb-2">Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full h-28 border rounded-lg p-3 resize-none"></textarea>
        </div>

        {/* Price */}
        <div>
            <label className="font-semibold block mb-2">Price</label>
            <input value={price} onChange={(e) => setPrice(e.target.value)} className="w-full h-11 border rounded-lg px-3" />
        </div>

        {/* Label Price */}
        <div>
            <label className="font-semibold block mb-2">Label Price</label>
            <input value={labeledPrice} onChange={(e) => setLabeledPrice(e.target.value)} className="w-full h-11 border rounded-lg px-3" />
        </div>

        {/* Stock */}
        <div>
            <label className="font-semibold block mb-2">Stock</label>
            <input value={stock} onChange={(e) => setStock(e.target.value)} className="w-full h-11 border rounded-lg px-3" />
        </div>

        {/* Availability */}
        <div>
            <label className="font-semibold block mb-2">Availability</label>
            <select value={isAvailable} onChange={(e) => setIsAvailable(e.target.value === "Available")} className="w-full h-11 border rounded-lg px-3">
                <option>Available</option>
                <option>Not Available</option>
            </select>
        </div>

        {/* Category */}
        <div>
            <label className="font-semibold block mb-2">Category</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full h-11 border rounded-lg px-3">
                <option>Laptops</option>
                <option>Monitors</option>
                <option>RAM Cards</option>
                <option>VGA Cards</option>
            </select>
        </div>

        {/* Brand */}
        <div>
            <label className="font-semibold block mb-2">Brand</label>
            <select value={brand} onChange={(e) => setBrand(e.target.value)} className="w-full h-11 border rounded-lg px-3">
                <option>Apple</option>
                <option>Samsung</option>
                <option>Sony</option>
                <option>LG</option>
            </select>
        </div>

        {/* Model */}
        <div>
            <label className="font-semibold block mb-2">Model</label>
            <input value={model} onChange={(e) => setModel(e.target.value)} className="w-full h-11 border rounded-lg px-3" />
        </div>

    </div>

</div>
    )
}