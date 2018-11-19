// 
// window.onload = () =>{

// }


// daty można ustawiać na dwa sposoby, definiowany ('miesiac 12, dzien 3, rok 2018)
// lub mozna ustawić bez cudzysłowia zaczynając od (rok 2018, miesiąc od 0 11, dzien 3, godzina 14

let users = {
    asia: {
        name: 'Asia',
        id: 1,
        ur: new Date(2018,11,3),
        // ur: new Date(2018,10,6),
        dataur: new Date(1983,11,3)
    },
    ania: {
        name: 'Ania',
        id: 2,
        ur: new Date(2018,10,3),
        dataur: new Date(1986,10,3)
    },
    kasia: {
        name: 'Kasia',
        id: 3,
        ur: new Date(2018,11,18),
        dataur: new Date(1991,11,18)
    },
    krzysiek: {
        name: 'Krzysiek',
        id: 4,
        ur: new Date(2018,08,19),
        dataur: new Date(1988,8,19)
    },
    marcin: {
        name: 'Marcin',
        id: 5,
        ur: new Date(2018,4,04),
        dataur: new Date(1988,4,04)
    },
    mama: {
        name: 'Mama',
        id: 6,
        ur: new Date(2018,3,29),
        dataur: new Date(1960,3,29)
    },
    tomek: {
        name: 'Tomek',
        id: 7,
        ur: new Date(2018,2,10),
        dataur: new Date(1980,2,10)
    },
    // testowa data dziś
    jutro: {
        name: 'test',
        id: 6,
        ur: new Date(2018,10,6)
    }
}



// przestawianie daty o rok do przodu jeśli data już wystąpiłą
// const newYear = (objName)=>{
//     let now = new Date()
//     let nowPlusYear = now.getFullYear()+1;
    
    // if(now.toDateString() >= name.toDateString()){
    //    name.setFullYear(nowadata);
    // } else {
    //     console.log(name + 'nie zostało zmienione');
    // }
    
    // if(now > name){
    //     name.ur.setFullYear(nowPlusYear);
    //     // return name;
    // }
    // console.log(objName.setFullYear(nowPlusYear));
    // console.log(objName.name);
    // console.log(objName.ur.setFullYear(nowPlusYear));
    // console.log(now + ' data dzisiaj ');
// }

// newYear(users.ania);
// newYear(marcin);
   
// }
// getName(users.asia);

const setIntCount = () => {

    // objName = element o nazwie (imie) z obiektu users
    // objName.id odpowiada temu samemu numerowi który jest przypisany jako id elementu html
    const counter = (objName) =>{
        
        let now = new Date();
        let time = now.getTime();
        let birthday = objName.ur.getTime();
        let timeTo = birthday - time;
        let nowPlusYear = now.getFullYear()+1;

        if(now > objName.ur){
            objName.ur.setFullYear(nowPlusYear);
            // return objName.ur;
        }
        
        let s = Math.floor(timeTo / 1000);
        let m = Math.floor(s / 60);
        let h = Math.floor(m / 60);
        let d = Math.floor(h / 24);

        h %= 24;
        m %= 60;
        s %= 60;

        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;

        document.getElementById('day'+objName.id).textContent = d;
        document.getElementById('hrs'+objName.id).textContent = h;
        document.getElementById('min'+objName.id).textContent = m;
        document.getElementById('sec'+objName.id).textContent = s;

    }
    
    counter(users.asia); 
    counter(users.ania);
    counter(users.kasia);
    counter(users.krzysiek);
    counter(users.marcin);
    counter(users.mama);
    counter(users.tomek);
}
    
setInterval(setIntCount,1000);

// WYŚWIETLANIE NAPISU W DANYM DNIU URODZIN
// name = imię z datą urodzin, idd = id diva w którym ma być wyświetlane info 
// box = 1-6
const showBirth = (objName) =>{
    let now = new Date();

// sprawdzamy czy data dzisiejsza jest równa dacie urodzin danego użytkownika
    if(now.toDateString() == objName.ur.toDateString()){
        // console.log(document.querySelectorAll('#box-1>.front>*'));
        let x = document.querySelectorAll('#box-'+objName.id+'>.front>*');
        for(var i=0; i<x.length; i++){
            x[i].style.display = 'none'; 
        }

        // zmniejszam o 1 id żeby dopasować do id diva
        document.getElementsByClassName('front')[objName.id-1].style.backgroundColor = '#d11689';
        document.getElementById('f'+objName.id).classList.add('birthd');
        document.getElementById('f'+objName.id).textContent = 'Nie zapomnij złożyć życzen!';
        
    }
    
}

showBirth(users.asia);
showBirth(users.ania);
showBirth(users.kasia);
showBirth(users.krzysiek);
showBirth(users.marcin);
showBirth(users.mama);
showBirth(users.tomek);


