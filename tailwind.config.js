/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#FACC15", // دهبي فاتح
          dark: "#EAB308", // دهبي أغمق شوية
        },
        secondary: {
          light: "#1E3A8A", // أزرق غامق (زي حرف الـ M)
          dark: "#111827", // أغمق درجة للأساسيات أو الخلفيات الداكنة
        },
        accent: {
          light: "#FCD34D", // لون ذهبي فاتح مائل للإضاءة
          dark: "#CA8A04", // ذهبي داكن للتفاصيل
        },
        background: {
          light: "#F9FAFB", // خلفية فاتحة جدًا
          dark: "#0F172A", // خلفية داكنة مناسبة مع الذهبي
        },
        surface: {
          light: "#FFFFFF",
          dark: "#1E293B",
        },
        text: {
          light: "#0F172A", // غامق للنصوص على الخلفيات الفاتحة
          dark: "#F9FAFB", // فاتح للنصوص على الخلفيات الداكنة
        },
      },
    },
  },

  // theme: {
  //   extend: {

  //     colors: {
  //       primary: {
  //         light: "#3B82F6",
  //         dark: "#1E3A8A",
  //       },
  //       secondary: {
  //         light: "#8B5CF6",
  //         dark: "#4C1D95",
  //       },
  //       accent: {
  //         light: "#F59E0B",
  //         dark: "#78350F",
  //       },
  //       background: {
  //         light: "#F9FAFB",
  //         dark: "#111827",
  //       },
  //       surface: {
  //         light: "#FFFFFF",
  //         dark: "#1F2937",
  //       },
  //       text: {
  //         light: "#111827",
  //         dark: "#F9FAFB",
  //       },
  //     },
  //   },
  // },

  plugins: [],
};
