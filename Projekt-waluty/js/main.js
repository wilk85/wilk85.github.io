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
    function tooltip_crypto(cr_name, id, id2, day_nr){
        $.getJSON('https://min-api.cryptocompare.com/data/histoday?fsym='+cr_name+'&tsym=PLN&limit=1', function(data){
            // console.log(data.Data);
            
            // console.log(new Date(data.Data[0].time*1000).toLocaleDateString('sv-SE')); // wczoraj
            // console.log(new Date(data.Data[1].time*1000).toLocaleDateString('sv-SE')); // dzisiaj
            
            $('#'+id).html(data.Data[day_nr].close.toFixed(2));
            $('#tt-'+id2).html(data.Data[day_nr-1].close.toFixed(2));
        });
    };
    
    tooltip_crypto('BTC', 'btc', 11, 1);
    tooltip_crypto('BCH', 'bch', 12, 1);
    tooltip_crypto('ETH', 'eth', 13, 1);
    tooltip_crypto('DASH', 'dash', 14, 1);
    tooltip_crypto('ZEC', 'zec', 15, 1);
    tooltip_crypto('XMR', 'xmr', 16, 1);
    tooltip_crypto('LTC', 'ltc', 17, 1);
    tooltip_crypto('NEO', 'neo', 18, 1);

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

    /* WYŚWIETLANIE CENY W TABIE OSTATNIE NOTOW. KRYPTO  */
    function crypt_price_show(cry_name, day_nr, row_id){ // cry_name - dużymi liteami
        $.getJSON('https://min-api.cryptocompare.com/data/histoday?fsym='+cry_name+'&tsym=PLN&limit=3', function(data9){
            // console.log(data9.Data[day_nr].close);
            // console.log(new Date(data9.Data[1].time*1000).toLocaleDateString('sv-SE'));
            // console.log(data9.Data[1]);
            // console.log(data9.Data[1].close);
            $('#crprice'+row_id).html(data9.Data[day_nr].close.toFixed(2));

        });
    };

    crypt_price_show('BTC', 0, '1');
    crypt_price_show('BTC', 1, '2');
    crypt_price_show('BCH', 0, '3');
    crypt_price_show('BCH', 1, '4');
    crypt_price_show('ETH', 0, '5');
    crypt_price_show('ETH', 1, '6');
    crypt_price_show('DASH', 0, '7');
    crypt_price_show('DASH', 1, '8');
    crypt_price_show('ZEC', 0, '9');
    crypt_price_show('ZEC', 1, '10');
    crypt_price_show('XMR', 0, '11');
    crypt_price_show('XMR', 1, '12');
    crypt_price_show('LTC', 0, '13');
    crypt_price_show('LTC', 1, '14');
    crypt_price_show('NEO', 0, '15');
    crypt_price_show('NEO', 1, '16');
       

    // setInterval(goldData, 10*(6*360000));
    
    //obliczenie sekund
    //21600 sekund = 6g
    // var c = (10*(6*360000)/1000) + ' sekundy';
    // console.log(c);
});

