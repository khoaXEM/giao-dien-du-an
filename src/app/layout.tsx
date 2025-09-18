'use client';
import './globals.css';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';

// ✅ Component layout chính
export default function Layout({ children }: { children: React.ReactNode }) {
  // ✅ State kiểm soát chế độ dark/light
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <html lang="en" className="dark">
      <body className="bg-white text-black dark:bg-neutral-900 dark:text-neutral-100 transition-colors duration-200 flex min-h-screen">

        {/* ✅ Sidebar cố định bên trái */}
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

        {/* ✅ Nội dung chính */}
        <main className={`transition-all duration-300 w-full ${isCollapsed ? 'pl-[72px]' : 'pl-[240px]'} px-4 py-6`}>
          {children}
        </main>
      </body>
    </html>
  );
}