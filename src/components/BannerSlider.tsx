"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// ✅ Danh sách ảnh banner
const bannerImages = ["/banner1.jpg", "/banner2.jpg", "/banner3.jpg"];

export default function BannerSlider() {
    const [index, setIndex] = useState(0);

    // ✅ Tự động chuyển ảnh mỗi 4 giây
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % bannerImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    // ✅ Chuyển ảnh thủ công bằng nút
    const goTo = (i: number) => setIndex(i);

    return (
        <div className="relative w-full h-[300px] overflow-hidden rounded-lg">
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
                        className="object-cover"
                    />
                </motion.div>
            </AnimatePresence>

            {/* ✅ Nút điều khiển */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {bannerImages.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        className={`w-3 h-3 rounded-full ${i === index ? "bg-green-500" : "bg-gray-300"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}