const content = document.getElementById('content');

function appear2(){
 content.style.border = '1px solid black';
 content.style.width = '500px'
 content.style.height = '600px'
 content.style.backgroundColor = 'transparent';
 content.style.color = '#F7F240'
 content.style.marginTop = '20px'
 content.style.marginLeft = '450px'
 content.style.marginBottom = '20px'
 const p0 = document.createElement('p');
 const p1 = document.createElement('p');
 const p2 = document.createElement('p');
 const p3 = document.createElement('p');
 const brul = document.createElement('ul');
 const brli = document.createElement('li');
 const brli2 = document.createElement('li');
 const brli3 = document.createElement('li');
 const brli4 = document.createElement('li');

 const luul = document.createElement('ul');
 const luli = document.createElement('li');
 const luli2 = document.createElement('li');
 const luli3 = document.createElement('li');
 const luli4 = document.createElement('li');

 const diul = document.createElement('ul');
 const dil = document.createElement('li');
 const dil2 = document.createElement('li');
 const dil3 = document.createElement('li');
 const dil4 = document.createElement('li');

 p0.innerText = 'Menu'
 p0.style.fontSize = '40px'
 p0.style.fontWeight = '800'
 p0.style.textAlign = 'center'
 p0.style.padding = '10px'
 p0.style.marginTop = '2px';


 p1.innerText = 'Breakfast'
 p1.style.fontSize = '20px'
 p1.style.fontWeight = '800'
 p1.style.textAlign = 'center'
 p1.style.padding = '10px'
 p1.style.marginTop = '40px';

 brli.innerText = 'Pancakes'
 brli2.innerText = 'Eggs'
brli3.innerText = 'Waffles'
brli4.innerText = 'Chechebsa'

 p2.innerText = 'Lunch'
 p2.style.fontSize = '20px'
 p2.style.fontWeight = '800'
 p2.style.textAlign = 'center'
 p2.style.padding = '10px'
 p2.style.marginTop = '40px';

 luli.innerText = 'Rice'
 luli2.innerText = 'Salad'
 luli3.innerText = 'Shiro Wot'
 luli4.innerText = 'Doro Wot'

 p3.innerText = 'Dinner'
 p3.style.fontSize = '20px'
 p3.style.fontWeight = '800'
 p3.style.textAlign = 'center'
 p3.style.padding = '10px'
 p3.style.marginTop = '40px';

 dil.innerText = 'Rice'
 dil2.innerText = 'Salad'
 dil3.innerText = 'Shiro Wot'
 dil4.innerText = 'Doro Wot'

 content.appendChild(p0)
 content.appendChild(p1)
 content.appendChild(brul)
 brul.appendChild(brli)
 brul.appendChild(brli2)
 brul.appendChild(brli3)
 brul.appendChild(brli4)

 content.appendChild(p2)
 content.appendChild(luul)
 luul.appendChild(luli)
 luul.appendChild(luli2)
 luul.appendChild(luli3)
 luul.appendChild(luli4)
 
 content.appendChild(p3)
 content.appendChild(diul)
 diul.appendChild(dil)
 diul.appendChild(dil2)
 diul.appendChild(dil3)
 diul.appendChild(dil4)

}

export {
    appear2
}