/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          
"primary": "#ff008f",
          
"secondary": "#009300",
          
"accent": "#b5b800",
          
"neutral": "#342210",
          
"base-100": "#282737",
          
"info": "#0095e2",
          
"success": "#7fe700",
          
"warning": "#f85800",
          
"error": "#db0025",
          },
        },
      ],
    },
    plugins: [
      require('daisyui'),
    ],
}

