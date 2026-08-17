const body=document.body,nav=document.querySelector('.nav'),menu=document.querySelector('.menu-toggle'),theme=document.querySelector('.theme-toggle');
if(localStorage.getItem('dtech-theme')==='light')body.classList.add('light');
theme?.addEventListener('click',()=>{body.classList.toggle('light');localStorage.setItem('dtech-theme',body.classList.contains('light')?'light':'dark')});
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('menu-open');menu.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('menu-open')));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.1});document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
document.getElementById('year')&&(document.getElementById('year').textContent=new Date().getFullYear());
document.getElementById('contactForm')?.addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.currentTarget);const text=`Bonjour DTech,%0A%0ANom : ${encodeURIComponent(f.get('name'))}%0AEmail : ${encodeURIComponent(f.get('email'))}%0A%0ABesoin : ${encodeURIComponent(f.get('message'))}%0A%0AMerci.`;window.open(`https://wa.me/243818238660?text=${text}`,'_blank','noopener')});
