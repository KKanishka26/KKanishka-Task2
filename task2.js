
const color1 = document.getElementById ('color1');
const color2 = document.getElementById ('color2');
const bodybg = document.getElementById ('bodybg');
const output = document.getElementById ('output');

function setbgcolor(){
    bodybg.style.background=
    "linear-gradient(to right," +color1.value+ "," +color2.value+ ")";
    output.textContent="Copy Your Code : "+bodybg.style.background+ "";

}

color1.addEventListener('input' , setbgcolor);

color2.addEventListener('input' , setbgcolor);

