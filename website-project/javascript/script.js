burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
rightNav=document.querySelector('.rightNav')

burger.addEventListener('click',()=>{
    navbar.classList.toggle('v-class-resp');
    rightNav.classList.toggle('v-class-resp');


});