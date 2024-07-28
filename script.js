let navBar = document.getElementsByClassName('navigation')[0]
navBar.style.background = 'black';
navBar.firstElementChild.style.color = 'orangered';
navBar.lastElementChild.style.color = 'green';

Array.from(document.getElementsByTagName('h3')).forEach((element) =>{
    element.style.background = 'black';
})