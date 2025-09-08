"use client";
import React, { useState } from "react";

// Danh sách menu sidebar
const menu = [
    { icon: "🏠", label: "Trang chủ" },
    { icon: "🔍", label: "Khám phá" },
    { icon: "📦", label: "Phổ biến" },
    { icon: "👑", label: "Tác giả hàng đầu" },
    { icon: "📰", label: "Tin tức" },
    { icon: "✉️", label: "Liên hệ" },
    { icon: "🛒", label: "Trở thành người bán" },
    { icon: "⚙️", label: "Cài đặt" },
    { icon: "❓", label: "Trợ giúp" },
];

export default function Sidebar() {
    const [active, setActive] = useState("Trang chủ");

    return (
        <aside
            className="fixed top-0 left-0 h-screen w-[240px] bg-white border-r border-gray-200 z-[1000] flex flex-col justify-between py-4"
        >
            {/* 🔰 Logo DKhoa Shop */}
            <div className="flex items-center px-6 mb-3 font-bold text-lg text-green-500">
                ⚡ <span className="ml-2 text-gray-800">DKhoa Shop</span>
            </div>

            {/* 📋 Menu điều hướng */}
            <nav role="navigation" aria-label="Sidebar menu">
                <ul className="list-none p-0 m-0">
                    {menu.map((item) => (
                        <li
                            key={item.label}
                            onClick={() => setActive(item.label)}
                            className={`flex items-center px-6 py-2 text-[15px] cursor-pointer transition-colors 
                ${active === item.label ? "bg-gray-100 font-semibold" : "text-gray-700 hover:bg-gray-50"}`}
                        >
                            <span className="mr-3">{item.icon}</span>
                            <span>{item.label}</span>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* 📎 Footer sidebar */}
            <div className="px-6 text-xs text-gray-500 border-t border-gray-200 pt-3">
                <div className="mb-1">Terms &nbsp; Privacy &nbsp; Help</div>
                <div>©2025 Pixer. Copyright © REDQ.</div>
            </div>
        </aside>
    );
}