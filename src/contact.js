const content = document.getElementById('content');

function appear3(){
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
    const p4 = document.createElement('p');
    
    p0.innerText = 'About Us'
    p0.style.fontSize = '40px'
    p0.style.fontWeight = '800'
    p0.style.textAlign = 'center'
    p0.style.padding = '10px'
    p0.style.marginTop = '2px';

    p1.innerText = ' this is our resturant where we serve very delicious and fresh food we aspire to make our customers happy and satisfied with our food and service we hope you enjoy our food and you can contact us by the following address'
    p1.style.fontSize = '20px'
    p1.style.fontWeight = '800'
    p1.style.textAlign = 'center'
    p1.style.padding = '10px'
    p1.style.marginTop = '40px';

    p2.innerText = 'Address'
    p2.style.fontSize = '20px'
    p2.style.fontWeight = '800'
    p2.style.textAlign = 'center'
    p2.style.padding = '10px'
    p2.style.marginTop = '40px';

    p3.innerText = 'Phone Number : +91 1234567890'
    p3.style.fontSize = '20px'
    p3.style.fontWeight = '800'
    p3.style.textAlign = 'center'
    p3.style.padding = '10px'
    p3.style.marginTop = '40px';

    p4.innerText = 'Email : 6XQpU@example.com'
    p4.style.fontSize = '20px'
    p4.style.fontWeight = '800'
    p4.style.textAlign = 'center'
    p4.style.padding = '10px'
    p4.style.marginTop = '10px';


    content.appendChild(p0)
    content.appendChild(p1)
    content.appendChild(p2)
    content.appendChild(p3)
    content.appendChild(p4)

}

export {
    appear3
}