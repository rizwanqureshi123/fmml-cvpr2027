// Edit this list as organizer participation and affiliations are confirmed.
const proposedOrganizers = [
  {name:'Rizwan Qureshi', role:'AI/ML Lead Scientist', affiliation:'MGB / MIT FMML'},
  {name:'Frida E. Polli', role:'Research Scientist', affiliation:'MIT'},
  {name:'David Pépin', role:'Associate Professor of Surgery', affiliation:'Harvard Medical School / MGH'},
  {name:'Marina Sirota', role:'Professor of Pediatrics', affiliation:'UCSF'},
  {name:'Cecilia Lindgren', role:'Genomics researcher', affiliation:'University of Oxford'},
  {name:'Diana R. Dou', role:'Assistant Professor', affiliation:'Duke University'},
  {name:'Anas Zafar', role:'Research Associate', affiliation:'MD Anderson Cancer Center'},
  {name:'Aviv Solan', role:'Research collaborator', affiliation:'Columbia / FMML'}
];
const grid = document.querySelector('#people-grid');
if(grid){
  proposedOrganizers.forEach(person => {
    const card=document.createElement('article');card.className='person-card';
    const avatar=document.createElement('div');avatar.className='avatar';avatar.textContent=person.name.split(' ').map(s=>s[0]).slice(0,2).join('');
    const info=document.createElement('div');const name=document.createElement('h3');name.textContent=person.name;
    const role=document.createElement('p');role.textContent=person.role;const affiliation=document.createElement('small');affiliation.textContent=person.affiliation;
    info.append(name,role,affiliation);card.append(avatar,info);grid.appendChild(card);
  });
}
const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('#primary-nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'✕':'☰';});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰';}));}
