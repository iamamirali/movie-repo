import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'neutral-0': '#FFFFFF',
      'neutral-50': '#ADB5BD',
      'neutral-100': '#87939D',
      'neutral-200': '#6C757D',
      'neutral-400': '#495057',
      'neutral-700': '#212529',
      'neutral-900': '#000000',
      'yellow-50': '#FFE97F',
      'yellow-200': '#FAD643',
      'yellow-400': '#DBB42C',
      'red-400': '#DC2F02',
      'red-600': '#9D0208',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
