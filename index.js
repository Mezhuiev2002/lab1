const titl = document.getElementById('c1');

titl.onmouseover = function() {
    let randomColor = '#'+ Math.floor(Math.random() * 19777215).toString(16);
    let randColor = '#'+ Math.floor(Math.random() * 19777215).toString(16);
    titl.style.backgroundColor = randColor;
    titl.style.color = randomColor;
}

const cell = document.getElementById('c7');
const cell2 = document.getElementById('c9');
const cell3 = document.getElementById('c11');


function setColor() {
    const color = document.getElementById("color");
}

cell.onclick = function() {
    cell.style.background = color.value;
}

cell.ondblclick = function() {
    cell.style.background = color.value;
    cell2.style.background = color.value;
    cell3.style.background = color.value;
}


let regName = /[А-Я-ІЄ][а-я-іє]{1,20}\s[А-Я-ІЄ]\.[А-Я-ІЄ]\./,
    regGroup = /[А-Я-ІЄ]{2}\-[1-9]{2}/,
    regNum = /\([0-9]{3}\)\-[0-9]{3}\-[0-9]{2}\-[0-9]{2}/,
    regAdress = /[м]\.\s[А-Я-ІЄ][а-я-іє]{1,20}/,
    regMail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;


let inpName = document.querySelector("#name");
let inpGroup = document.querySelector("#group");
let inpAdress = document.querySelector("#address");
let inpNum = document.querySelector("#num");
let inpMail = document.querySelector("#mail");

document.querySelector(".submit").onclick = function(e){
    e.preventDefault();
    if (regName.test(inpName.value) && regGroup.test(inpGroup.value) && 
        regAdress.test(inpAdress.value) && regMail.test(inpMail.value) && 
        regNum.test(inpNum.value) ) {
        console.log("corect");
        submit();
    }else {
        console.log("error");
    }

};

function submit(){
    confirm(`Ім'я: ${inpName.value}
Група: ${inpGroup.value}
Адреса: ${inpAdress.value}
Номер телефону: ${inpNum.value}
E-mail: ${inpMail.value}
`)
}