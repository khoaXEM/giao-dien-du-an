"use client";
import React, { useState } from "react";
import Image from "next/image";

// ✅ Danh mục thời trang 
const categories = [
    "Tất cả", "Áo thun", "Áo khoác", "Quần Jean", "Giày Sneaker", "Dép", "Phụ kiện",
    "Mới về", "Đang giảm giá", "Hot Trend"
];

// ✅ Danh sách sản phẩm 
const products = [
    { title: "Quần Jean Nam Rách Gối", price: "$59.00", oldPrice: "$65.00", author: "DangKhoa", img: "/quanjean.png", category: "Quần Jean" },
    { title: "Áo Khoác Nam Denim", price: "$7.99", author: "DangKhoa", img: "/aokhoacdenim.png", category: "Áo khoác" },
    { title: "Áo Thun Nam Nữ Cổ Tròn", price: "$15.00", author: "DangKhoa", img: "/aothuncotronTBG.png", category: "Áo thun" },
    { title: "Giày Sneaker MLB Nam Nữ", price: "$43.00", oldPrice: "$49.00", author: "DangKhoa", img: "/giayMLB.png", category: "Giày Sneaker" },
    { title: "Áo Khoác Hoodie Nam Nữ", price: "$23.00", oldPrice: "$49.00", author: "DangKhoa", img: "/hoodieZip.png", category: "Áo khoác" },
    { title: "Dép Bánh Mì", price: "$13.00", oldPrice: "$49.00", author: "DangKhoa", img: "/depbanhmi.png", category: "Dép" },
    { title: "Giày Sneaker NiceShoes Nam Nữ", price: "$13.00", oldPrice: "$49.00", author: "DangKhoa", img: "/sneakerNiceshoes.png", category: "Giày Sneaker" },
    { title: "Giày Sneaker LV trainer Nam Nữ", price: "$45.00", oldPrice: "$49.00", author: "DangKhoa", img: "/trainerLV.png", category: "Giày Sneaker" },
    { title: "Giày Sneaker AF1 Canvas Navy", price: "$30.00", oldPrice: "$49.00", author: "DangKhoa", img: "/AF1CanvasNavy.png", category: "Giày Sneaker" },
    { title: "Túi Đeo Chéo Start-V2 Nam Nữ", price: "$20.00", oldPrice: "$49.00", author: "DangKhoa", img: "/tuideocheoV2.png", category: "Phụ kiện" },
    { title: "Quần Jean Nam Phối Dây", price: "$20.00", oldPrice: "$49.00", author: "DangKhoa", img: "/quanjeanphoiday.png", category: "Quần Jean" },
    { title: "Áo Thun ROTS-VN Nam Nữ", price: "$25.00", oldPrice: "$49.00", author: "DangKhoa", img: "/aothunROTS-VN.png", category: "Áo thun" },
    { title: "Áo Polo Morpheus Nam Nữ", price: "$10.00", oldPrice: "$49.00", author: "DangKhoa", img: "/aopoloMorpheus.png", category: "Áo polo" },
    { title: "Quần Jean Ống Rộng Cạp Chun MR.Smile", price: "$25.00", oldPrice: "$49.00", author: "DangKhoa", img: "/quanjeanongrongMrSmile.png", category: "Quần Jean" },
    { title: "Túi Đeo Chéo Nam Nữ NY", price: "$20.00", oldPrice: "$49.00", author: "DangKhoa", img: "/tuideocheoNY.png", category: "Phụ kiện" },
    { title: "Túi Tote Đeo Chéo Nam Nữ", price: "$20.00", oldPrice: "$49.00", author: "DangKhoa", img: "/tuiToteDeoCheo.png", category: "Phụ kiện" },
    { title: "Áo Thun 1969STUDIO Nam Nữ", price: "$25.00", oldPrice: "$49.00", author: "DangKhoa", img: "/aothun1969STUDIO.png", category: "Áo thun" },
    { title: "Quần Jean Nam Thêu 8 sao", price: "$27.00", oldPrice: "$49.00", author: "DangKhoa", img: "/quanjean8sao.png", category: "Quần Jean" },
    { title: "Túi Đeo Chéo Canvas Nam Nữ W", price: "$20.00", oldPrice: "$49.00", author: "DangKhoa", img: "/tuideocheoCanvasW.png", category: "Phụ kiện" },
    { title: "Áo Hoodie Zip Tarbo.Club", price: "$22.00", oldPrice: "$49.00", author: "DangKhoa", img: "/hoodieZipTarboClub.png", category: "Áo khoác" },
];

export default function ExplorePage() {
    // ✅ State lưu danh mục đang chọn
    const [selectedCategory, setSelectedCategory] = useState("Tất cả");

    // ✅ Lọc sản phẩm theo danh mục
    const filteredProducts =
        selectedCategory === "Tất cả"
            ? products
            : products.filter((p) => p.category === selectedCategory);

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

                {/* ✅ Các nút lọc danh mục */}
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

            {/* 🛍️ Hiển thị sản phẩm đã lọc */}
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