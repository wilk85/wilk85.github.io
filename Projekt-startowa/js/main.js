document.addEventListener("DOMContentLoaded", (event)=> {
    console.log("DOM fully loaded and parsed");
});

window.onload = () =>{
    body.classList.add('img');
    back_img();
    timer();
    datePick();  
}

// ZMIENNE
let submit1 = document.getElementById('submit1');
let btnC = document.getElementById('btn-c');
let btnH = document.getElementById('btn-h');
let input1 = document.getElementById('input1');
let date1 = document.getElementById('date');
let body = document.body;

//



// FUNKCJE GŁÓWNE
const addClass = (id, id2)=>{ 
    document.getElementById(id).classList.add(id2);
};

const remClass = (id, id2)=>{
    document.getElementById(id).classList.remove(id2);
};

const addText = (id, text_val)=>{
    document.getElementById(id).innerText = text_val;
};


// UKRYCIE PRZYCISKU "UKRYJ"
addClass('btn-c', 'none');


const back_img = () =>{
    
    if(localStorage.image !== null){
        body.style.backgroundImage = localStorage.getItem('image');
    } else {
        // body.style.backgroundImage = 'url(../img/img1.jpg)';
    }
};

// let inputWindow = input1.addEventListener('input', (e)=>{
//     if(e.target.value == 0){
//         // console.log(e.target.value);
//         console.log('jest pusto');
//     };    
// });

// OBSŁUGA PRZYCISKÓW ZMIANY TŁA
const change = (box_id, img_nr)=>{ //box_id 1-8 / img_nr 1-18
    document.getElementById('box-'+box_id).addEventListener('click', ()=>{
        body.style.WebkitTransition = 'background-image 0.7s';
        body.style.MozTransition = 'background-image 0.7s';
        let curr_img = body.style.backgroundImage = "url('./img/img"+img_nr+".jpg')";
        localStorage.setItem('image', curr_img);
    });
};

change(1, 1);
change(2, 2);
change(3, 3);
change(4, 4);
change(5, 5);
change(6, 6);
change(7, 7);
change(8, 8);

//przyciski ukrywania divów  #btn-h, #box-label, #arrowr
const hideDiv = (btn_id, div_id) =>{
    document.getElementById(btn_id).addEventListener('click', ()=>{
        document.getElementById(div_id).classList.toggle('none');
    });
};

hideDiv('btn-h', 'container-box-background');
hideDiv('arrowr', 'box-container');
hideDiv('box-label', 'box-container');
hideDiv('btn-h', 'container-weather');

//zmiana nazwy na przycisku "Ukryj"
const btnToggle = () =>{
    if(btnH.innerText === 'Ukryj'){
       btnH.innerText = 'Pokaż'
    } else {
        btnH.innerText = 'Ukryj';
    } 
}

const getCity = (id) =>{
    $.getJSON('https://api.openweathermap.org/data/2.5/weather?lang=pl&id='+id+'&appid=933bc312dbd028cc8ece69aa3ac0d62c', function(pogoda){
        // console.log(pogoda);
        
        //miasto + konwersja z Krakow na Kraków *
        if(pogoda.name === 'Krakow'){
            document.getElementById('data-city').innerHTML = 'Kraków';
        }
        document.getElementById('sris').innerHTML = new Date(pogoda.sys.sunrise*1000).toLocaleTimeString().slice(0,5); //wschód
        document.getElementById('sset').innerHTML = new Date(pogoda.sys.sunset*1000).toLocaleTimeString().slice(0,5); //zachód
        document.getElementById('pre').innerHTML = pogoda.main.pressure; //cisnienie hpa
        document.getElementById('app').innerHTML = pogoda.main.humidity; //wilgotnosc
        document.getElementById('vis').innerHTML = pogoda.visibility.toFixed(1)/1000; //widoczność
        document.getElementById('data-temp').innerHTML = (pogoda.main.temp-273.15).toFixed(1); //aktualna temp *
        //opis
        if((pogoda.weather[0].description).length > 11){
            document.getElementById('desc').innerHTML = pogoda.weather[0].description.slice(0,30);
            document.getElementById('desc').style.fontSize = '0.7em';
            document.getElementById('desc').style.fontWeight = '400';
        } else {
            document.getElementById('desc').innerHTML = pogoda.weather[0].description.slice(0,12);
        }
        document.getElementById('wspd').innerHTML= ((pogoda.wind.speed)*3.6).toFixed(2); //prędkosć wiatru *
     
    });
};
// getCity('3094802');
// odświeżanie danych z api co 10 min
setInterval(getCity('3094802'), 600*1000);

const pobierzDane = () => {
    
    let newName = input1.value;
    let response = document.getElementById('response');
    console.log(response);
    if(newName.length <= ''  || newName.length === null){
        response.classList.remove('none');
        return false;
    } else {    
        localStorage.setItem('name', newName);
        response.classList.add('none');
    }

    addText('msg-right', localStorage.getItem('name'));
    addClass('container-message', 'none');
    addClass('message', 'visible');
    remClass('btn-c', 'none');
};

//pobieranie danych z inputa
submit1.addEventListener('click', pobierzDane);

//sprawdzanie czy jest pusty localStorage, czy imię zostało wpisane wcześniej
if(localStorage.getItem('name') === null){
    // console.log(localStorage);
//jeśli localStorage nie jest pusty, podaje informacje z poprzedniego zapisu
} else {
    addText('msg-right', localStorage.getItem('name'));
    addClass('container-message', 'none');
    addClass('message', 'visible');
    remClass('btn-c', 'none');
    // console.log(localStorage);
}

btnC.addEventListener('click', ()=>{
    localStorage.clear();
    remClass('container-message', 'none');
    remClass('message', 'visible');
    addText('msg-right', '');
    addClass('btn-c', 'none');
    input1.value = '';
    // console.log(localStorage);
});

//Zegar - format 12:01
let timer = () =>{
    let nd = new Date();
    let options = {
        hour: '2-digit',
        minute: '2-digit',
    }
    addText('clock', nd.toLocaleTimeString('pl-PL', options));
};
setInterval(timer, 1000);

// Pokazywanie daty w konterze date // format Środa 03.10
const datePick = ()=>{
    let options = {
        weekday: 'long',
        day: '2-digit',
        month: '2-digit'
    }
    let d = new Date().toLocaleDateString('pl-PL', options);
    addText('date', d);
};
setInterval(datePick, 3600*1000);