import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";
import uploadMedia from "../../lib/uploadMedia";
import api from "../../lib/api";
import { CiCircleInfo } from "react-icons/ci";


export default function AdminAddProductForm() {

    const [productId, setProductId] = useState("");
    const [name, setName] = useState("");
    const [altName, setAltName] = useState("");
    const [description, setDescription] = useState("");
    const [images, setImages] = useState([]);
    const [price, setPrice] = useState("");
    const [labeledPrice, setLabeledPrice] = useState("");
    const [stock, setStock] = useState("");
    const [isAvailable, setIsAvailable] = useState(true);
    const [category, setCategory] = useState("Laptop");
    const [brand, setBrand] = useState("Apple");
    const [model, setModel] = useState("");
    const navigate = useNavigate();

    async function handleSave() {

        const token = localStorage.getItem("token");
        if (token == null) {
            toast.error("You are not logged in");
            navigate("/login");
            return;
        }

        const productData = {
            productId : productId,
            name: name,
            altName: [],
            description: description,
            images: [],
            price: price,
            labeledPrice: labeledPrice,
            stock: stock,
            isAvailable: isAvailable,
            category: category,
            brand: brand,
            model: model
        }

        try {

            const imageUploadPromises = [];


            for (let i = 0; i < images.length; i++) {
                imageUploadPromises[i] = uploadMedia(images[i]);
            }

            console.log(imageUploadPromises);

            productData.images = await Promise.all(imageUploadPromises);
            productData.altName = altName.split(",");
            const res = await api.post("/products", productData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(res);
            toast.success("Product saved successfully");

        } catch (err) {
            console.log(err);
            toast.error("Failed to save product");
        }
    }


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

                    <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                        onClick={handleSave}>Save</button>
                </div>
            </div>

            {/* Form */}
            <div className=" font-normal text-sm grid grid-cols-3 gap-4 p-4">

                {/* Product ID */}
                <div>
                    <label className=" block mb-2">Product ID</label>
                    <input type="text" value={productId} onChange={(e) => setProductId(e.target.value)} className="w-full h-8 border rounded-lg px-3" />
                </div>

                {/* Product Name */}
                <div className="col-span-2">
                    <label className=" block mb-2">Product Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full h-8 border rounded-lg px-3" />
                </div>

                {/* Alt Name */}
                <div className="col-span-3">
                    <label className=" block mb-2 flex items-center">Alternative Name <span className="ml-2 flex justify-center items-center h-full italic font font-thin"><CiCircleInfo/>(comma separated)</span></label>
                    <input value={altName} onChange={(e) => setAltName(e.target.value)} className="w-full h-8 border rounded-lg px-3" />
                </div>


                {/* Description */}
                <div className="col-span-3">
                    <label className=" block mb-2">Description</label>
                    <textarea type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full h-28 border rounded-lg p-3 resize-none"></textarea>
                </div>



                {/* Price */}
                <div>
                    <label className=" block mb-2">Price</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full h-8 border rounded-lg px-3" />
                </div>

                {/* Label Price */}
                <div>
                    <label className=" block mb-2">Label Price</label>
                    <input type="number" value={labeledPrice} onChange={(e) => setLabeledPrice(e.target.value)} className="w-full h-8 border rounded-lg px-3" />
                </div>

                {/* Stock */}
                <div>
                    <label className=" block mb-2">Stock</label>
                    <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} className="w-full h-8 border rounded-lg px-3" />
                </div>

                {/* Images */}
                <div >
                    <label className=" block mb-2">Images</label>
                    <input type="file" multiple onChange={(e) => {setImages([...e.target.files]); }} className="w-full h-8 border rounded-lg px-3" />
                </div>


                {/* Availability */}
                <div>
                    <label className=" block mb-2">Availability</label>
                    <select onChange={(e) => setIsAvailable(e.target.value)} className="w-full h-8 border rounded-lg px-3">
                        <option value={true} >Available</option>
                        <option value={false}>Not Available</option>
                    </select>
                </div>

                {/* Category */}
                <div>
                    <label className=" block mb-2">Category</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full h-8 border rounded-lg px-3">
                        <option>Laptops</option>
                        <option>Monitors</option>
                        <option>RAM Cards</option>
                        <option>VGA Cards</option>
                    </select>
                </div>

                {/* Brand */}
                <div>
                    <label className=" block mb-2">Brand</label>
                    <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} className="w-full h-8 border rounded-lg px-3" />
                </div>


                {/* Model */}
                <div>
                    <label className=" block mb-2">Model</label>
                    <input type="text" value={model} onChange={(e) => setModel(e.target.value)} className="w-full h-8 border rounded-lg px-3" />
                </div>




            </div>

        </div>
    )
}