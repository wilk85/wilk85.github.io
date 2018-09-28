let conta = document.querySelector('#container');
let dni30 = document.querySelector('#dni30');

let http = new XMLHttpRequest();

http.onreadystatechange = () =>{
    if(http.readyState == 4 && http.status == 200 ){
        let data =  JSON.parse(http.response);
   
        let btcShow = (id1, id2, day_nr) => {
            document.querySelector('#'+id1).innerHTML = new Date(data.Data[day_nr].time*1000).toLocaleDateString();
            document.querySelector('#'+id2).innerHTML = data.Data[day_nr].close.toFixed(2);
        }

        btcShow('jeden', 'dwa', 0);
        btcShow('trzy', 'cztery', 30);
        btcShow('piec', 'szesc', 61);
        btcShow('siedem', 'osiem', 92);

        // let btcOld = (id) =>{
        //     document.querySelector('#test').innerHTML = '<p>'+id+'</p>';     
        // }

        // btcOld(1);
        // btcOld(2);

        //SKRYPT WYPISUJĄCY WSZYSTKIE WARTOSCI W PRZEDZIALE OD DO
        // let range = (start, end) =>{
            // let arr = [];
            // for(let i=start; i<=end; i++){
            //     arr.push(i);
            //     conta.innerHTML += '<p class="parag"> ('+i+')' + ' - ' + new Date(data.Data[i].time*1000).toLocaleDateString()+ ' - ' + '<span>'+data.Data[i].close.toFixed(2)+'</span>'+'</p>';
                // console.log('('+i+')'+' -', new Date(data.Data[i].time*1000).toLocaleDateString(), data.Data[i].close.toFixed(2));
                // .innerHTML += '('+i+')'+' -';
                // dzien.innerHTML += new Date(data.Data[i].time*1000).toLocaleDateString();
                // cena.innerHTML += data.Data[i].close.toFixed(2);
        //     }
        // }
        // range(0,30);
    }
};

http.open('Get', 'https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=PLN&limit=92', true);
http.send();
