/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily:{
      'main': ['Noto', 'sans-serif'],
    },
    extend: {
      colors:{
        blue:{
          extralight:'#F3F2F8',
          lighter:'#CACBDF',
          lightbis:'#4D76C3',
          light:'#71739F',
          base :'#374077',
          dark:'#161C3D'
        },
        grey:{
          lighter:'#DDDDDD',
          base :'#C1C1C1',
          dark:'#AAAAAA'
        },
        red: {
          lighter:'#E2A4A4',
          light:'#CA6A69',
          base :'#C62120',
          dark:'#9D1414'
        },
        black:"#121525",
        white:"#ffffff",
        green:"#1CC12D",
      },
      spacing:{
        1:'3px',
        2:'6px',
        3:'9px',
        4:'12px',
        5:'15px',
        6:'18px',
        7:'21px',
        lg:'45px',
        xl:'87px',
      },
      fontSize:{
        sm:'0.94em',
        base: '17px',
        lg:'1.29em',
        xl:'1.52em',
        xxl:'1.65em',
        subheading:'2.35em',
        heading:'3.29em'
      },
      borderRadius:{
        sm:'2px',
        base:'13px'
      },
    },
  },
  plugins: [],
}
