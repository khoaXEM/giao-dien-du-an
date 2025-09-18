"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

// ✅ Props nhận từ layout
export interface SidebarProps {
    isCollapsed: boolean;
    setIsCollapsed: (value: boolean) => void;
}

// ✅ Danh sách menu chính
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

export default function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
    const [active, setActive] = useState("Trang chủ");

    return (
        <aside
            className={`fixed top-0 left-0 h-screen 
    ${isCollapsed ? "w-[72px]" : "w-[240px]"} 
    bg-white dark:bg-[#1f1f1f] 
    border-r border-[#e5e7eb] dark:border-[#333] 
    z-[1000] flex flex-col justify-between py-6`}
        >
            {/* 🔲 Toggle mở rộng/thu gọn */}
            <div className="px-4 mb-6">
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="text-xl text-green-500 hover:scale-110 transition"
                    title="Thu gọn/Mở rộng"
                >
                    <FaBars />
                </button>
            </div>

            {/* 📋 Menu chính */}
            <nav role="navigation" aria-label="Sidebar menu">
                <ul className="list-none p-0 m-0 space-y-1">
                    {menu.map((item) => (
                        <li key={item.label}>
                            <Link href={item.href}>
                                <div
                                    onClick={() => setActive(item.label)}
                                    className={`flex items-center gap-3 px-4 py-2 text-[15px] rounded-md cursor-pointer transition-colors
                    ${active === item.label
                                            ? "bg-green-100 dark:bg-green-700 text-green-700 dark:text-white font-semibold"
                                            : "text-[#1f2937] dark:text-[#a0aec0] hover:bg-[#f3f4f6] dark:hover:bg-[#3b4d3f]"
                                        }`}
                                >
                                    <span>{item.icon}</span>
                                    {!isCollapsed && <span>{item.label}</span>}
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* 📎 Footer sidebar */}
            <div className="px-4 text-xs text-gray-500 dark:text-gray-400 border-t border-[#e5e7eb] dark:border-[#4a5568] pt-4 space-y-1">
                {!isCollapsed && (
                    <>
                        <div>Terms &nbsp; Privacy &nbsp; Help</div>
                        <div>©2025 DKhoa Shop. Powered by REDQ.</div>
                    </>
                )}
            </div>
        </aside>
    );
}