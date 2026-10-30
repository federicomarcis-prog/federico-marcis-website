'use strict';
let content={};
const $=s=>document.querySelector(s);const el=(tag,cls,txt)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(txt!==undefined)e.textContent=txt;return e};
const setText=(id,text)=>{document.getElementById(id).textContent=text||''};
function render(){
 setText('heroRole',content.role);const name=content.name||'';const words=name.split(' ');const title=$('#heroName');title.replaceChildren(document.createTextNode(words.slice(0,-1).join(' ')+' '),el('em','',words.slice(-1)[0]||''));
 setText('heroTagline',content.tagline);setText('heroLocation',content.location);$('#heroPhoto').src=content.heroImage||'/uploads/portrait.png';setText('introText',content.intro);
 const highlights=$('#highlights');highlights.replaceChildren();(content.highlights||[]).forEach(h=>{const box=el('div');box.append(el('div','highlight-num',h.number),el('div','highlight-label',h.label));highlights.append(box)});
 const jobs=$('#experienceItems');jobs.replaceChildren();(content.experience||[]).forEach(j=>{let row=el('article','job'),left=el('div','job-date',j.dates),right=el('div');right.append(el('h3','',j.title),el('div','job-company',j.company));if(j.ships)right.append(el('div','job-ships',j.ships));right.append(el('p','',j.description));row.append(left,right);jobs.append(row)});
 const skills=$('#skills');skills.replaceChildren();(content.expertise||[]).forEach((s,i)=>{const item=el('div','skill');item.append(el('span','',String(i+1).padStart(2,'0')),el('div','',s));skills.append(item)});
 const ed=$('#education');ed.replaceChildren();(content.education||[]).forEach(e=>{const box=el('div','edu');box.append(el('strong','',e.title),el('div','',e.meta),el('div','',e.detail));ed.append(box)});
 ['certifications','languages','extras'].forEach(k=>setText(k,content[k]));
 const gallery=$('#galleryGrid');gallery.replaceChildren();(content.gallery||[]).forEach(g=>{const fig=el('figure','gallery-card'),img=el('img');img.src=g.url;img.alt=g.caption||'Maritime photography';img.loading='lazy';fig.append(img,el('figcaption','',g.caption||''));gallery.append(fig)});$('#galleryEmpty').classList.toggle('hidden',!!(content.gallery||[]).length);
 $('#emailBtn').href='mailto:'+content.email;setText('contactEmail',content.email);const a=$('#linkedinLink');a.classList.toggle('hidden',!content.linkedin);if(content.linkedin)a.href=content.linkedin;setText('year',new Date().getFullYear());document.title=content.name+' | '+content.role;
}

$('#menuBtn').onclick=()=>$('.nav nav').classList.toggle('open');
document.querySelectorAll('.nav nav a').forEach(a=>a.onclick=()=>$('.nav nav').classList.remove('open'));
fetch('/content.json',{cache:'no-store'}).then(r=>{if(!r.ok)throw Error('Content unavailable');return r.json()}).then(data=>{content=data;render()}).catch(e=>{console.error(e);setText('heroTagline','Unable to load profile content.')});
