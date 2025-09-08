"use client";
import React from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";

const filters = [
    "Tất cả", "Áo thun", "Áo khoác", "Quần Jean", "Giày Sneaker", "Dép", "Phụ kiện",
    "Mới về", "Đang giảm giá", "Hot Trend"
];

export default function Header() {
    return (
        <header className="mb-8 space-y-6">
            {/* 🔰 Logo + nút hành động nổi bật */}
            <div className="flex items-center justify-between">
                <div className="text-green-500 font-bold text-xl">⚡ DKhoa Shop</div>

                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-100 transition">
                        <FaUser className="text-green-500" />
                        <span>Đăng nhập</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-100 transition">
                        <FaShoppingCart className="text-green-500" />
                        <span>Giỏ hàng</span>
                    </button>
                </div>
            </div>

            {/* 🔍 Thanh tìm kiếm + CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <input
                    type="text"
                    placeholder="Tìm sản phẩm..."
                    className="w-full sm:w-[300px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
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
                        className="px-4 py-2 text-sm bg-gray-100 hover:bg-green-100 text-gray-700 rounded-md transition"
                    >
                        {f}
                    </button>
                ))}
            </div>
        </header>
    );
}