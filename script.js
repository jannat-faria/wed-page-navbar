let x = document.getElementById('manu');
let ManuBtn = document.querySelector('.ManuBtn');
let CloseBtn = document.querySelector('.CloseBtn');
function openMenu(){
    x.style.display =' block';
    ManuBtn.style.display = 'none';
    CloseBtn.style.display = 'block';
}

function closeMenu(){
    x.style.display =' none';
    ManuBtn.style.display = 'block';
    CloseBtn.style.display = 'none';
}