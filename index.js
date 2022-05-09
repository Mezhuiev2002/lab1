const titl = document.getElementById('title');

titl.onclick = function() {
    let randomColor = '#'+ Math.floor(Math.random() * 19777215).toString(16);
    let randColor = '#'+ Math.floor(Math.random() * 19777215).toString(16);
    titl.style.backgroundColor = randColor;
    titl.style.color = randomColor;
}

const place = document.querySelector('.place');

place.onclick = function() {
    let randomColor = '#'+ Math.floor(Math.random() * 19777215).toString(16);
    let randColor = '#'+ Math.floor(Math.random() * 19777215).toString(16);
    place.style.backgroundColor = randColor;
    place.style.color = randomColor;
}

const image = document.querySelector('#city');
document.querySelector('.add').addEventListener('click', () => add());
document.querySelector('.remove').addEventListener('click', () => remove());
document.querySelector('.increase').addEventListener('click', () => increase());
document.querySelector('.decrease').addEventListener('click', () => decrease());

function increase() {
    if(image.classList.contains('small-size')) {
        image.classList.remove('small-size');
        image.classList.add('default-size');
    }
    else if(image.classList.contains('default-size')) {
        image.classList.remove('default-size');
        image.classList.add('big-size');
    }
    else {
        alert("You cannot increase the image anymore!");
        return
    }
}

function decrease() {
    if(image.classList.contains('big-size')) {
        image.classList.remove('big-size');
        image.classList.add('default-size');
    }
    else if(image.classList.contains('default-size')) {
        image.classList.remove('default-size');
        image.classList.add('small-size');
    }
    else {
        alert("You cannot decrease the image anymore!");
        return
    }
}

function remove() {
    if(image.classList.contains('show')) {
        image.classList.remove('show');
        image.classList.add('delete');
    }
}

function add() {
    if(image.classList.contains('delete')) {
        image.classList.remove('delete');
        image.classList.add('show');
    }
}