"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaUser } from "react-icons/fa";

// ✅ Kiểu props nhận từ component cha
type PixerHomeProps = {
    selectedCategory: string;
};

// ✅ Danh sách sản phẩm
const products = [
    { title: "Quần Jean Nam Rách Gối", price: "$59.00", oldPrice: "$65.00", author: "DangKhoa", img: "/quanjean.png", category: "Quần Jean" },
    { title: "Áo Khoác Nam Denim", price: "$7.99", author: "DangKhoa", img: "/aokhoacdenim.png", category: "Áo khoác" },
    { title: "Áo Thun Nam Nữ Cổ Tròn", price: "$15.00", author: "DangKhoa", img: "/aothuncotronTBG.png", category: "Áo thun" },
    { title: "Giày Sneaker MLB Nam Nữ", price: "$43.00", oldPrice: "$49.00", author: "DangKhoa", img: "/giayMLB.png", category: "Giày Sneaker" },
    { title: "Áo Khoác Hoodie Nam Nữ", price: "$23.00", oldPrice: "$49.00", author: "DangKhoa", img: "/hoodieZip.png", category: "Áo khoác" },
    { title: "Dép Bánh Mì", price: "$13.00", oldPrice: "$49.00", author: "DangKhoa", img: "/depbanhmi.png", category: "Dép" },
    { title: "Giày Sneaker NiceShoes Nam Nữ", price: "$13.00", oldPrice: "$49.00", author: "DangKhoa", img: "/sneakerNiceshoes.png", category: "Giày Sneaker" },
    { title: "Giày Sneaker LV trainer Nam Nữ", price: "$45.00", oldPrice: "$49.00", author: "DangKhoa", img: "/trainerLV.png", category: "Giày Sneaker" },
    { title: "Giày Sneaker AF1 Canvas Navy", price: "$30.00", oldPrice: "$49.00", author: "DangKhoa", img: "/AF1CanvasNavy.png", category: "Giày Sneaker" },
    { title: "Túi Đeo Chéo Start-V2 Nam Nữ", price: "$20.00", oldPrice: "$49.00", author: "DangKhoa", img: "/tuideocheoV2.png", category: "Phụ kiện" },
    { title: "Quần Jean Nam Phối Dây", price: "$20.00", oldPrice: "$49.00", author: "DangKhoa", img: "/quanjeanphoiday.png", category: "Quần Jean" },
    { title: "Áo Thun ROTS-VN Nam Nữ", price: "$25.00", oldPrice: "$49.00", author: "DangKhoa", img: "/aothunROTS-VN.png", category: "Áo thun" },
    { title: "Áo Polo Morpheus Nam Nữ", price: "$30.00", oldPrice: "$49.00", author: "DangKhoa", img: "/aopoloMorpheus.png", category: "Áo polo" },
    { title: "Quần Jean Ống Rộng Cạp Chun MR.Smile", price: "$25.00", oldPrice: "$49.00", author: "DangKhoa", img: "/quanjeanongrongMrSmile.png", category: "Quần Jean" },
    { title: "Túi Đeo Chéo Nam Nữ NY", price: "$20.00", oldPrice: "$49.00", author: "DangKhoa", img: "/tuideocheoNY.png", category: "Phụ kiện" },
    { title: "Túi Tote Đeo Chéo Nam Nữ", price: "$20.00", oldPrice: "$49.00", author: "DangKhoa", img: "/tuiToteDeoCheo.png", category: "Phụ kiện" },
    { title: "Áo Thun 1969STUDIO Nam Nữ", price: "$25.00", oldPrice: "$49.00", author: "DangKhoa", img: "/aothun1969STUDIO.png", category: "Áo thun" },
    { title: "Quần Jean Nam Thêu 8 sao", price: "$27.00", oldPrice: "$49.00", author: "DangKhoa", img: "/quanjean8sao.png", category: "Quần Jean" },
    { title: "Túi Đeo Chéo Canvas Nam Nữ W", price: "$20.00", oldPrice: "$49.00", author: "DangKhoa", img: "/tuideocheoCanvasW.png", category: "Phụ kiện" },
    { title: "Áo Hoodie Zip Tarbo.Club", price: "$22.00", oldPrice: "$49.00", author: "DangKhoa", img: "/hoodieZipTarboClub.png", category: "Áo khoác" },
];

// ✅ Component chính
export default function PixerHome({ selectedCategory }: PixerHomeProps) {
    // ✅ Lọc sản phẩm theo danh mục
    const filteredProducts =
        selectedCategory === "Tất cả"
            ? products
            : products.filter((product) => product.category === selectedCategory);

    return (
        <div className="main-content">
            <h1 className="text-2xl font-bold mb-8">Sản phẩm shop tui</h1>

            {/* ✅ Grid hiển thị sản phẩm */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, idx) => (
                    <motion.div
                        key={idx}
                        className="border rounded-lg overflow-hidden bg-white shadow-sm transition-all"
                        style={{
                            perspective: 1000, // ✅ Tạo chiều sâu cho hiệu ứng xoay
                        }}
                        whileHover={{
                            scale: 1.015, // ✅ Phóng to nhẹ
                            rotateX: -2, // ✅ Xoay nhẹ theo trục X
                            y: -1, // ✅ Nâng nhẹ
                            boxShadow: "0 8px 20px rgba(34,197,94,0.15)", // ✅ Bóng mềm
                            backgroundColor: "#f6fff9", // ✅ Nền sáng nhẹ
                            borderColor: "#22c55e", // ✅ Viền xanh
                        }}
                        transition={{
                            type: "tween", // ✅ Tween mượt hơn spring
                            ease: "easeOut", // ✅ Mềm mại khi kết thúc
                            duration: 0.25, // ✅ Nhanh nhưng không gấp
                        }}
                    >
                        <Image
                            src={product.img}
                            alt={product.title}
                            width={320}
                            height={160}
                            className="w-full h-48 object-cover"
                        />

                        <div className="p-4">
                            <h2 className="text-base font-semibold mb-1">{product.title}</h2>

                            <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                                <FaUser className="text-green-500" />
                                <span>{product.author}</span>
                            </div>

                            <div className="flex items-center gap-2 text-lg font-bold text-green-600">
                                <span>{product.price}</span>
                                {product.oldPrice && (
                                    <span className="text-gray-400 line-through text-sm">
                                        {product.oldPrice}
                                    </span>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}