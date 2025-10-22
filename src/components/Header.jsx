import React, { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { FaErlang, FaMoon, FaRegMoon, FaRegSun, FaSun } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md dark:border-b-gray-300 border-b-[.2px]">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl flex-1 font-mono  font-bold text-gray-800 dark:text-gray-100">
          {t("name")}
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex md:space-x-4 mr-2">
          <a
            href="#"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
          >
            {t("home")}
          </a>
          <a
            href="#"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
          >
            {t("about")}
          </a>
          <a
            href="#"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
          >
            {t("services")}
          </a>
          <a
            href="#"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
          >
            {t("contact")}
          </a>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <button
          onClick={toggleLang}
          className="p-2 rounded-md text-[18px] text-gray-800 dark:text-gray-200 transition"
          title="Toggle theme"
        >
          {i18n.language === "en" ? (
            <p className="font-mono ">ع</p>
          ) : (
            <p className="font-mono ">E</p>
          )}
        </button>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-md text-[18px] text-gray-800 dark:text-gray-200 transition"
          title="Toggle theme"
        >
          {theme === "light" ? (
            <FaMoon />
          ) : (
            <FaSun className="text-orange-500" />
          )}
        </button>
      </div>

      {/* Mobile DropDown Menu */}
      {isOpen && (
        <div className="md:hidden text-centers bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <nav className="flex flex-col p-4 space-y-2">
            <a
              href="#"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
