"use client"; // ✅ Khai báo đây là component phía client trong Next.js

import React, { useState } from "react";
import { motion } from "framer-motion"; // ✅ Thư viện tạo hiệu ứng động khi hover/click
import Image from "next/image"; // ✅ Component tối ưu ảnh của Next.js
import { FaUser } from "react-icons/fa"; // ✅ Icon người đăng sản phẩm
import CategoryTabs from "./CategoryTabs"; // ✅ Component danh mục đã tối ưu

// ✅ Kiểu props nhận từ component cha để lọc theo danh mục
type PixerHomeProps = {
    selectedCategory: string;
};

// ✅ Danh sách sản phẩm mẫu
const products = [
    { title: "Temprador WooCommerce Landing Page Theme", price: "$59.00", oldPrice: "$65.00", author: "Imagineco", img: "/image1.png", category: "Quần Jean" },
    { title: "Shoppie UI Kit PSD Ecommerce Design Template", price: "$7.99", author: "Qubitron Solutions", img: "/image2.png", category: "Áo khoác" },
    { title: "Shippipro Rental Laravel Script", price: "$15.00", author: "Temper studios", img: "/image3.png", category: "Áo thun" },
    { title: "Bookify Rental Laravel Rental Solution", price: "$43.00", oldPrice: "$49.00", author: "Maxicon Soft Tech", img: "/image4.png", category: "Giày Sneaker" },
    { title: "Phonify Modern Phone Application", price: "$23.00", oldPrice: "$49.00", author: "Maxicon Soft Tech", img: "/image5.png", category: "Áo khoác" },
    { title: "Landity Joomla Angular Landing Template", price: "$13.00", oldPrice: "$49.00", author: "Maxicon Soft Tech", img: "/image6.png", category: "Dép" },
    { title: "Blogsy Agency Blog Theme", price: "$13.00", oldPrice: "$49.00", author: "Maxicon Soft Tech", img: "/image7.png", category: "Giày Sneaker" },
    { title: "Dashify React Shopify Dashboard Template", price: "$45.00", oldPrice: "$49.00", author: "Maxicon Soft Tech", img: "/image8.png", category: "Giày Sneaker" },
    { title: "Isomorphic React Next Joomla Template", price: "$30.00", oldPrice: "$49.00", author: "Temper studios", img: "/image8.png", category: "Giày Sneaker" },
    { title: "Phone Gapp All in One Phone App", price: "$20.00", oldPrice: "$49.00", author: "Temper studios", img: "/image9.png", category: "Phụ kiện" },
    { title: "BdB Air Accommodation WordPress Theme", price: "$20.00", oldPrice: "$49.00", author: "Temper studios", img: "/image10.png", category: "Quần Jean" },
    { title: "Charity Landing React Next Landing Page", price: "$25.00", oldPrice: "$49.00", author: "Temper studios", img: "/image11.png", category: "Áo thun" },
    { title: "Sootify Laravel Wireframe Kits", price: "$30.00", oldPrice: "$49.00", author: "BentaSoft", img: "/image12.png", category: "Áo polo" },
    { title: "Duperprops React Modern Retail Listing Template", price: "$25.00", oldPrice: "$49.00", author: "Omnico Team", img: "/image13.png", category: "Quần Jean" },
    { title: "Pappify HTML UI template kit", price: "$20.00", oldPrice: "$49.00", author: "Imagineco", img: "/image14.png", category: "Phụ kiện" },
    { title: "Polaroid React WP Multipurpose theme", price: "$20.00", oldPrice: "$49.00", author: "Omatron", img: "/image15.png", category: "Phụ kiện" },
    { title: "Superify WordPress Theme", price: "$25.00", oldPrice: "$49.00", author: "Bitronic", img: "/image16.png", category: "Áo thun" },
    { title: "Superify Super React Dashboard Template", price: "$27.00", oldPrice: "$49.00", author: "BentaSoft", img: "/image17.png", category: "Quần Jean" },
    { title: "Petronic Tailwind Bootstrap Template", price: "$20.00", oldPrice: "$49.00", author: "Omnico Team", img: "/image18.png", category: "Phụ kiện" },
    { title: "Listiffy WordPress Retail Joomla Theme", price: "$22.00", oldPrice: "$49.00", author: "Imagineco", img: "/image19.png", category: "Áo khoác" },
    { title: "Cartelo WordPress Woocommerce Theme", price: "$30.00", oldPrice: "$49.00", author: "Omatron", img: "/image20.png", category: "Áo khoác" },
    { title: "Cilantro Grocery Blog Theme", price: "$19.00", oldPrice: "$49.00", author: "Bitronic", img: "/image21.png", category: "Áo thun" },
    { title: "Simplextic Simple Dashboard Template", price: "$18.00", oldPrice: "$49.00", author: "Bitronic", img: "/image22.png", category: "Áo thun" },
    { title: "Sailor UI Theme 3D Lanfing Design with Figma and XD", price: "$18.00", oldPrice: "$49.00", author: "Qubitron Solutions", img: "/image23.png", category: "Áo thun" },
    { title: "Multipurpose App Design Figma UI Library", price: "$20.00", oldPrice: "$49.00", author: "Qubitron Solutions", img: "/image24.png", category: "Áo khoác" },
    { title: "Edutonic Multipurporse Education Theme With Elementor", price: "$30.00", oldPrice: "$49.00", author: "Qubitron Solutions", img: "/image25.png", category: "Áo khoác" },
    { title: "Businessify HTML Ecommerce Magazine Template", price: "$36.00", oldPrice: "$49.00", author: "Qubitron Solutions", img: "/image26.png", category: "Phụ kiện" },
    { title: "COvify Bootstrap CMS Template", price: "$27.00", oldPrice: "$49.00", author: "BentaSoft", img: "/image4.png", category: "Quần Jean" },
];

