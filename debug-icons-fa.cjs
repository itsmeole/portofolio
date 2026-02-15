const fa = require('react-icons/fa');

const keys = Object.keys(fa);
const check = ['FaFileExcel', 'FaChartBar', 'FaArrowRight', 'FaGithub'];

const found = check.filter(c => keys.includes(c));
const missing = check.filter(c => !keys.includes(c));

console.log('Found:', found);
console.log('Missing:', missing);
