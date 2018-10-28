window.onload = () => {

    setInterval(countDown, 1000);
}

const countDown = () =>{
    let teraz = new Date();
    let urodziny = new Date('12, 3, 2018');
    let czas = teraz.getTime();
    let wydarzenie = urodziny.getTime();
    let czasDoDaty = wydarzenie - czas;


    let s = Math.floor(czasDoDaty / 1000);
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);
    let d = Math.floor(h / 24);

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById('day').textContent = d;
    document.getElementById('hrs').textContent = h;
    document.getElementById('mins').textContent = m;
    document.getElementById('secs').textContent = s;

}
