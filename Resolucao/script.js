document.cookie = 'firstname=Gustavo; expires=' + new Date(2021, 0, 1).toUTCString()
document.cookie = 'lastname=Oliveira; expires=' + new Date(2021, 0, 1).toUTCString()

let btn = document.querySelector('button');
let screenSize = document.querySelector('#screenSize');
let windowSize = document.querySelector('#windowSize');
let contentSize = document.querySelector('#contentSize');

btn.addEventListener('click', () =>{
    screenSize.innerText = `Screen Heigth: ${screen.height} - Screen Width: ${screen.width}`;
    windowSize.innerText = `Window Heigth: ${window.outerHeight} - Window Width: ${window.outerHeight}`;
    contentSize.innerText = `Content Heigth: ${window.innerHeight} - Content Widwh: ${window.innerWidth}`;
});