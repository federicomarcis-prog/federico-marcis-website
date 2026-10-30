// Cloudflare Pages: build command `node build.mjs` (Node 18+). No server.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const base = path.join(path.dirname(fileURLToPath(import.meta.url)), 'public');
const read = p => JSON.parse(fs.readFileSync(path.join(base, p), 'utf8'));
const entries = name => {
  const dir = path.join(base, 'data', name);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(x=>x.endsWith('.json')).map(x=>read(`data/${name}/${x}`))
    .sort((a,b)=>(Number(a.order)||100)-(Number(b.order)||100));
};
const profile = read('data/profile.json');
const qualifications = read('data/qualifications.json');
const obj = {...profile, ...qualifications,
 experience: entries('experience').map(({order,id,...item})=>item),
 education: entries('education').map(({order,id,...item})=>item),
 expertise: entries('expertise').map(x=>x.skill),
 gallery: entries('gallery').map(({order,id,title,...item})=>item)
};
fs.writeFileSync(path.join(base,'content.json'),JSON.stringify(obj,null,2)+'\n');
console.log('Generated content.json with',obj.experience.length,'jobs and',obj.gallery.length,'photos.');
