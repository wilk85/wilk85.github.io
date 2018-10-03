document.addEventListener("DOMContentLoaded", (event)=> {
    console.log("DOM fully loaded and parsed");
});

window.onload = () =>{
    timer();
    datePick();
    addClass('btn-c', 'none');
}

// ZMIENNE
let submit1 = document.getElementById('submit1');
let btnC = document.getElementById('btn-c');
let btnH = document.getElementById('btn-h');
let input1 = document.getElementById('input1');
let date1 = document.getElementById('date');

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
// // //



// let inputWindow = input1.addEventListener('input', (e)=>{
//     if(e.target.value == 0){
//         // console.log(e.target.value);
//         console.log('jest pusto');
//     };    
// });

// OBSŁUGA PRZYCISKÓW ZMIANY TŁA
const change = (box_id, img_nr)=>{ //box_id 1-8 / img_nr 1-18
    document.getElementById('box-'+box_id).addEventListener('click', ()=>{
    document.body.style.backgroundImage = "url('./img/img"+img_nr+".jpg')";
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

//przycisk ukrywania divów
const hideDiv = (btn_id, div_id) =>{
    document.getElementById(btn_id).addEventListener('click', ()=>{
        document.getElementById(div_id).classList.toggle('none');    
        // console.log('działa');
        btnToggle();
    });
};

hideDiv('arrowr', 'box-container');
hideDiv('btn-h', 'container-box-background');
hideDiv('btn-h', 'container-weather');

// const btnToggle = (btnH)=>{
//     if(btnH.value == 'Ukryj'){
//         btnH.value = 'Pokaż';
//     } 
//     else if(btnH.value == 'Pokaż'){
//         btnH.value = 'Ukryj';
//     }
// };


// function getCity(city){
//     $.getJSON('https://api.weatherbit.io/v2.0/current?&city='+ city +'&country=PL&lang=pl&key=8e630ea59f8b4e0cb5d8c3389eb7c6f0', function(pogoda){
//         // console.log(pogoda);
//         console.log(pogoda.data[0].city_name); //miasto *
//         // console.log(pogoda.data[0].sunrise); //wschód
//         // console.log(pogoda.data[0].sunset); //zachód
//         // console.log(pogoda.data[0].pres); //cisnienie hpa
//         // console.log(pogoda.data[0].app_temp); //odczuwalna
//         // console.log(pogoda.data[0].vis); //widoczność
//         console.log(pogoda.data[0].temp); //aktualna temp *
//         // console.log(pogoda.data[0].weather.description); //opis *
//         // console.log((pogoda.data[0].wind_spd.toFixed(1))); //prędkosć wiatru *
       
//         document.getElementById('temp').innerHTML = pogoda.data[0].temp;

            // localStorage.setItem('weather', getCity);
//     });
// };

// getCity('cracow');

// obliczanie prędkości wiatru z m/s na km/h
//(value/1000).toFixed(2)*3600

const pobierzDane = () => {
    
    let newName = input1.value;
    if(newName){
        localStorage.setItem('name', newName);
    }

    addText('msg-right', localStorage.getItem('name'));
    addClass('container-message', 'none');
    addClass('message', 'visible');
    remClass('btn-c', 'none');
    console.log(localStorage);

};

submit1.addEventListener('click', pobierzDane);

//sprawdzanie czy jest pusty localStorage
if(localStorage.getItem('name') === null){
    console.log(localStorage);
//jeśli localStorage nie jest pusty, podaje informacje z poprzedniego zapisu
} else {
    addText('msg-right', localStorage.getItem('name'));
    addClass('container-message', 'none');
    addClass('message', 'visible');
    remClass('btn-c', 'none');
    console.log(localStorage);
}

btnC.addEventListener('click', ()=>{
    localStorage.clear();
    remClass('container-message', 'none');
    remClass('message', 'visible');
    addText('msg-right', '');
    addClass('btn-c', 'none');
    input1.value = '';
    console.log(localStorage);
});

//Zegar
let timer = () =>{
    let nd = new Date();
    let options = {
        hour: '2-digit',
        minute: '2-digit',
    }
    // console.log(nd.toLocaleTimeString());
    addText('clock', nd.toLocaleTimeString('pl-PL', options));
};
setInterval(timer, 1000);

// Pokazywanie daty w konterze date // format Środa 03.10
const datePick = ()=>{
    let options = {
        weekday: 'long',
        day: '2-digit',
        month: '2-digit'
    };
    let d = new Date().toLocaleDateString('pl-PL', options);
    addText('date', d);

};

setInterval(datePick, 3600*1000);






