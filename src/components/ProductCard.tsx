"use client"; // ✅ Khai báo đây là component phía client trong Next.js

import Image from "next/image"; // ✅ Dùng Image của Next.js để tối ưu ảnh
import { motion } from "framer-motion"; // ✅ Dùng motion để tạo hiệu ứng động
import { Product } from "../type"; // ✅ Import kiểu dữ liệu

interface Props {
    product: Product;
    onPreview: (product: Product) => void;
}
// ✅ Component nhận props: product (dữ liệu sản phẩm), onPreview (hàm xử lý khi click Preview)
export default function ProductCard({ product, onPreview }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }} // ✅ Hiệu ứng khi load: mờ + trượt lên
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "linear" }}
            whileHover={{
                scale: 1.01, // ✅ Nhô lên nhẹ khi hover
                y: -1,
                boxShadow: "0 6px 12px rgba(34,197,94,0.1)", // ✅ Đổ bóng xanh nhẹ
                borderColor: "#22c55e",
                transition: { duration: 0.15, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.98 }} // ✅ Nhỏ lại khi click
            className="border rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all cursor-pointer relative group"
        >
            {/* ✅ Ảnh sản phẩm */}
            <Image
                src={product.img}
                alt={product.title}
                width={320}
                height={160}
                className="w-full h-48 object-cover transition duration-300 group-hover:blur-sm" // ✅ Làm mờ ảnh khi hover
            />

            {/* ✅ Overlay xám + nút Preview / Details */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-3 z-10">
                <button className="px-3 py-1 bg-white text-sm rounded-md shadow flex items-center gap-1">
                    📄 Details
                </button>
                <button
                    onClick={() => onPreview(product)} // ✅ Gọi hàm khi click Preview
                    className="px-3 py-1 bg-white text-sm rounded-md shadow flex items-center gap-1"
                >
                    👁️ Preview
                </button>
            </div>

            {/* ✅ Nội dung sản phẩm */}
            <div className="p-4 text-gray-800 dark:text-gray-100">
                <h3 className="text-base font-semibold mb-1">{product.title}</h3>
                <div className="text-sm text-gray-500 dark:text-gray-300 mb-2">
                    {product.author}
                </div>
                <div className="text-lg font-bold text-green-600 dark:text-green-400">
                    {product.price}
                    {product.oldPrice && (
                        <span className="ml-2 text-sm text-gray-400 dark:text-gray-500 line-through">
                            {product.oldPrice}
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    );
}