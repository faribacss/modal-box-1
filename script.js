const openBtn = document.querySelector('.Btn');
const closeBtn = document.querySelector('.closeBtn');
const modal = document.querySelector('.modal-container');

openBtn.addEventListener('click', ()=>{
    modal.style.display = 'block'; 
    modal.style.backgroundColor= 'rgba(31, 77, 17, 0.541)';
})
closeBtn.addEventListener('click', ()=>{
    modal.style.display = "none";
})
window.addEventListener('click', (e)=>{
    if (e.target == modal) {
        modal.style.display = "none";
    }
})