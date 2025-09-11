"use client"; // ✅ Khai báo đây là component phía client trong Next.js

import React from "react";
import { motion } from "framer-motion"; // ✅ Thư viện tạo hiệu ứng động khi hover/click
import Image from "next/image"; // ✅ Component tối ưu ảnh của Next.js
import { FaUser } from "react-icons/fa"; // ✅ Icon người đăng sản phẩm

// ✅ Kiểu props nhận từ component cha để lọc theo danh mục
type PixerHomeProps = {
    selectedCategory: string;
};

// ✅ Danh sách sản phẩm mẫu
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
    { title: "Áo Khoác Da Loang CoolCrew", price: "$30.00", oldPrice: "$49.00", author: "DangKhoa", img: "/aokhoacCoolCrew.png", category: "Áo khoác" },
    { title: "Áo Thun Skull-ROTSTUDIO", price: "$19.00", oldPrice: "$49.00", author: "DangKhoa", img: "/aothunSkull-ROTSTUDIO.png", category: "Áo thun" },
    { title: "Áo Thun Nam Nữ Vasnava", price: "$18.00", oldPrice: "$49.00", author: "DangKhoa", img: "/aothunVasnava.png", category: "Áo thun" },
    { title: "Áo Thun Nam Nữ NEOGEN", price: "$18.00", oldPrice: "$49.00", author: "DangKhoa", img: "/aothunNEOGEN.png", category: "Áo thun" },
    { title: "Áo Khoác Dù Nam Nữ", price: "$20.00", oldPrice: "$49.00", author: "DangKhoa", img: "/aokhoacduNamNu.png", category: "Áo khoác" },
    { title: "Áo Khoác Jean IMAN", price: "$30.00", oldPrice: "$49.00", author: "DangKhoa", img: "/aokhoacJeanIMAN.png", category: "Áo khoác" },
    { title: "Túi Đeo Chéo Nam Nữ BARAS", price: "$36.00", oldPrice: "$49.00", author: "DangKhoa", img: "/tuideocheoBARAS.png", category: "Phụ kiện" },
    { title: "Quần Jean Nam Ống Rộng Menswear", price: "$27.00", oldPrice: "$49.00", author: "DangKhoa", img: "/quanjeanongrongMenswear.png", category: "Quần Jean" },
];

// ✅ Component chính hiển thị sản phẩm
export default function PixerHome({ selectedCategory }: PixerHomeProps) {
    // ✅ Lọc sản phẩm theo danh mục được chọn
    const filteredProducts =
        selectedCategory === "Tất cả"
            ? products
            : products.filter((product) => product.category === selectedCategory);

    return (
        <div className="main-content">
            {/* ✅ Tiêu đề trang, có hỗ trợ màu chữ cho Darkmode */}
            <h1 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
                Sản phẩm shop tui
            </h1>

            {/* ✅ Grid hiển thị sản phẩm theo hàng/cột, responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, idx) => (
                    <motion.div
                        key={idx}
                        className="border rounded-lg overflow-hidden 
                       bg-white dark:bg-gray-800 
                       shadow-sm hover:shadow-md 
                       transition-all cursor-pointer"
                        style={{ perspective: 1000 }} // ✅ Tạo chiều sâu cho hiệu ứng xoay
                        whileHover={{
                            scale: 1.015,       // ✅ Phóng to nhẹ khi hover
                            rotateX: -2,        // ✅ Xoay nhẹ theo trục X
                            y: -1,              // ✅ Nâng nhẹ lên
                            boxShadow: "0 8px 20px rgba(34,197,94,0.15)", // ✅ Bóng mềm
                            borderColor: "#22c55e",     // ✅ Viền xanh khi hover
                        }}
                        whileTap={{ scale: 0.97 }} // ✅ Nhún nhẹ khi click
                        transition={{
                            type: "tween",     // ✅ Tween mượt hơn spring
                            ease: "easeOut",   // ✅ Mềm mại khi kết thúc
                            duration: 0.25,    // ✅ Nhanh nhưng không gấp
                        }}
                    >
                        {/* ✅ Ảnh sản phẩm, dùng Next/Image để tối ưu */}
                        <Image
                            src={product.img}
                            alt={product.title}
                            width={320}
                            height={160}
                            className="w-full h-48 object-cover"
                        />

                        {/* ✅ Nội dung sản phẩm */}
                        <div className="p-4 text-gray-800 dark:text-gray-100">
                            {/* ✅ Tên sản phẩm */}
                            <h2 className="text-base font-semibold mb-1">
                                {product.title}
                            </h2>

                            {/* ✅ Tác giả sản phẩm */}
                            <div className="flex items-center gap-2 
                              text-gray-500 dark:text-gray-300 
                              text-sm mb-2">
                                <FaUser className="text-green-500 dark:text-green-400" />
                                <span>{product.author}</span>
                            </div>

                            {/* ✅ Giá sản phẩm */}
                            <div className="flex items-center gap-2 
                              text-lg font-bold 
                              text-green-600 dark:text-green-400">
                                <span>{product.price}</span>

                                {/* ✅ Giá gạch ngang nếu có */}
                                {product.oldPrice && (
                                    <span className="text-gray-400 dark:text-gray-500 line-through text-sm">
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