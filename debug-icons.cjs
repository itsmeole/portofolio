const icons = require('react-icons/si');
const keywords = ['micro', 'ibm', 'node', 'next', 'vite', 'jupyter', 'postgres', 'supabase', 'vercel', 'mysql', 'type', 'java', 'php', 'python'];

const allKeys = Object.keys(icons);
const matches = allKeys.filter(key => {
    const k = key.toLowerCase();
    return keywords.some(word => k.includes(word));
});

console.log(JSON.stringify(matches, null, 2));
