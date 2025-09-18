"use client";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import PixerHome from "../components/PixerHome";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDark, setIsDark] = useState(true);

  // ✅ Gắn class 'dark' vào <html> khi isDark thay đổi
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="w-full space-y-8 bg-white dark:bg-neutral-900 text-black dark:text-neutral-100 transition-colors duration-300 min-h-screen px-4">
      {/* ✅ Header giống ExplorePage */}
      <Header
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        isDark={isDark}
        setIsDark={setIsDark}
      />

      {/* ✅ Hiển thị sản phẩm giống ExplorePage */}
      <PixerHome selectedCategory={selectedCategory} />
    </div>
  );
}