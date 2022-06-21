var arrow = document.getElementById('arrow');
var dr = document.getElementById('dr');
var dw = document.getElementById('dw');

var turn = 'fal';

window.onscroll = function(){
    if(scrollY >= 400){
        arrow.style.display = 'block';
    }else{
        arrow.style.display = 'none';
    }
}
arrow.onclick = function(){
    scroll({
        top:0,
        left:0,
        behavior:"smooth"
    })
}

dr.onclick = function(){
    if(turn === 'fal'){
        dw.style.display = 'block';
        dr.style.color = 'black';
        turn = 'tru';
    }else if(turn = 'tru'){
        dw.style.display = 'none';
        dr.style.color = '#9d9fa0';
        turn = 'fal';
    }
}


// Select all HTML elements
let hh = document.querySelectorAll('h');
let div = document.querySelectorAll('div');
let p = document.querySelectorAll('p');
let span = document.querySelectorAll('span');



let tr = 0;





let nam = document.getElementById('na');
var gmail = document.getElementById('em');
var subject = document.getElementById('sub');
var button = document.getElementById('but');
let perrror = document.getElementById('perror');

button.onclick = function(){
if(nam.value !=''){
    perrror.innerHTML = '';
    if(subject.value != ''){
        perrror.innerHTML = '';
        window.open('mailto:ibrahimsalama281@gmail.com?subject='+subject.value+'&body=body');
    }else{
        perrror.innerHTML = 'Put your subject!';
    }
}else{
    perrror.innerHTML = 'Put your name!';
}



}



let a1 = document.getElementById('a1');
var a2 = document.getElementById('a2');
var a3 = document.getElementById('a3');
var a4 = document.getElementById('a4');
var a5 = document.getElementById('a5');
var a6 = document.getElementById('a6');

a1.onclick = function(){
    scroll({
        top:850,
        left:0,
        behavior:"smooth"
    })
}
a2.onclick = function(){
    scroll({
        top:530,
        left:0,
        behavior:"smooth"
    })
}
a3.onclick = function(){
    scroll({
        top:1300,
        left:0,
        behavior:"smooth"
    })
}
a4.onclick = function(){
    scroll({
        top:1900,
        left:0,
        behavior:"smooth"
    })
}
a5.onclick = function(){
    scroll({
        top:2550,
        left:0,
        behavior:"smooth"
    })
}
a6.onclick = function(){
    scroll({
        top:3200,
        left:0,
        behavior:"smooth"
    })
}

let ch = document.getElementById('ch');
let ph = document.getElementById('ch');

ch.onclick = function(){
    window.open('mailto:ibrahimsalama281@gmail.com?');
}
ph.onclick = function(){
    window.open('mailto:ibrahimsalama281@gmail.com?');
}

let date = new Date();
let date1 = date.getFullYear();

let footer2 = document.getElementById('footer2').innerHTML = date1;


