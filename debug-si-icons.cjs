const si = require('react-icons/si');

const keys = Object.keys(si);
const used = [
    'SiTypescript', 'SiJavascript', 'SiPhp',
    'SiPython', 'SiNodedotjs', 'SiNextdotjs', 'SiVite', 'SiJupyter',
    'SiPostgresql', 'SiSupabase', 'SiVercel', 'SiMysql'
];

const found = used.filter(c => keys.includes(c));
const missing = used.filter(c => !keys.includes(c));

console.log('Found:', found);
console.log('Missing:', missing);
