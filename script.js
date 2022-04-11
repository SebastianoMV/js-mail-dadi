const mailList = ['marco@gmail.com', 'carlo@gmail.com', 'michele@gmail.com', 'gabriele@gmail.com', 'manuel@gmail.com', 'agostino@gmail.com', 'silvia@gmail.com']


// 1 leggere la mail dell'utente
// 2 confrontarla con gli elemente dell'array lista
// 3 stampare a schermo se presento o no

const btnStartEmail = document.querySelector('#btnEmail');
const risultato = document.querySelector('h1');
const active = document.querySelector('.smv-container-dadi');

btnStartEmail.addEventListener('click', function(){

  const email = document.getElementById('email').value;
  console.log(email);
  let presenza = false;
  for(let i = 0; i < mailList.length; i++){
    if(mailList[i] == email){
      presenza = true;
    }
  };
  if (presenza == true){
    risultato.innerHTML = 'Benvenuto!'
    active.classList.remove('smv-hide');
  }else{
    risultato.innerHTML = 'Non sei registrato'
  }
});


//1 genera un numero random per il giocatore dopo avere premuto un bottone e uno per il pc
// 2 confrontare i due numeri per stabilire il vincitore
// 3 mostrare a video il vincitore
const btnStartDadi = document.querySelector('#btnDadi');
const dadoUtente = document.querySelector('.dadoUt');
const dadoPc = document.querySelector('.dadoPC');
const risultatoDadi = document.querySelector('h2');

btnStartDadi.addEventListener('click', function(){
  let numeroUt = Math.floor(Math.random() * 6); 
  let numeroPC = Math.floor(Math.random() * 6);
  dadoUtente.innerHTML = numeroUt;
  dadoPc.innerHTML = numeroPC;

  if (numeroUt < numeroPC){
    risultatoDadi.innerHTML = 'Hai perso!';
  } else if (numeroUt > numeroPC){
    risultatoDadi.innerHTML = 'Hai Vinto!';
  } else{
    risultatoDadi.innerHTML = 'Pareggio!';
  }
  
});




