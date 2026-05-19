/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      colors: {
        night: '#0f172a',
        panel: '#111827',
        neon: '#38bdf8',
        violet: '#8b5cf6',
        paper: '#f8fafc',
      },
      boxShadow: {
        glow: '0 0 34px rgba(56, 189, 248, 0.26)',
        violetGlow: '0 0 34px rgba(139, 92, 246, 0.3)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)',
        aurora:
          'radial-gradient(circle at 20% 20%, rgba(56, 189, 248, 0.28), transparent 28%), radial-gradient(circle at 80% 0%, rgba(139, 92, 246, 0.26), transparent 30%), linear-gradient(135deg, #0f172a 0%, #111827 55%, #050816 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.45, transform: 'scale(1)' },
          '50%': { opacity: 0.85, transform: 'scale(1.08)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        pulseGlow: 'pulseGlow 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
