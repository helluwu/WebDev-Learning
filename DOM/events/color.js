const btn = document.querySelector('button');
const h1 = document.querySelector('h1');

btn.addEventListener('click', function () {

    const color = makeColor();

    document.body.style.backgroundColor = color;

    h1.innerText = color;
})

function makeColor() {

    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}