// obsługa przełącznika, obracanie pudełka z odliczaniem, 
const flipBox = (id) =>{
    document.getElementById('check'+id).addEventListener('click', () =>{
        if(document.getElementById('check'+id).checked){
            document.getElementById('box-'+id).classList.add('flip');
        } else {
            document.getElementById('box-'+id).classList.remove('flip');
        }
    })
}
flipBox('1');
flipBox('2');
flipBox('3');
flipBox('4');
flipBox('5');
flipBox('6');
flipBox('7');


// Wyswietlanie pelnej daty urodzin oraz wieku na tylnej czesci odwracanego diva
const bDate = (objName) =>{
    document.getElementsByClassName('full-date')[objName.id-1].textContent = objName.dataur.toLocaleDateString('ru-RU');
}

bDate(users.asia);
bDate(users.ania);
bDate(users.kasia);
bDate(users.krzysiek);
bDate(users.marcin);
bDate(users.mama);
bDate(users.tomek);

// wyswietlanie wieku w divie odwracanym
const personAge = (objName) =>{
    document.getElementsByClassName('age')[objName.id-1].textContent = (Math.floor((Date.now() - objName.dataur) / 31557600000));
}

personAge(users.asia);
personAge(users.ania);
personAge(users.kasia);
personAge(users.krzysiek);
personAge(users.marcin);
personAge(users.mama);
personAge(users.tomek);

