"use client";
import React, { useRef, useState, useEffect } from "react";

// ✅ Danh sách danh mục hiển thị
const categories = [
    "All", "Free", "PHP Script", "HTML", "React", "WordPress Plugin", "WordPress Theme",
    "Angular", "CMS", "Wireframe Kits", "UI templates", "Illustrations", "Icon Sets", "Mobile App", "3D Assets", "Bootstrap", "Joomla", "Shoppify"
];

export default function CategoryTabs({
    selected,
    onSelect,
}: {
    selected: string;
    onSelect: (category: string) => void;
}) {
    const scrollRef = useRef<HTMLDivElement>(null); // ✅ Ref để điều khiển scroll ngang
    const [showLeftArrow, setShowLeftArrow] = useState(false); // ✅ Kiểm soát nút quay lại

    // ✅ Theo dõi scroll để cập nhật trạng thái nút trái
    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const handleScroll = () => {
            setShowLeftArrow(el.scrollLeft > 0); // ✅ Nếu scrollLeft > 0 thì hiện nút trái
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
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => onSelect(category)}
                        className={`px-4 py-2 text-sm rounded-full whitespace-nowrap transition-all duration-300
              ${selected === category
                                ? "bg-green-500 text-white shadow-md scale-[1.05]"
                                : "bg-gray-100 hover:bg-green-100 text-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-green-700"
                            }`}
                    >
                        {category}
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
    );
}