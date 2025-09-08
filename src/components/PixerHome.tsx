"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaUser } from "react-icons/fa";

const products = [
    {
        title: "Quan Jean Nam Rach Goi",
        price: "$59.00",
        oldPrice: "$65.00",
        author: "DangKhoa",
        img: "/quanjean.png",
    },
    {
        title: "Ao Khoac Nam Denim",
        price: "$7.99",
        author: "DangKhoa",
        img: "/aokhoacdenim.png",
    },
    {
        title: "Ao Thun Nam Nu Co Tron",
        price: "$15.00",
        author: "DangKhoa",
        img: "/aothuncotronTBG.png",
    },
    {
        title: "Giay Sneaker MLB Nam Nu",
        price: "$43.00",
        oldPrice: "$49.00",
        author: "DangKhoa",
        img: "/giayMLB.png",
    },
    {
        title: "Ao khoac Hoodie Nam Nu",
        price: "$23.00",
        oldPrice: "$49.00",
        author: "DangKhoa",
        img: "/hoodieZip.png",
    },
    {
        title: "Dep Banh Mi",
        price: "$13.00",
        oldPrice: "$49.00",
        author: "DangKhoa",
        img: "/depbanhmi.png",
    },
    {
        title: "Giay Sneaker NiceShoes Nam Nu",
        price: "$13.00",
        oldPrice: "$49.00",
        author: "DangKhoa",
        img: "/sneakerNiceshoes.png",
    },
    {
        title: "Giay Sneaker LV trainer Nam Nu",
        price: "$45.00",
        oldPrice: "$49.00",
        author: "DangKhoa",
        img: "/trainerLV.png",
    },
    {
        title: "Giay Sneaker AF1 Canvas Navy",
        price: "$30.00",
        oldPrice: "$49.00",
        author: "DangKhoa",
        img: "/AF1CanvasNavy.png",
    },
];

export default function PixerHome() {
    return (
        <div className="main-content">
            <h1 className="text-2xl font-bold mb-8">Pixer Products</h1>

            {/* Grid hiển thị sản phẩm */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, idx) => (
                    <motion.div
                        key={idx}
                        className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-all"
                        whileHover={{
                            scale: 1.03,
                            boxShadow: "0 4px 16px rgba(34,197,94,0.12)",
                            borderColor: "#22c55e",
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Image
                            src={product.img}
                            alt={product.title}
                            width={320}
                            height={160}
                            className="w-full h-48 object-cover"
                        />

                        <div className="p-4">
                            <h2 className="text-base font-semibold mb-1">{product.title}</h2>

                            <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                                <FaUser className="text-green-500" />
                                <span>{product.author}</span>
                            </div>

                            <div className="flex items-center gap-2 text-lg font-bold text-green-600">
                                <span>{product.price}</span>
                                {product.oldPrice && (
                                    <span className="text-gray-400 line-through text-sm">
                                        {product.oldPrice}
                                    </span>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}