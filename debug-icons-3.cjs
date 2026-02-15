const fa = require('react-icons/fa');
const bs = require('react-icons/bs');

const faKeys = Object.keys(fa);
const bsKeys = Object.keys(bs);

const faExcel = faKeys.filter(k => k.toLowerCase().includes('excel'));
const faIbm = faKeys.filter(k => k.toLowerCase().includes('ibm'));

const bsExcel = bsKeys.filter(k => k.toLowerCase().includes('excel'));
const bsIbm = bsKeys.filter(k => k.toLowerCase().includes('ibm'));

console.log('FA Excel:', faExcel);
console.log('FA IBM:', faIbm); // Unlikely in free FA
console.log('BS Excel:', bsExcel);
console.log('BS IBM:', bsIbm);
