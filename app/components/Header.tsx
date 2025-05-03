"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "ホーム", path: "/" },
  { name: "プロジェクト", path: "/projects" },
  { name: "スキル", path: "/skills" },
  { name: "経歴", path: "/about" },
  { name: "お問い合わせ", path: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // モバイルメニュー開閉時にスクロールを制御
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-xl">
            <Link href="/" className="text-gray-900 hover:text-blue-600 transition">
              unknown
            </Link>
          </div>
          
          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`${
                  pathname === item.path
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                } transition-colors px-1 py-2 text-sm font-medium relative`}
              >
                {item.name}
                {pathname === item.path && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                    layoutId="underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center">
            {/* モバイルメニューボタン */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-3 md:hidden p-2 rounded-full text-gray-700 hover:bg-gray-200 transition"
              aria-label="メニュー"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* モバイルナビゲーション */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <nav className="flex flex-col px-4 pt-2 pb-4 space-y-2 bg-white border-t border-gray-200">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`${
                    pathname === item.path
                      ? "text-blue-600 bg-gray-100"
                      : "text-gray-700"
                  } px-4 py-2 rounded-md text-base font-medium hover:bg-gray-100 transition`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}