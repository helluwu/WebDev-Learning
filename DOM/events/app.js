const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log('u clicked yay');
}

const btn1 = document.querySelector('#v3');
btn1.addEventListener('mouseup', function () {
    alert('clicked');
})
//mouse up is when the key is released