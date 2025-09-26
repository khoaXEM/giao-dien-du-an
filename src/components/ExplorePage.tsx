"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import BannerSlider from "./BannerSlider";
import CategoryTabs from "./CategoryTabs";
import ProductCard from "./ProductCard"; // ✅ Component hiển thị sản phẩm
import ProductModal from "./ProductModal"; // ✅ Component hiển thị mô tả chi tiết
import { FaSortAmountDown } from "react-icons/fa"; // ✅ Icon sắp xếp
import { Product } from "../type"; // ✅ Import kiểu dữ liệu

// ✅ Danh sách sản phẩm
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

export default function ExplorePage() {
    // ✅ State quản lý danh mục đang chọn
    const [selectedCategory, setSelectedCategory] = useState("All");

    // ✅ State quản lý kiểu sắp xếp
    const [sortType, setSortType] = useState("newest");

    // ✅ State quản lý số lượng sản phẩm hiển thị
    const [visibleCount, setVisibleCount] = useState(6);

    // ✅ State loading giả khi bấm “Load more”
    const [isLoading, setIsLoading] = useState(false);

    // ✅ State quản lý sản phẩm đang được preview
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    // ✅ Hàm mở modal preview
    const handlePreview = (product: Product) => setSelectedProduct(product);

    // ✅ Hàm đóng modal
    const closeModal = () => setSelectedProduct(null);


    // ✅ Lọc sản phẩm theo danh mục
    const filteredProducts =
        selectedCategory === "All"
            ? products
            : products.filter((p) => p.category === selectedCategory);

    // ✅ Sắp xếp sản phẩm theo sortType
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        const priceA = parseFloat(a.price.replace("$", ""));
        const priceB = parseFloat(b.price.replace("$", ""));

        switch (sortType) {
            case "price-low":
                return priceA - priceB;
            case "price-high":
                return priceB - priceA;
            case "free-first":
                return priceA === 0 ? -1 : priceB === 0 ? 1 : priceA - priceB;
            default:
                return 0; // "newest" giữ nguyên thứ tự
        }
    });

    // ✅ Cắt danh sách theo số lượng hiển thị
    const visibleProducts = sortedProducts.slice(0, visibleCount);

    // ✅ Hàm xử lý khi bấm nút “Load more”
    const handleLoadMore = () => {
        setIsLoading(true);
        setTimeout(() => {
            setVisibleCount((prev) => prev + 6);
            setIsLoading(false);
        }, 500); // ✅ delay 0.5s
    };

    return (
        <div className="w-full px-4 space-y-8">
            {/* 🔰 Banner đầu trang */}
            <BannerSlider />

            {/* 🎨 Danh mục filter */}
            <section>
                <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                    Khám phá theo danh mục
                </h2>
                <CategoryTabs selected={selectedCategory} onSelect={setSelectedCategory} />
            </section>

            {/* 🧾 Hiển thị danh mục đang chọn */}
            <div className="text-gray-600 dark:text-gray-300 text-sm">
                Đang chọn:{" "}
                <span className="font-semibold text-green-600 dark:text-green-400">
                    {selectedCategory}
                </span>
            </div>

            {/* 🛍️ Hiển thị sản phẩm đã lọc */}
            {sortedProducts.length > 0 && (
                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                            Sản phẩm nổi bật
                        </h2>

                        {/* 🔃 Bộ lọc sắp xếp */}
                        <div className="flex items-center gap-2">
                            <FaSortAmountDown className="text-lg text-gray-600 dark:text-gray-300" />
                            <select
                                value={sortType}
                                onChange={(e) => setSortType(e.target.value)}
                                className="px-2 py-1 rounded-md border bg-white dark:bg-neutral-800 text-sm text-gray-700 dark:text-white border-gray-300 dark:border-neutral-700 focus:outline-none"
                            >
                                <option value="newest">Mới nhất</option>
                                <option value="price-low">Giá thấp → cao</option>
                                <option value="price-high">Giá cao → thấp</option>
                                <option value="free-first">Miễn phí trước</option>
                            </select>
                        </div>
                    </div>

                    {/* ✅ Grid sản phẩm hoặc skeleton */}
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
                            : visibleProducts.map((p) => (
                                <ProductCard key={p.title} product={p} onPreview={handlePreview} />

                            ))}
                    </div>

                    {/* ✅ Nút “Xem thêm” — ẩn khi đang loading hoặc đã hết sản phẩm */}
                    {visibleCount < sortedProducts.length && !isLoading && (
                        <div className="flex justify-center mt-6">
                            <button
                                onClick={handleLoadMore}
                                className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                            >
                                Load more

                            </button>
                        </div>
                    )}
                </section>
            )}

            {/* ✅ Modal mô tả chi tiết sản phẩm */}
            <ProductModal product={selectedProduct} onClose={closeModal} />

        </div>
    );
}