const renderDiv = () => {


    // łapię kontenet flex-container który ma w sobie wszystkie okienka
    let flex_cont = document.getElementById('flex-container');
    // tworzę nowy element div o nazwie test 
    let check_main_cont = document.createElement('div');
    let flex_head = document.createElement('div');
    let birt_cont = document.createElement('div');
    let h41 = document.createElement('h4');

    let btns = document.createElement('div');
    let iplus = document.createElement('i');
    let iminus = document.createElement('i');


    let flex_mid = document.createElement('div');
    let checbox_cont = document.createElement('div');
    let inp_check = document.createElement('input');

    let main_cont = document.createElement('div');
    let parent1 = document.createElement('div');
    let front = document.createElement('div');
    let f1d1 = document.createElement('div');
    let f1d2 = document.createElement('div');
    let f1d3 = document.createElement('div');
    let f1d4 = document.createElement('div');
    let d1s1 = document.createElement('span');
    let d1s2 = document.createElement('span');
    let d2s1 = document.createElement('span');
    let d2s2 = document.createElement('span');
    let d3s1 = document.createElement('span');
    let d3s2 = document.createElement('span');
    let d4s1 = document.createElement('span');
    let d4s2 = document.createElement('span');
    let back = document.createElement('div');
    let full_date_cont = document.createElement('div');
    let age_cont = document.createElement('div');
    let fd1s = document.createElement('span');
    let fd2s = document.createElement('span');
    let a1s = document.createElement('span');
    let a2s = document.createElement('span');

    const classAdd = (el, cl_name) =>{
        el.className = cl_name;
    }

    classAdd(check_main_cont, 'check-main-container');
    classAdd(flex_head, 'flex-head');
    classAdd(flex_mid, 'flex-mid');
    classAdd(btns, 'buttons');
    classAdd(iplus, 'fas fa-plus');
    classAdd(iminus, 'fas fa-minus');
    classAdd(birt_cont, 'birt-container');
    classAdd(checbox_cont, 'checkbox-container');
    classAdd(inp_check, 'inp-check');
    classAdd(main_cont, 'main-container');
    classAdd(parent1, 'parent');
    classAdd(front, 'front flip-box');
    classAdd(f1d1, 'd1');
    classAdd(f1d2, 'd1');
    classAdd(f1d3, 'd1');
    classAdd(f1d4, 'd1');
    classAdd(d1s1, 'text');
    classAdd(d2s1, 'text');
    classAdd(d3s1, 'text');
    classAdd(d4s1, 'text');
    classAdd(back, 'back flip-box');
    classAdd(full_date_cont, 'full-date-container');
    classAdd(fd2s, 'full-date');
    classAdd(age_cont, 'age-container');
    classAdd(a2s, 'age');



    h41.textContent = 'Urodziny'; //+ birt_name;
    fd1s.textContent = 'Urodziny: ';
    a1s.textContent = 'Wiek: ';

    inp_check.type = 'checkbox';
    inp_check.id = 'check';//+ number
    parent1.id = 'box-';
    front.id = 'f';
    d1s1.id = 'day'//+number
    d2s1.id = 'hrs'//+number
    d3s1.id = 'min'//+number
    d4s1.id = 'sec'//+number

    

    // // dorzucanie nowych elementów do kontnenerów
    // flex_cont.appendChild(main_cont);
    check_main_cont.appendChild(flex_head);
    check_main_cont.appendChild(flex_mid);
    flex_head.appendChild(birt_cont);
    flex_head.appendChild(btns);
    btns.appendChild(iplus);
    btns.appendChild(iminus);
    birt_cont.appendChild(h41);

    flex_mid.appendChild(checbox_cont);
    checbox_cont.appendChild(inp_check);
    flex_mid.appendChild(main_cont);
    main_cont.appendChild(parent1);
    parent1.appendChild(front);
    front.appendChild(f1d1);
    front.appendChild(f1d2);
    front.appendChild(f1d3);
    front.appendChild(f1d4);
    f1d1.appendChild(d1s1);
    f1d1.appendChild(d1s2);
    f1d2.appendChild(d2s1);
    f1d2.appendChild(d2s2);
    f1d3.appendChild(d3s1);
    f1d3.appendChild(d3s2);
    f1d4.appendChild(d4s1);
    f1d4.appendChild(d4s2);
    parent1.appendChild(back);
    back.appendChild(full_date_cont);
    back.appendChild(age_cont);
    full_date_cont.appendChild(fd1s);
    full_date_cont.appendChild(fd2s);
    age_cont.appendChild(a1s);
    age_cont.appendChild(a2s);

    

    console.log(flex_cont);

    // <input type="checkbox" id="check1" class="inp-check"

   

    const addFullContainer = () =>{
        
        let cont_len = document.querySelectorAll('.check-main-container');
        let cont_id = cont_len.length;
        let minus_len = document.querySelectorAll('.fa-minus');
        let plus_len = document.querySelectorAll('.fa-plus');
        let minus_id = minus_len.length;
        let plus_id = plus_len.length;
        let checkbox_len = document.querySelectorAll('.inp-check'); // id check
        let checkbox_id = checkbox_len.length;
        let parent_len = document.querySelectorAll('.parent'); // id box
        let parent_id = parent_len.length;
        let front_len = document.querySelectorAll('.front'); // id f
        let front_id = front_len.length;
        let span_day_len = document.querySelectorAll('.spd'); // id day
        let span_day_id = span_day_len.length;
        let span_hrs_len = document.querySelectorAll('.sph'); // id hrs
        let span_hrs_id = span_hrs_len.length;
        let span_min_len = document.querySelectorAll('.spm'); // id min
        let span_min_id = span_min_len.length;
        let span_sec_len = document.querySelectorAll('.esps'); // id sec
        let span_sec_id = span_sec_len.length;

        // sprawdzam ilości poszczególnych elementów
        // const check_el_len = (el1) =>{
        //     console.log('ilość elementów - '+ el1+ ': ' + document.querySelectorAll('.'+el1).length);
        //     return document.querySelectorAll('.'+el1).length;
        // }

        // check_el_len('check-main-container');
        // check_el_len('inp-check');

        // console.log(`ilość kontenerów check-main-container: ${cont_id}`);
        // console.log(`ilość przycisków minus: ${minus_len.length}`);
        // console.log(`ilość przycisków plus: ${plus_len.length}`);
        // console.log('ilość checkboxów: ' + checbox_id);
        // console.log('ilość elementów parent: ' + parent_id);
        // console.log('ilość elementów front: ' + front_id);
        // console.log('ilość elementów span day: ' + span_day_id);
        // console.log('ilość elementów span hrs: ' + span_hrs_id);
        // console.log('ilość elementów span min: ' + span_min_id);
        // console.log('ilość elementów span sec: ' + span_sec_id);
        
        
        document.getElementsByClassName('fa-plus-square')[0].addEventListener('click', ()=>{
            flex_cont.appendChild(check_main_cont);
            let ddddd = document.getElementsByClassName('check-main-container')[cont_id++];
            let checkbox_id1 = document.getElementsByClassName('inp-check')[cont_id];
            let btnMinus = document.getElementsByClassName('fa-minus')[minus_id++];
            let btnPlus = document.getElementsByClassName('fa-plus')[plus_id++];
            
            ddddd.id = 'chk' + cont_id;
            console.log(checkbox_id1);

// naprawić to wyswietlanieb

            // checkbox_id.id = 'check' + cont_id;
            // console.log('chbox id: ' + checkbox_id);
            // parent_id.id = 'box-' + cont_id;
            // front_id.id = 'f' + cont_id;
            // span_day_id.id = 'spd' + cont_id;
            // span_hrs_id.id = 'sph' + cont_id;
            // span_min_id.id = 'spm' + cont_id;
            // span_sec_id.id = 'sps' + cont_id;
            // console.log(checbox_id);
            // console.log('kontener: ' + cont_id);
            // console.log('minus: ' + minus_id);
            // console.log('plus: ' + plus_id);
            // console.log(ddddd);
            // flipBox(cont_id);
            // return cont_id;
            // return [ddddd, btnMinus, btnPlus];
            
        });
    
     

        // if(addBtn()){
        //     let ids = addBtn();
        //     let nID1 = ids[0];
        //     let nID2 = ids[1];
        //     console.log(nID1, nID2);
        // }

        // const removeBtn = () =>{

        // }

        
        


        // let ddddd = document.getElementsByClassName('fa-minus')[cont_id];
        
        // ddd.addEventListener('click', ()=>{
        //     flex_cont.removeChild();
        //     cont_id--;
        // });
        // console.log(ddd);
        
    }
    addFullContainer();

    // 


}

renderDiv();

