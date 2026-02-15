const icons = require('react-icons/si');

const allKeys = Object.keys(icons);
const excel = allKeys.filter(k => k.toLowerCase().includes('excel'));
const spss = allKeys.filter(k => k.toLowerCase().includes('spss'));
const ibm = allKeys.filter(k => k.toLowerCase().startsWith('siibm')); // Check distinct start
const microsoft = allKeys.filter(k => k.toLowerCase().includes('microsoft'));

console.log('Excel:', excel);
console.log('SPSS:', spss);
console.log('IBM:', ibm);
console.log('Microsoft:', microsoft);
