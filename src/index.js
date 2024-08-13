import './styles.css';
import {appear} from './home.js';

import {appear2} from './menu.js';

import {appear3} from './contact.js'

appear()
const content = document.getElementById('content');
const home = document.querySelector('.home');

home.addEventListener('click', ()=>{
    content.innerText = '';
    content.style = '';
    appear()

})
 const menu = document.querySelector('.menu');

menu.addEventListener('click', ()=>{
    content.innerText = '';
    appear2()
})

const contact = document.querySelector('.about');

contact.addEventListener('click', ()=>{
    content.innerText = '';
    appear3()
})