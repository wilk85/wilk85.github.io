document.addEventListener("DOMContentLoaded", (event)=> {
    console.log("DOM fully loaded and parsed");
});

let submitButton = document.getElementById('submit1');

let inputWindow = document.getElementById('input1').addEventListener('input', (e)=>{
    if(e.target.value == 0){
        // console.log(e.target.value);
        console.log('jest pusto');
    };    
});

// OBSŁUGA PRZYCISKÓW
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
});
};

hideDiv('arrowr', 'box-container');
hideDiv('btn-h', 'container-box-background');
hideDiv('btn-h', 'container-weather');



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
//     });
// };

// getCity('cracow');




// obliczanie prędkości wiatru z m/s na km/h
//(value/1000).toFixed(2)*3600




// let subYes = submitButton.disabled = true;

// inputWindow.addEventListener('keyup', function(){
//     if(inputWindow.value.length < 1){
//         console.log('zablokowany');
//         // submitButton.disabled = true;
//         // submitButton.classList.add('buttonDisabled'); 
//         // inputWindow.classList.add('inputDisabled');
//     } else if(inputWindow.value.length > 1){
//         console.log('odblokowany');
//         // submitButton.disabled = false;
//         // submitButton.classList.remove('buttonDisabled'); 
//         // inputWindow.classList.remove('inputDisabled');
//     };
// });


const pobierzDane = () => {
    // console.log(document.getElementById('input1').value);
    let data = document.getElementById('input1').value;
    document.getElementById('msg-right').innerText = data;
    document.getElementById('container-message').classList.add('none');
    document.getElementById('message').classList.add('visible');

    //jesli imię zostało wpisane w pole, to elementy input zostaną schowane
    // if(data.value.length > 1){
    //     document.getElementById('submit1').disabled = true;
    //     document.getElementById('info-text').innerText('Podaj poprawne imię');
    // } else {
        
    //     document.getElementById('username-div').style.display = 'none';
    // }
  };

document.getElementById('submit1').addEventListener('click', pobierzDane);





