// calculator
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = string + '\r\n' + eval(string) + '\r\n';
      document.querySelector('.input').value = string;
    }
    else if(e.target.innerHTML == 'AC'){
      string = ""
      document.querySelector('.input').value = string;
    }
    else if(e.target.innerHTML == "↺"){
        string = string.substring(0, string.length -1);
        document.querySelector('.input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('.input').value = string;
      }
  })
});


//toggle js
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});



