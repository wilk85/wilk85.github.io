$(document).ready(function(){

    // var i = 0;
    // setInterval(function(){
   
    //     $.getJSON('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=PLN&limit='+i--, function(data){
    //         console.log(new Date(data.Data[0].time*1000).toLocaleDateString(), data.Data[0].close);
    //     });
        
    // }, 60*6000*24);



//aktualny czas co sekundę
    let timer = () =>{
        let nd = new Date();
        console.log(nd.toLocaleTimeString());
    };
    setInterval(timer, 1000);
////////////////////////////////
   


    // var dayMin = nowaData.getHours()+':'+nowaData.getMinutes();
    // var zeroH = '19:15';
    // console.log(parseInt(zeroH.getTime()) - dayMin.getTime());
    // console.log(dayMin); 
    // if(dayMin==zeroH){
    //     console.log('ding');
    // }

//godzina w stringu hh:mm:ss
//var nowaData = new Date();
//console.log(nowaData.toLocaleTimeString());

//godzina w milisekundach
// var teraz = nowaData.getTime();
// console.log(teraz);


//skrypt wyciągający wartości z dnia następnego
//60*6000*24 to doba, ustawić przy odświeżaniu co dobę

});



