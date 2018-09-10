
const pobierzDane = () => {
    // console.log(document.getElementById('input1').value);
   let data = document.getElementById('input1').value;
    document.getElementById('msg-right').innerText = data;
    //jesli imię zostało wpisane w pole, to elementy input zostaną schowane
    if(data != null){
        document.getElementById('username-div').style.display = 'none';
    }
  }

document.getElementById('submit1').addEventListener('click', pobierzDane);





