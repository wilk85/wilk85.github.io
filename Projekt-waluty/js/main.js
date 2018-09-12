$(document).ready(function(){

    //złoto
    $.getJSON('https://api.nbp.pl/api/cenyzlota/last/30/?format=json', function(data){
        // console.log(data);
        // console.log(' ' + data[0].data + ' <> : ' + data[0].cena);
        // console.log(' ' + data[9].data + ' <> : ' + data[9].cena);
        // console.log(' ' + data[19].data + ' <> : ' + data[19].cena);
        // console.log(' ' + data[29].data + ' <> : ' + data[29].cena);
        $('#gold-price').html(data[29].cena.toFixed(2));
        // $('#l-gold30').html(`
        // ${data[0].data} - ${data[0].cena.toFixed(2)} <br />
        // ${data[1].data} - ${data[1].cena.toFixed(2)} <br />
        // ${data[9].data} - ${data[9].cena.toFixed(2)} <br />
        // ${data[10].data} - ${data[10].cena.toFixed(2)} <br />
        // ${data[19].data} - ${data[19].cena.toFixed(2)} <br />
        // ${data[20].data} - ${data[20].cena.toFixed(2)} <br />
        // ${data[28].data} - ${data[28].cena.toFixed(2)} <br />
        // ${data[29].data} - ${data[29].cena.toFixed(2)} <br />
    
        // `)
        //rzad 1
        $('#row1date').html(data[22].data);
        $('#row1price').html(data[22].cena.toFixed(2));
        //rzad 2
        $('#row2date').html(data[23].data);
        $('#row2price').html(data[23].cena.toFixed(2));
        //rzad 3
        $('#row3date').html(data[24].data);
        $('#row3price').html(data[24].cena.toFixed(2));
        //rzad 4
        $('#row4date').html(data[25].data);
        $('#row4price').html(data[25].cena.toFixed(2));
        //rzad 5
        $('#row5date').html(data[26].data);
        $('#row5price').html(data[26].cena.toFixed(2));
        //rzad 6
        $('#row6date').html(data[27].data);
        $('#row6price').html(data[27].cena.toFixed(2));
        //rzad 7
        $('#row7date').html(data[28].data);
        $('#row7price').html(data[28].cena.toFixed(2));
        //rzad 8
        $('#row8date').html(data[29].data);
        $('#row8price').html(data[29].cena.toFixed(2));

     

    });
    // console.log('update');


    $.getJSON('https://api.nbp.pl/api/exchangerates/rates/A/EUR/', function(eur){
        // console.log(eur.rates[0].mid.toFixed(3)+'eur'); 
        $('#1right').html(eur.rates[0].mid.toFixed(3));
    });
    $.getJSON('https://api.nbp.pl/api/exchangerates/rates/A/USD/', function(usd){
        // console.log(usd.rates[0].mid.toFixed(3)+'usd'); 
        $('#2right').html(usd.rates[0].mid.toFixed(3));
    });
    $.getJSON('https://api.nbp.pl/api/exchangerates/rates/A/GBP/', function(gbp){
        // console.log(gbp.rates[0].mid.toFixed(3)+'gbp'); 
        $('#3right').html(gbp.rates[0].mid.toFixed(3));
    });
    $.getJSON('https://api.nbp.pl/api/exchangerates/rates/A/CHF/', function(chf){
        // console.log(chf.rates[0].mid.toFixed(3)+'chf'); 
        $('#4right').html(chf.rates[0].mid.toFixed(3));
    });
    $.getJSON('https://api.nbp.pl/api/exchangerates/rates/A/CAD/', function(cad){
        // console.log(cad.rates[0].mid.toFixed(3)+'cad'); 
        $('#5right').html(cad.rates[0].mid.toFixed(3));
    });
    $.getJSON('https://api.nbp.pl/api/exchangerates/rates/A/rub/', function(rub){
        // console.log(rub.rates[0].mid.toFixed(3)+'rub'); 
        $('#6right').html(rub.rates[0].mid.toFixed(3));
    });
    $.getJSON('https://api.nbp.pl/api/exchangerates/rates/A/cny/', function(cny){
        // console.log(cny.rates[0].mid.toFixed(3)+'cny'); 
        $('#7right').html(cny.rates[0].mid.toFixed(3));
    });
    $.getJSON('https://api.nbp.pl/api/exchangerates/rates/A/nok/', function(nok){
        // console.log(nok.rates[0].mid.toFixed(3)+'nok'); 
        $('#8right').html(nok.rates[0].mid.toFixed(3));
    });

    // tooltipy waluty

    $.getJSON('http://api.nbp.pl/api/exchangerates/rates/a/eur/last/10/?format=json', function(eur2){
        // console.log(data3.rates[8].mid);
        $('#tt-1').html(eur2.rates[8].mid.toFixed(3));
    });
    $.getJSON('http://api.nbp.pl/api/exchangerates/rates/a/usd/last/10/?format=json', function(usd2){
        // console.log(data3.rates[8].mid);
        $('#tt-2').html(usd2.rates[8].mid.toFixed(3));
    });
    $.getJSON('http://api.nbp.pl/api/exchangerates/rates/a/gbp/last/10/?format=json', function(gbp2){
        // console.log(data3.rates[8].mid);
        $('#tt-3').html(gbp2.rates[8].mid.toFixed(3));
    });
    $.getJSON('http://api.nbp.pl/api/exchangerates/rates/a/chf/last/10/?format=json', function(chf2){
        // console.log(data3.rates[8].mid);
        $('#tt-4').html(chf2.rates[8].mid.toFixed(3));
    });
    $.getJSON('http://api.nbp.pl/api/exchangerates/rates/a/cad/last/10/?format=json', function(cad2){
        // console.log(data3.rates[8].mid);
        $('#tt-5').html(cad2.rates[8].mid.toFixed(3));
    });
    $.getJSON('http://api.nbp.pl/api/exchangerates/rates/a/rub/last/10/?format=json', function(rub2){
        // console.log(data3.rates[8].mid);
        $('#tt-6').html(rub2.rates[8].mid.toFixed(3));
    });
    $.getJSON('http://api.nbp.pl/api/exchangerates/rates/a/cny/last/10/?format=json', function(cny2){
        // console.log(data3.rates[8].mid);
        $('#tt-7').html(cny2.rates[8].mid.toFixed(3));
    });
    $.getJSON('http://api.nbp.pl/api/exchangerates/rates/a/nok/last/10/?format=json', function(nok2){
        // console.log(data3.rates[8].mid);
        $('#tt-8').html(nok2.rates[8].mid.toFixed(3));
    });
    //kryptowaluty

    $.getJSON('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=PLN', function(btc){
        // console.log(btc.PLN.toFixed(2)+'btc');
        $('#btc').html(btc.PLN.toFixed(2));
    });
    $.getJSON('https://min-api.cryptocompare.com/data/price?fsym=BCH&tsyms=PLN', function(bch){
        // console.log(bch.PLN.toFixed(2)+'bch');
        $('#bch').html(bch.PLN.toFixed(2));
    });
    $.getJSON('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=PLN', function(eth){
        // console.log(eth.PLN.toFixed(2)+'eth');
        $('#eth').html(eth.PLN.toFixed(2));
    });
    $.getJSON('https://min-api.cryptocompare.com/data/price?fsym=DASH&tsyms=PLN', function(dash){
        // console.log(dash.PLN.toFixed(2)+'dash');
        $('#dash').html(dash.PLN.toFixed(2));
    });
    $.getJSON('https://min-api.cryptocompare.com/data/price?fsym=ZEC&tsyms=PLN', function(zec){
        // console.log(zec.PLN.toFixed(2)+'zec');
        $('#zec').html(zec.PLN.toFixed(2));
    });
    $.getJSON('https://min-api.cryptocompare.com/data/price?fsym=XMR&tsyms=PLN', function(xmr){
        // console.log(ltc.PLN.toFixed(2)+'ltc');
        $('#xmr').html(xmr.PLN.toFixed(2));
    });
    $.getJSON('https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=PLN', function(ltc){
        // console.log(neo.PLN.toFixed(2)+'neo');
        $('#ltc').html(ltc.PLN.toFixed(2));
    });
    $.getJSON('https://min-api.cryptocompare.com/data/price?fsym=NEO&tsyms=PLN', function(neo){
        // console.log(btg.PLN.toFixed(2)+'btg');
        $('#neo').html(neo.PLN.toFixed(2));
    });
    

    //Wstawić datę na stronę
    // var d = new Date();
    
    // $('.p-data')

    ///////////// data na strone





    // //generator całej tabeli walut nalezy podac literę tabeli, a,b,c
    // $.getJSON('https://api.nbp.pl/api/exchangerates/tables/a/', function(data){
    //     // console.log(chf.rates[0].mid.toFixed(3)); 
    //     console.log(data[0].rates);
    //     // $('#currentDolarVal').html(parseFloat(waluta.USD_PLN.val).toFixed(3));
    // });



    // $.getJSON('https://free.currencyconverterapi.com/api/v6/convert?q=USD_PLN&compact=y', function(usd){
    //     console.log(usd);
    //     $('#1right').html(parseFloat(usd.USD_PLN.val).toFixed(3));
    // });

    // $.getJSON('https://free.currencyconverterapi.com/api/v6/convert?q=GBP_PLN&compact=y', function(gbp){
    //     // console.log(gbp);
    // })
    // setInterval(goldData, 10*(6*360000));
    
    
    //obliczenie sekund
    //21600 sekund = 6g
    // var c = (10*(6*360000)/1000) + ' sekundy';
    // console.log(c);
});

