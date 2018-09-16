$(document).ready(function(){

    //
    //złoto
    
    $.getJSON('http://api.nbp.pl/api/cenyzlota', function(gold){
        $('#row0price').html(gold[0].cena);
        // console.log(gold);
    });
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

    // koniec złota

    // waluty

    function curr_val(curr_name, id){
        $.getJSON('https://api.nbp.pl/api/exchangerates/rates/A/'+curr_name , function(data){
            $('#'+id+'right').html(data.rates[0].mid.toFixed(3));
        });
    };

    curr_val('EUR', 1);
    curr_val('USD', 2);
    curr_val('GBP', 3);
    curr_val('CHF', 4);
    curr_val('CAD', 5);
    curr_val('RUB', 6);
    curr_val('CNY', 7);
    curr_val('NOK', 8);

    //koniec walut

    // tooltipy waluty

    function curr_hist(curr_name, id){
        $.getJSON('https://api.nbp.pl/api/exchangerates/rates/a/'+curr_name+ '/last/1/?format=json', function(data3){
            $('#tt-'+id).html(data3.rates[0].mid.toFixed(3));
        });
    };

    curr_hist('eur', 1);
    curr_hist('usd', 2);
    curr_hist('gbp', 3);
    curr_hist('chf', 4);
    curr_hist('cad', 5);
    curr_hist('rub', 6);
    curr_hist('cny', 7);
    curr_hist('nok', 8);
    
    //koniec tooltipy waluty
  
    //kryptowaluty

    function crypt_val(crypt_name, id){
        $.getJSON('https://min-api.cryptocompare.com/data/price?fsym=' +crypt_name+ '&tsyms=PLN', function(data){
            $('#'+id).html(data.PLN.toFixed(2));
        });
    };

    crypt_val('BTC', 'btc');
    crypt_val('BCH', 'bch');
    crypt_val('ETH', 'eth');
    crypt_val('DASH', 'dash');
    crypt_val('ZEC', 'zec');
    crypt_val('XMR', 'xmr');
    crypt_val('LTC', 'ltc');
    crypt_val('NEO', 'neo');

    //koniec kryptowaluty
    
    // tooltipy kryptowaluty

    function cryptChange(cr_name, id){
        $.getJSON('https://min-api.cryptocompare.com/data/dayAvg', { 
            fsym: cr_name, 
            tsym: 'PLN'
        }, function(result){
            $('#' + id).html(result.PLN.toFixed(2));
        });
        
    };
    cryptChange('BTC', 'tt-11');
    cryptChange('BCH', 'tt-12');
    cryptChange('ETH', 'tt-13');
    cryptChange('DASH', 'tt-14');
    cryptChange('ZEC', 'tt-15');
    cryptChange('XMR', 'tt-16');
    cryptChange('LTC', 'tt-17');
    cryptChange('NEO', 'tt-18');
    
    //koniec tooltipy kryptowaluty
 
    // TABY
    //gold

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
      

    //currency
    $.getJSON('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=PLN&limit=3', function(data5){

        // console.log(data5.Data);
        function data_day(day_nr){
            var fullDate = new Date(data5.Data[day_nr].time*1000).toLocaleDateString("sv-SE");
            console.log(fullDate);
            return fullDate;
        };
        
        function price_day(price_nr){
            var fullPrice = data5.Data[price_nr].close.toFixed(2);
            console.log(fullPrice);
            return fullPrice; 
        };
        
        data_day(0);
        data_day(1);
        data_day(2);
        data_day(3);//dzis

        $('#tt-11').html(price_day(2));
    });
        

    // setInterval(goldData, 10*(6*360000));
    
    
    //obliczenie sekund
    //21600 sekund = 6g
    // var c = (10*(6*360000)/1000) + ' sekundy';
    // console.log(c);
});