// ✅ Component chính hiển thị sản phẩm
export default function PixerHome({ selectedCategory }: PixerHomeProps) {
    const [visibleCount, setVisibleCount] = useState(6); // ✅ Số lượng sản phẩm hiển thị ban đầu
    const [isLoading, setIsLoading] = useState(false);   // ✅ Trạng thái loading giả

    // ✅ Lọc sản phẩm theo danh mục được chọn
    const filteredProducts =
        selectedCategory === "All"
            ? products
            : products.filter((product) => product.category === selectedCategory);

    // ✅ Cắt danh sách theo số lượng hiển thị
    const visibleProducts = filteredProducts.slice(0, visibleCount);

    // ✅ Hàm xử lý khi bấm nút “Xem thêm”
    const handleLoadMore = () => {
        setIsLoading(true);
        setTimeout(() => {
            setVisibleCount((prev) => prev + 6);
            setIsLoading(false);
        }, 1500); // ✅ delay 1.5s
    };

    return (
        <div className="w-full px-4 space-y-8">
            {/* ✅ Tiêu đề trang, có hỗ trợ màu chữ cho Darkmode */}
            <h1 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
                Sản phẩm shop tui
            </h1>

            {/* ✅ Grid hiển thị sản phẩm theo hàng/cột, responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {isLoading
                    ? Array.from({ length: 6 }).map((_, i) => (
                        <div
                            key={i}
                            className="border rounded-lg bg-gray-100 dark:bg-neutral-800 p-4 animate-pulse"
                        >
                            <div className="h-48 bg-gray-300 dark:bg-neutral-700 rounded mb-4" />
                            <div className="space-y-2">
                                <div className="h-4 bg-gray-300 dark:bg-neutral-700 rounded w-3/4" />
                                <div className="h-3 bg-gray-300 dark:bg-neutral-700 rounded w-1/2" />
                                <div className="h-4 bg-gray-300 dark:bg-neutral-700 rounded w-1/3" />
                            </div>
                        </div>
                    ))
                    : visibleProducts.map((product, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="border rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all cursor-pointer"
                            style={{ perspective: 1000 }}
                            whileHover={{
                                scale: 1.03,
                                y: -4,
                                boxShadow: "0 12px 24px rgba(34,197,94,0.2)",
                                borderColor: "#22c55e",
                            }}
                            whileTap={{ scale: 0.98 }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 20,
                            }}
                        >
                            {/* ✅ Ảnh sản phẩm, dùng Next/Image để tối ưu */}
                            <Image
                                src={product.img || "/placeholder.jpg"}
                                alt={product.title}
                                width={320}
                                height={160}
                                className="w-full h-48 object-cover"
                            />

                            {/* ✅ Nội dung sản phẩm */}
                            <div className="p-4 text-gray-800 dark:text-gray-100">
                                {/* ✅ Tên sản phẩm */}
                                <h2 className="text-base font-semibold mb-1">
                                    {product.title}
                                </h2>

                                {/* ✅ Tác giả sản phẩm */}
                                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-300 text-sm mb-2">
                                    <FaUser className="text-green-500 dark:text-green-400" />
                                    <span>{product.author}</span>
                                </div>

                                {/* ✅ Giá sản phẩm */}
                                <div className="flex items-center gap-2 text-lg font-bold text-green-600 dark:text-green-400">
                                    <span>{product.price}</span>

                                    {/* ✅ Giá gạch ngang nếu có */}
                                    {product.oldPrice && (
                                        <span className="text-gray-400 dark:text-gray-500 line-through text-sm">
                                            {product.oldPrice}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
            </div>

            {/* ✅ Nút “Xem thêm” — ẩn khi đang loading hoặc đã hết sản phẩm */}
            {visibleCount < filteredProducts.length && !isLoading && (
                <div className="flex justify-center mt-6">
                    <button
                        onClick={handleLoadMore}
                        className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                    >
                        Xem thêm
                    </button>
                </div>
            )}
        </div>
    );
}