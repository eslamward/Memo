/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
theme: {
  extend: {
    
    colors: {
      primary: {
        light: "#3B82F6",
        dark: "#1E3A8A",
      },
      secondary: {
        light: "#8B5CF6",
        dark: "#4C1D95",
      },
      accent: {
        light: "#F59E0B",
        dark: "#78350F",
      },
      background: {
        light: "#F9FAFB",
        dark: "#111827",
      },
      surface: {
        light: "#FFFFFF",
        dark: "#1F2937",
      },
      text: {
        light: "#111827",
        dark: "#F9FAFB",
      },
    },
  },
},

  plugins: [],
}

  
