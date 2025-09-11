'use client';
import './globals.css';
import Sidebar from '../components/Side.bar';
import { useEffect, useState } from 'react';

// ✅ Component layout chính
export default function Layout({ children }: { children: React.ReactNode }) {
  // ✅ State kiểm soát chế độ dark/light
  const [isDark, setIsDark] = useState(true); // ✅ Mặc định là Darkmode

  // ✅ Gắn class 'dark' vào <html> khi dark mode bật
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <html lang="en">
      <body className="m-0 p-0 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
        {/* ✅ Sidebar cố định bên trái */}
        <Sidebar />

        {/* ✅ Nội dung chính */}
        <main className="ml-[240px] p-6 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          {children}
        </main>
      </body>
    </html>
  );
}