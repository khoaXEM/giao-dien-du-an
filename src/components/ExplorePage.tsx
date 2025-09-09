"use client";
import React, { useState } from "react";
import Image from "next/image";

// ✅ Danh mục thời trang giống với Header.tsx
const categories = [
    "Tất cả",
    "Áo thun",
    "Áo khoác",
    "Quần Jean",
    "Giày Sneaker",
    "Dép",
    "Phụ kiện",
    "Mới về",
    "Đang giảm giá",
    "Hot Trend",
];

// ✅ Danh sách sản phẩm từ PixerHome
const products = [
    { title: "Quan Jean Nam Rach Goi", price: "$59.00", oldPrice: "$65.00", author: "DangKhoa", img: "/quanjean.png" },
    { title: "Ao Khoac Nam Denim", price: "$7.99", author: "DangKhoa", img: "/aokhoacdenim.png" },
    { title: "Ao Thun Nam Nu Co Tron", price: "$15.00", author: "DangKhoa", img: "/aothuncotronTBG.png" },
    { title: "Giay Sneaker MLB Nam Nu", price: "$43.00", oldPrice: "$49.00", author: "DangKhoa", img: "/giayMLB.png" },
    { title: "Ao khoac Hoodie Nam Nu", price: "$23.00", oldPrice: "$49.00", author: "DangKhoa", img: "/hoodieZip.png" },
    { title: "Dep Banh Mi", price: "$13.00", oldPrice: "$49.00", author: "DangKhoa", img: "/depbanhmi.png" },
    { title: "Giay Sneaker NiceShoes Nam Nu", price: "$13.00", oldPrice: "$49.00", author: "DangKhoa", img: "/sneakerNiceshoes.png" },
    { title: "Giay Sneaker LV trainer Nam Nu", price: "$45.00", oldPrice: "$49.00", author: "DangKhoa", img: "/trainerLV.png" },
    { title: "Giay Sneaker AF1 Canvas Navy", price: "$30.00", oldPrice: "$49.00", author: "DangKhoa", img: "/AF1CanvasNavy.png" },
];

export default function ExplorePage() {
    // ✅ State lưu danh mục đang chọn
    const [selectedCategory, setSelectedCategory] = useState("Tất cả");

    // ✅ Lọc sản phẩm theo danh mục (hiện tại chỉ hiển thị khi chọn "Tất cả")
    const filteredProducts =
        selectedCategory === "Tất cả" ? products : [];

    return (
        <div className="space-y-8">
            {/* 🔰 Banner đầu trang */}
            <Image
                src="/bannerexplore.jpg"
                alt="Khám phá thời trang"
                width={1200}
                height={300}
                className="w-full h-[300px] object-cover rounded-lg"
            />

            {/* 🎨 Khám phá theo danh mục thời trang */}
            <section>
                <h2 className="text-xl font-bold mb-4">Khám phá theo danh mục</h2>

                {/* ✅ Các nút lọc danh mục — giống style trong Header.tsx */}
                <div className="flex flex-wrap gap-3">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 text-sm rounded-md transition ${selectedCategory === category
                                ? "bg-green-500 text-white"
                                : "bg-gray-100 hover:bg-green-100 text-gray-700"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            {/* 🧾 Hiển thị danh mục đang chọn */}
            <div className="text-gray-600 text-sm">
                Đang chọn:{" "}
                <span className="font-semibold text-green-600">{selectedCategory}</span>
            </div>

            {/* 🛍️ Hiển thị sản phẩm nếu chọn "Tất cả" */}
            {filteredProducts.length > 0 && (
                <section>
                    <h2 className="text-xl font-bold mb-4">Sản phẩm nổi bật</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.map((p) => (
                            <div
                                key={p.title}
                                className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-all"
                            >
                                <Image
                                    src={p.img}
                                    alt={p.title}
                                    width={320}
                                    height={160}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-base font-semibold mb-1">{p.title}</h3>
                                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                                        <span className="text-green-500 font-bold">👤</span>
                                        <span>{p.author}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-lg font-bold text-green-600">
                                        <span>{p.price}</span>
                                        {p.oldPrice && (
                                            <span className="text-gray-400 line-through text-sm">
                                                {p.oldPrice}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}