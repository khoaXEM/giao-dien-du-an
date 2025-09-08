'use client';
import './globals.css';
import Sidebar from '../components/Side.bar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="m-0 p-0">
        <Sidebar />
        <main className="ml-[240px] p-6 min-h-screen bg-gray-50">
          {children}
        </main>
      </body>
    </html>
  );
}