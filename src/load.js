const content = document.getElementById('content');
const body = document.querySelectorAll('body')
function appear (){
content.style.backgroundColor = 'transparent';
content.style.color = 'white';
content.style.width = '100%';
content.style.height = '300px';
const h1 = document.createElement('h1')
h1.innerText = "Welcome to our RESTURANT website"
h1.style.fontSize = '50px'
h1.style.textAlign = 'center'
h1.style.marginTop = '250px'

content.appendChild(h1)
}

export {
    appear
}