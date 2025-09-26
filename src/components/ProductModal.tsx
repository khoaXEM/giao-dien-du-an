"use client"; // ✅ Khai báo đây là component phía client để dùng hook, sự kiện

import { motion } from "framer-motion"; // ✅ Dùng để tạo hiệu ứng mở modal mượt
import { Product } from "../type"; // ✅ Import kiểu dữ liệu sản phẩm đã định nghĩa

// ✅ Khai báo kiểu props nhận vào
interface Props {
    product: Product | null; // ✅ Sản phẩm đang được chọn để hiển thị
    onClose: () => void;     // ✅ Hàm đóng modal
}

export default function ProductModal({ product, onClose }: Props) {
    if (!product) return null; // ✅ Nếu chưa có sản phẩm thì không render modal

    return (
        // ✅ Nền đen mờ phủ toàn màn hình
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">

            {/* ✅ Modal container có hiệu ứng scale mượt */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }} // ✅ Bắt đầu mờ và nhỏ
                animate={{ opacity: 1, scale: 1 }}     // ✅ Hiện rõ và phóng to
                exit={{ opacity: 0, scale: 0.95 }}     // ✅ Khi đóng thì thu nhỏ lại
                transition={{ duration: 0.3 }}         // ✅ Thời gian chuyển động
                className="bg-white dark:bg-neutral-900 rounded-lg p-6 max-w-3xl w-full shadow-xl relative"
            >
                {/* ✅ Nút đóng modal */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white text-xl"
                >
                    ✖
                </button>

                {/* ✅ Nội dung modal chia làm 2 phần: ảnh và thông tin */}
                <div className="flex flex-col md:flex-row gap-6">

                    {/* ✅ Ảnh sản phẩm bên trái */}
                    <img
                        src={product.img}
                        alt={product.title}
                        className="w-full md:w-1/2 rounded-lg object-cover"
                    />

                    {/* ✅ Thông tin chi tiết bên phải */}
                    <div className="flex-1 space-y-3 text-gray-800 dark:text-gray-100">
                        <h2 className="text-2xl font-bold">{product.title}</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{product.description}</p>

                        {/* ✅ Các dòng thông tin phụ */}
                        <div className="text-sm space-y-1">
                            <div><strong>Tác giả:</strong> {product.author}</div>
                            <div><strong>Danh mục:</strong> {product.category}</div>
                            {product.downloads !== undefined && (
                                <div><strong>Lượt tải:</strong> {product.downloads}</div>
                            )}
                            {product.rating !== undefined && (
                                <div><strong>Đánh giá:</strong> ⭐ {product.rating}</div>
                            )}
                            {product.updated && (
                                <div><strong>Cập nhật:</strong> {product.updated}</div>
                            )}
                            {product.published && (
                                <div><strong>Phát hành:</strong> {product.published}</div>
                            )}
                            {product.tags && (
                                <div>
                                    <strong>Tags:</strong>{" "}
                                    <span className="text-green-600 dark:text-green-400">
                                        {product.tags.join(", ")}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* ✅ Giá sản phẩm + nút hành động */}
                        <div className="flex items-center gap-4 mt-4">
                            <div className="text-xl font-bold text-green-600 dark:text-green-400">
                                {product.price}
                                {product.oldPrice && (
                                    <span className="ml-2 text-gray-400 dark:text-gray-500 line-through text-sm">
                                        {product.oldPrice}
                                    </span>
                                )}
                            </div>

                            {/* ✅ Nút Add to Cart và Live Preview */}
                            <div className="flex gap-2">
                                <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
                                    Add to Cart
                                </button>
                                <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800 transition">
                                    Live Preview
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}