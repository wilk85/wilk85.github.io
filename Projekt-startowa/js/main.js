document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
});

let submitButton = document.getElementById('submit1');
// let box1 = document.getElementById('box-1');
// let box2 = document.getElementById('box-2');
// let box3 = document.getElementById('box-3');
// let box4 = document.getElementById('box-4');

let inputWindow = document.getElementById('input1').addEventListener('input', function(e){
    if(e.target.value == 0){
        // console.log(e.target.value);
        console.log('jest pusto');
    };    
});


// OBSŁUGA PRZYCISKÓW
const change = (box_id, img_nr)=>{ //box_id 1-8 / img_nr 1-18
    document.getElementById('box-'+box_id).addEventListener('click', ()=>{
    document.body.style.backgroundImage = "url('../img/img"+img_nr+".jpg')";
    });
};

change(1, 18);
change(2, 14);
change(3, 12);
change(4, 8);
change(5, 10);
change(6, 2);
change(7, 4);
change(8, 3);

document.getElementById('arrowr').addEventListener('click', ()=>{
    document.getElementById('box-container').classList.toggle('none');
});

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


// const pobierzDane = () => {
//     // console.log(document.getElementById('input1').value);
//     let data = document.getElementById('input1');
    
//     document.getElementById('msg-right').innerText = data;
//     //jesli imię zostało wpisane w pole, to elementy input zostaną schowane
//     // if(data.value.length > 1){
//     //     document.getElementById('submit1').disabled = true;
//     //     document.getElementById('info-text').innerText('Podaj poprawne imię');
//     // } else {
        
//     //     document.getElementById('username-div').style.display = 'none';
//     // }
//   };

// document.getElementById('submit1').addEventListener('click', pobierzDane);





