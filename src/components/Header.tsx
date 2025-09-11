"use client";
import React, { useEffect, useState } from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";

// ✅ Khai báo kiểu props để nhận state từ component cha
type HeaderProps = {
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
};

// ✅ Danh mục thời trang
const filters = [
    "Tất cả", "Áo thun", "Áo khoác", "Quần Jean", "Giày Sneaker", "Dép", "Phụ kiện",
    "Mới về", "Đang giảm giá", "Hot Trend"
];

export default function Header({ selectedCategory, setSelectedCategory }: HeaderProps) {
    // ✅ State kiểm soát chế độ Darkmode
    const [isDark, setIsDark] = useState(true); // ✅ Mặc định là Darkmode

    // ✅ Gắn hoặc gỡ class 'dark' vào <html> khi state thay đổi
    useEffect(() => {
        const html = document.documentElement;
        if (isDark) {
            html.classList.add("dark");
        } else {
            html.classList.remove("dark");
        }
    }, [isDark]);

    return (
        <header className="mb-8 space-y-6">
            {/* 🔰 Logo + nút hành động nổi bật */}
            <div className="flex items-center justify-between">
                <div className="text-green-500 font-bold text-xl">⚡ DKhoa Shop</div>

                {/* ✅ Nhóm nút hành động: Darkmode + Đăng nhập + Giỏ hàng */}
                <div className="flex gap-3 items-center">
                    {/* 🌙 Nút icon toggle Darkmode */}
                    <button
                        onClick={() => setIsDark(!isDark)}
                        className="text-xl hover:scale-110 transition text-gray-600 dark:text-gray-300"
                        aria-label="Toggle Darkmode"
                        title="Chuyển chế độ sáng/tối"
                    >
                        🌙
                    </button>

                    {/* 🔐 Nút đăng nhập */}
                    <button className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                        <FaUser className="text-green-500" />
                        <span className="text-gray-800 dark:text-white">Đăng nhập</span>
                    </button>

                    {/* 🛒 Nút giỏ hàng */}
                    <button className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                        <FaShoppingCart className="text-green-500" />
                        <span className="text-gray-800 dark:text-white">Giỏ hàng</span>
                    </button>
                </div>
            </div>

            {/* 🔍 Thanh tìm kiếm + CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <input
                    type="text"
                    placeholder="Tìm sản phẩm..."
                    className="w-full sm:w-[300px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                />
                <button className="bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600 transition">
                    Trở thành người bán
                </button>
            </div>

            {/* 🧭 Bộ lọc danh mục */}
            <div className="flex flex-wrap gap-3">
                {filters.map((f) => (
                    <button
                        key={f}
                        onClick={() => setSelectedCategory(f)} // ✅ cập nhật danh mục khi click
                        className={`px-4 py-2 text-sm rounded-md transition ${selectedCategory === f
                            ? "bg-green-500 text-white"
                            : "bg-gray-100 hover:bg-green-100 text-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-green-700"
                            }`}
                    >
                        {f}
                    </button>
                ))}
            </div>
        </header>
    );
}