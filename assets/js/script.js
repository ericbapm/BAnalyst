(function(){var r=document.documentElement,k='ek-theme',s=null;
try{s=localStorage.getItem(k)}catch(e){}
if(!s&&window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches)s='dark';
if(s)r.setAttribute('data-theme',s);
document.getElementById('theme').addEventListener('click',function(){var n=r.getAttribute('data-theme')==='dark'?'light':'dark';r.setAttribute('data-theme',n);try{localStorage.setItem(k,n)}catch(e){}});
var m=document.getElementById('menu'),u=document.getElementById('links');
m.addEventListener('click',function(){var o=u.classList.toggle('open');m.setAttribute('aria-expanded',o)});
u.addEventListener('click',function(){u.classList.remove('open');m.setAttribute('aria-expanded','false')});
var els=document.querySelectorAll('.rv');
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.1});els.forEach(function(e){io.observe(e)})}else els.forEach(function(e){e.classList.add('in')});
})();
