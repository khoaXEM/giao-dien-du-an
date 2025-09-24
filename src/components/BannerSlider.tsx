"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// ✅ Danh sách ảnh banner
const bannerImages = ["/bannerE.jpg", "/banneR2.jpg", "/banner3.jpg"];

export default function BannerSlider() {
    const [index, setIndex] = useState(0);
    const dotRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const [dotLeft, setDotLeft] = useState(0);

    // ✅ Tự động chuyển ảnh mỗi 4 giây
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % bannerImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    // ✅ Cập nhật vị trí dấu chấm active
    useEffect(() => {
        const currentDot = dotRefs.current[index];
        if (currentDot) {
            const { offsetLeft } = currentDot;
            setDotLeft(offsetLeft);
        }
    }, [index]);

    // ✅ Chuyển ảnh thủ công bằng nút
    const goTo = (i: number) => setIndex(i);

    return (
        <div className="relative w-full h-[300px] sm:h-[360px] lg:h-[420px] overflow-hidden rounded-xl shadow-md">
            {/* ✅ Hiệu ứng chuyển ảnh */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={bannerImages[index]}
                        alt={`Banner ${index}`}
                        fill
                        priority
                        className="object-cover"
                    />
                </motion.div>
            </AnimatePresence>

            {/* ✅ Overlay tối nhẹ để nổi nội dung */}
            <div className="absolute inset-0 bg-black/30 z-10" />

            {/* ✅ Nút điều khiển dạng dấu chấm */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 relative z-30">
                {/* 🔘 Dấu chấm nền */}
                {bannerImages.map((_, i) => (
                    <button
                        key={i}
                        ref={(el) => {
                            if (el) dotRefs.current[i] = el;
                        }}
                        onClick={() => goTo(i)}
                        className="w-3 h-3 rounded-full bg-gray-300 relative z-10"
                    />
                ))}

                {/* 🔘 Dấu chấm active có hiệu ứng di chuyển */}
                <motion.div
                    className="w-3 h-3 rounded-full bg-green-500 absolute top-0 z-20"
                    animate={{ left: dotLeft }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
            </div>
        </div>
    );
}