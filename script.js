const PASS='f.energyatomic';
const login=document.getElementById('login'),panel=document.getElementById('panel'),input=document.getElementById('password'),error=document.getElementById('error');
function enter(){if(input.value===PASS){login.classList.add('hidden');panel.classList.remove('hidden');sessionStorage.setItem('admin_ok','1');error.textContent='';input.value=''}else{error.textContent='رمز عبور اشتباه است.';input.value='';input.focus()}}
document.getElementById('loginBtn').onclick=enter;input.addEventListener('keydown',e=>{if(e.key==='Enter')enter()});
if(sessionStorage.getItem('admin_ok')==='1'){login.classList.add('hidden');panel.classList.remove('hidden')}
document.getElementById('logout').onclick=()=>{sessionStorage.removeItem('admin_ok');panel.classList.add('hidden');login.classList.remove('hidden');input.focus()};
const modal=document.getElementById('modal'),mt=document.getElementById('mt');document.querySelectorAll('.card').forEach(c=>c.onclick=()=>{mt.textContent=c.dataset.title;modal.classList.remove('hidden')});document.getElementById('close').onclick=()=>modal.classList.add('hidden');document.getElementById('ok').onclick=()=>modal.classList.add('hidden');
