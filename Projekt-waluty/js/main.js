$(document).ready(function(){


    /* CENA ZŁOTA W GÓRNYM OKNIE --- SEKCJA LEWA GÓRA */
    $.getJSON('https://api.nbp.pl/api/cenyzlota', function(gold){
        $('#row0price').html(gold[0].cena);

        //WYŚWIETLANIE DATY POD KONTENEREM Z CENAMI ZŁOTA
        $('#data-l-out-g30').html(gold[0].data);
    });

    /* POBIERANIE KURSÓW ZŁOTA --- SEKCJA LEWA */
    /* KURSY ZŁOTA */
    function goldPrice(id, nr){
        $.getJSON('https://api.nbp.pl/api/cenyzlota/last/30/?format=json', function(data1){
            $('#row' +id+ 'date').html(data1[nr].data);
            $('#row' +id+ 'price').html(data1[nr].cena.toFixed(2));
        }
    )};

    goldPrice(1, 22);
    goldPrice(2, 23);
    goldPrice(3, 24);
    goldPrice(4, 25);
    goldPrice(5, 26);
    goldPrice(6, 27);
    goldPrice(7, 28);
    goldPrice(8, 29);

    /* DATA POD ZŁOTEM */
    
    /*  */


    /* POBIERANIE WALUT ORAZ TOOLTIPÓW WCZORAJSZYCH KURSÓW --- SEKCJA ŚRODEK */

    /* AKTUALNE KURSY WALUT i TOOLTIPY DO NICH */
    
    function curr_val(curr_name, id, day_nr){
        $.getJSON('https://api.nbp.pl/api/exchangerates/rates/A/'+curr_name+ '/last/2/?format=json', function(data){
            // console.log(data.rates);
            $('#'+id+'right').html(data.rates[day_nr].mid.toFixed(3));
            $('#tt-'+id).html(data.rates[day_nr-1].mid.toFixed(3));
        });
    };

    curr_val('EUR', 1, 1);
    curr_val('USD', 2, 1);
    curr_val('GBP', 3, 1);
    curr_val('CHF', 4, 1);
    curr_val('CAD', 5, 1);
    curr_val('RUB', 6, 1);
    curr_val('CNY', 7, 1);
    curr_val('NOK', 8, 1);
    /*  */
  

    /* DATA POD WALUTAMI */
    $.getJSON('https://api.nbp.pl/api/exchangerates/rates/A/usd', function(data){
        $('#data-mid-inner').html(data.rates[0].effectiveDate);
    });
    /*  */
    

    /* TOOLTIPY WCZORAJSZEGO KURSU KRYPTOWALUT */
    /* WYŚWIETLANIE CENY W TABIE OSTATNIE NOTOW. KRYPTO  */
    function crypto_val_tooltip(cr_name, id, id2, id3, id4, day_nr){
        $.getJSON('https://min-api.cryptocompare.com/data/histoday?fsym='+cr_name+'&tsym=PLN&limit=3', function(data){
            // console.log(data.Data);
            
            // console.log(new Date(data.Data[day_nr].time*1000).toLocaleDateString('sv-SE')); // dzisiaj
            // console.log(new Date(data.Data[day_nr-1].time*1000).toLocaleDateString('sv-SE')); // wczoraj
            // console.log(new Date(data.Data[day_nr-2].time*1000).toLocaleDateString('sv-SE')); // przedwczoraj
            // console.log(new Date(data.Data[day_nr-3].time*1000).toLocaleDateString('sv-SE')); // 3 dni wczesniej
            
            // console.log(data.Data[3].close);
            // console.log(data.Data[2].close);
            // console.log(data.Data[1].close);
            // console.log(data.Data[0].close);
            // console.log(data.Data[day_nr-3]);
            
            $('#'+id).html(data.Data[day_nr].close.toFixed(2));
            $('#tt-'+id2).html(data.Data[day_nr-1].close.toFixed(2));
            $('#crprice'+id3).html(data.Data[day_nr-2].close.toFixed(2));
            $('#crprice'+id4).html(data.Data[day_nr-3].close.toFixed(2));

        });
    };
                    // cr_name  id   i2 i3 i4 day_nr
    crypto_val_tooltip('BTC', 'btc', 11, 2, 1, 3);
    crypto_val_tooltip('BCH', 'bch', 12, 4, 3, 3);
    crypto_val_tooltip('ETH', 'eth', 13, 6, 5, 3);
    crypto_val_tooltip('DASH', 'dash', 14, 8, 7, 3);
    crypto_val_tooltip('ZEC', 'zec', 15, 10, 9, 3);
    crypto_val_tooltip('XMR', 'xmr', 16, 12, 11, 3);
    crypto_val_tooltip('LTC', 'ltc', 17, 14, 13, 3);
    crypto_val_tooltip('NEO', 'neo', 18, 16, 15, 3);

    /* DATA POD KRYPTOWALUTAMI */
    $.getJSON('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=PLN&limit=3', function(data){
        $('#data-currency').html(new Date(data.TimeTo*1000).toLocaleDateString('sv-SE'));
    });
    /*  */
   

    /* DOLNA SEKCJA / plik NEWS.CSS ------ DANE DLA TABÓW */

    /* ZŁOTO */
    function tab_gold(id){
        $.getJSON('https://api.nbp.pl/api/cenyzlota/last/28', function(data){
                $('#ghrow'+id).html(data[id-1].data);
                $('#ghprice'+id).html(data[id-1].cena.toFixed(2));
           
            });  
        };
    
    tab_gold('1');
    tab_gold('2');
    tab_gold('3');
    tab_gold('4');
    tab_gold('5');
    tab_gold('6');
    tab_gold('7');
    tab_gold('8');
    tab_gold('9');
    tab_gold('10');
    tab_gold('11');
    tab_gold('12');
    tab_gold('13');
    tab_gold('14');
    tab_gold('15');
    tab_gold('16');
    tab_gold('17');
    tab_gold('18');
    tab_gold('19');
    tab_gold('20');
 
    /* WYŚWIETLANIE DATY W TABIE OSTATNIE NOTOW. KRYPTO */
    $.getJSON('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=PLN&limit=3', function(data8){
        function data_yester(day_nr, i){    // od 0-1
            // console.log(new Date(data8.Data[day_nr].time*1000).toLocaleDateString('sv-SE'));
            var dataY = new Date(data8.Data[day_nr].time*1000).toLocaleDateString('sv-SE');
            
            for(i=i; i<17; i++){
                $('#crrow'+i++).html(dataY);
            };
        };

        data_yester(0, 1);
        data_yester(1, 2);
    });


    // setInterval(goldData, 10*(6*360000));
    
    //obliczenie sekund
    //21600 sekund = 6g
    // var c = (10*(6*360000)/1000) + ' sekundy';
    // console.log(c);
});

