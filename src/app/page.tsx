"use client";
import { useState } from "react";
import Header from "../components/Header";
import PixerHome from "../components/PixerHome";

export default function Home() {
  // ✅ State lưu danh mục đang chọn
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");

  return (
    <div className="space-y-8">
      {/* ✅ Truyền props xuống Header để xử lý chọn danh mục */}
      <Header
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* ✅ Truyền props xuống PixerHome để lọc sản phẩm */}
      <PixerHome selectedCategory={selectedCategory} />
    </div>
  );
}