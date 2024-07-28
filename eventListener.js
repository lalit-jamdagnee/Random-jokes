let btn = document.getElementById('refresh');

function over(){
    btn.style.color = 'green';
    btn.style.opacity = 1;
    btn.style.fontSize = "15px";
}
function left(){
    btn.style.color = 'white';
    btn.style.opacity = 0.5;
    btn.style.fontSize = "14px";
}
let x = function(e){
    location.reload(true);
}
btn.addEventListener('mouseover', over);
btn.addEventListener('mouseout', left)
btn.addEventListener('click', x)