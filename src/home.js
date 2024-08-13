const content = document.getElementById('content');
function appear (){
content.style.backgroundColor = 'rgb(255, 255, 255,0.3)';
content.style.color = 'black';
content.style.width = '100%';
content.style.height = '300px';

const h1 = document.createElement('h1')
h1.innerText = "Welcome to our RESTURANT website"
h1.style.fontSize = '50px'
h1.style.textAlign = 'center'
h1.style.padding = '100px'
h1.style.marginTop = '100px'


content.appendChild(h1)
}

export {
    appear
}