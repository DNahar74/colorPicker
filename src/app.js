function pickColor() {
    red=Math.floor(Math.random()*256);
    green=Math.floor(Math.random()*256);
    blue=Math.floor(Math.random()*256);
    color=`rgb(${red},${green},${blue})`;
    return color
}

let btn=document.querySelector('button');

btn.addEventListener("click", ()=>{cr=pickColor();
btn.previousElementSibling.innerText=cr;
div=document.querySelector('div')
div.style.backgroundColor=cr;})