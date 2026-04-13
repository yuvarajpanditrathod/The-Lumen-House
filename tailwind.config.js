// The Lumen House — Shared Tailwind Configuration
// Used across all pages via: <script src="tailwind.config.js"></script>

tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                display: ["Playfair Display", "serif"],
                body: ["Manrope", "sans-serif"],
            },
            colors: {
                ink: "#050505",
                charcoal: "#0F0F11",
                ember: "#D4A373",
                warm: "#F5EBE0",
                stone: "#2C2C2E",
                accent: "#C58E5B",
                sand: "#F9F5F0",
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
            boxShadow: {
                'glow': '0 0 80px -20px rgba(212, 163, 115, 0.15)',
                'card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
                'input': '0 0 15px -5px rgba(212, 163, 115, 0.1)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'reveal': 'reveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                reveal: {
                    '0%': { opacity: 0, transform: 'translateY(20px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                }
            }
        },
    },
};
