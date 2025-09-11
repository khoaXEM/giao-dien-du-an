"use client";
import React, { useState } from "react";
import Link from "next/link";

// ✅ Danh sách menu sidebar với icon và đường dẫn
const menu = [
    { icon: "🏠", label: "Trang chủ", href: "/" },
    { icon: "🔍", label: "Khám phá", href: "/explore" },
    { icon: "📦", label: "Phổ biến", href: "/popular" },
    { icon: "👑", label: "Tác giả hàng đầu", href: "/top-authors" },
    { icon: "📰", label: "Tin tức", href: "/news" },
    { icon: "✉️", label: "Liên hệ", href: "/contact" },
    { icon: "🛒", label: "Trở thành người bán", href: "/seller" },
    { icon: "⚙️", label: "Cài đặt", href: "/settings" },
    { icon: "❓", label: "Trợ giúp", href: "/help" },
];

export default function Sidebar() {
    // ✅ State để xác định mục nào đang được chọn
    const [active, setActive] = useState("Trang chủ");

    return (
        // ✅ Sidebar cố định bên trái, hỗ trợ Light + Dark mode
        <aside
            className="fixed top-0 left-0 h-screen w-[240px] 
                 bg-white dark:bg-gray-800 
                 border-r border-gray-200 dark:border-gray-700 
                 z-[1000] flex flex-col justify-between py-4"
        >
            {/* 🔰 Logo DKhoa Shop */}
            <div className="flex items-center px-6 mb-3 font-bold text-lg text-green-500">
                ⚡ <span className="ml-2 text-gray-800 dark:text-gray-100">DKhoa Shop</span>
            </div>

            {/* 📋 Menu điều hướng */}
            <nav role="navigation" aria-label="Sidebar menu">
                <ul className="list-none p-0 m-0">
                    {menu.map((item) => (
                        <li key={item.label}>
                            <Link href={item.href}>
                                {/* ✅ Mỗi mục menu có hiệu ứng hover và active, đổi màu theo chế độ */}
                                <div
                                    onClick={() => setActive(item.label)}
                                    className={`flex items-center px-6 py-2 text-[15px] cursor-pointer transition-colors
                    ${active === item.label
                                            ? "bg-gray-100 dark:bg-gray-700 font-semibold"
                                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                                        }`}
                                >
                                    <span className="mr-3">{item.icon}</span>
                                    <span>{item.label}</span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* 📎 Footer sidebar */}
            <div className="px-6 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-3">
                <div className="mb-1">Terms &nbsp; Privacy &nbsp; Help</div>
                <div>©2025 Pixer. Copyright © REDQ.</div>
            </div>
        </aside>
    );
}