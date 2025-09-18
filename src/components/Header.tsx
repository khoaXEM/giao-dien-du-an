"use client";
import React, { useRef, useState, useEffect } from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

type HeaderProps = {
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
    isDark: boolean;
    setIsDark: (value: boolean) => void;
};

// ✅ Danh sách bộ lọc danh mục
const filters = [
    "All", "Free", "PHP Script", "HTML", "React", "WordPress Plugin", "WordPress Theme",
    "Angular", "CMS", "Wireframe Kits", "UI templates", "Illustrations", "Icon Sets",
    "Mobile App", "3D Assets", "Bootstrap", "Joomla", "Shoppify"
];

export default function Header({
    selectedCategory,
    setSelectedCategory,
    isDark,
    setIsDark,
}: HeaderProps) {
    const scrollRef = useRef<HTMLDivElement>(null); // ✅ Ref để điều khiển scroll ngang
    const [showLeftArrow, setShowLeftArrow] = useState(false); // ✅ Kiểm soát nút quay lại

    // ✅ Theo dõi scroll để cập nhật trạng thái nút trái
    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const handleScroll = () => {
            setShowLeftArrow(el.scrollLeft > 0);
        };

        el.addEventListener("scroll", handleScroll);
        return () => el.removeEventListener("scroll", handleScroll);
    }, []);

    // ✅ Cuộn trái
    const scrollLeft = () => {
        scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
    };

    // ✅ Cuộn phải
    const scrollRight = () => {
        scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
    };

    return (
        <header className="w-full px-6 py-4 space-y-6 border-b border-neutral-700 bg-white dark:bg-neutral-900 text-black dark:text-neutral-100">
            {/* 🔰 Logo + nhóm nút hành động */}
            <div className="flex items-center justify-between">
                {/* ✅ Logo nâng cấp giống Pixer */}
                <div className="flex items-center gap-2 text-green-500 font-bold text-xl tracking-wide">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 2L3 14h9v8l10-12h-9V2z" />
                    </svg>
                    Pixer
                </div>

                {/* ✅ Nhóm icon + nút theo đúng thứ tự Pixer */}
                <div className="flex items-center gap-4">
                    {/* 🔍 Icon tìm kiếm */}
                    <FiSearch
                        className="text-xl text-gray-600 dark:text-gray-300 cursor-pointer hover:text-green-500 transition"
                        title="Tìm kiếm"
                    />

                    {/* 🌙 Icon chuyển darkmode */}
                    <button
                        onClick={() => setIsDark(!isDark)}
                        className="text-xl hover:scale-110 transition bg-white dark:bg-transparent text-gray-600 dark:text-gray-400 rounded-full p-1"
                        aria-label="Toggle Darkmode"
                        title="Chuyển chế độ sáng/tối"
                    >
                        {isDark ? "☀️" : "🌙"}
                    </button>

                    {/* 🧩 Icon dashboard/menu */}
                    <svg
                        className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-green-500 cursor-pointer transition"
                        viewBox="0 0 24 24"
                        fill="currentColor"

                    >
                        <rect x="3" y="3" width="18" height="6" rx="1" />
                        <rect x="3" y="13" width="8" height="8" rx="1" />
                        <rect x="13" y="13" width="8" height="8" rx="1" />
                    </svg>


                    {/* 🛍️ Giỏ hàng có badge */}
                    <div className="relative cursor-pointer">
                        <FaShoppingCart
                            className="text-xl text-gray-600 dark:text-gray-300 hover:text-green-500 transition"
                            title="Giỏ hàng"
                        />

                    </div>

                    {/* ✅ CTA: Trở thành người bán — GIỮ NGUYÊN */}
                    <button className="bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600 transition">
                        Become a Seller
                    </button>

                    {/* 👤 Icon tài khoản người dùng */}
                    <FaUser
                        className="text-xl text-gray-600 dark:text-gray-300 hover:text-green-500 cursor-pointer transition"
                        title="Tài khoản"
                    />
                </div>
            </div>

            {/* 🧭 Bộ lọc danh mục scroll ngang + nút quay lại và đi tới */}
            <div className="flex items-center gap-2">
                {/* ◀ Nút cuộn trái — chỉ hiện khi đã cuộn */}
                {showLeftArrow && (
                    <button
                        onClick={scrollLeft}
                        className="px-3 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition"
                        title="Quay lại"
                    >
                        &lt;
                    </button>
                )}

                {/* 🔰 Danh mục cuộn ngang */}
                <div
                    ref={scrollRef}
                    className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
                >
                    {filters.map((f) => (
                        <button
                            key={f}
                            onClick={() => setSelectedCategory(f)}
                            className={`px-4 py-2 text-sm rounded-md transition whitespace-nowrap
                ${selectedCategory === f
                                    ? "bg-green-500 text-white shadow-md scale-[1.05]"
                                    : "bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-neutral-100 hover:bg-green-100 dark:hover:bg-green-600"
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                {/* ▶ Nút cuộn phải — luôn hiện */}
                <button
                    onClick={scrollRight}
                    className="px-3 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition"
                    title="Xem thêm"
                >
                    &gt;
                </button>
            </div>
        </header>
    );
}