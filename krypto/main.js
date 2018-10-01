let conta = document.querySelector('#container');
// let dni30 = document.querySelector('#dni30');

// let http = new XMLHttpRequest();
let http2 = new XMLHttpRequest();

// http.onreadystatechange = () =>{
//     if(http.readyState == 4 && http.status == 200 ){
//         let data =  JSON.parse(http.response);
   
//         let btcShow = (id1, id2, day_nr) => {
//             document.querySelector('#'+id1).innerHTML = new Date(data.Data[day_nr].time*1000).toLocaleDateString();
//             document.querySelector('#'+id2).innerHTML = data.Data[day_nr].close.toFixed(2);
//         }

//         btcShow('jeden', 'dwa', 0);
//         btcShow('trzy', 'cztery', 30);
//         btcShow('piec', 'szesc', 61);
//         btcShow('siedem', 'osiem', 92);
        

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
//     }
// };

// http.open('Get', 'https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=PLN&limit=92', true);
// http.send();


// historyczne
http2.onreadystatechange = () =>{
    if(http2.readyState == 4 && http2.status == 200 ){
        let data2 = JSON.parse(http2.response);

        const btcHist = (id, day_nr) =>{
            document.querySelector('#r'+id).innerHTML = new Date(data2.Data[day_nr].time*1000).toLocaleDateString('ru-RU');
            let row = document.querySelector('#r'+id+'1').innerHTML = data2.Data[day_nr].close.toFixed(2);
            // console.log('#r'+id, new Date(data2.Data[day_nr].time*1000).toLocaleDateString());
            if(row>28000){
                // console.log(row);
                document.querySelector('#r'+id+'1').style.color = '#f4427d';
            }
        }
        //kwiecien
        btcHist('april1', 0);
        btcHist('april2', 4);
        btcHist('april3', 9);
        btcHist('april4', 14);
        btcHist('april5', 19);
        btcHist('april6', 24);
        btcHist('april7', 29);
        //maj
        btcHist('may1', 30);
        btcHist('may2', 34);
        btcHist('may3', 39);
        btcHist('may4', 44);
        btcHist('may5', 49);
        btcHist('may6', 54);
        btcHist('may7', 60);
        //czerwiec
        btcHist('jun1', 61);
        btcHist('jun2', 65);
        btcHist('jun3', 70);
        btcHist('jun4', 75);
        btcHist('jun5', 80);
        btcHist('jun6', 85);
        btcHist('jun7', 90);
        //lipiec
        btcHist('jul1', 91);
        btcHist('jul2', 95);
        btcHist('jul3', 100);
        btcHist('jul4', 105);
        btcHist('jul5', 110);
        btcHist('jul6', 115);
        btcHist('jul7', 121);
        //sierpien
        btcHist('aug1', 122);
        btcHist('aug2', 126);
        btcHist('aug3', 131);
        btcHist('aug4', 136);
        btcHist('aug5', 141);
        btcHist('aug6', 146);
        btcHist('aug7', 152);
        //wrzesien
        btcHist('sep1', 153);
        btcHist('sep2', 157);
        btcHist('sep3', 162);
        btcHist('sep4', 167);
        btcHist('sep5', 172);
        btcHist('sep6', 177);
        btcHist('sep7', 182);
        
        
    }
};
http2.open('Get', 'https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=PLN&limit=183', true );
http2.send();
