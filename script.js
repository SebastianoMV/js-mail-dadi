const mailList = ['marco@gmail.com', 'carlo@gmail.com', 'michele@gmail.com', 'gabriele@gmail.com', 'manuel@gmail.com', 'agostino@gmail.com', 'silvia@gmail.com']


// 1 leggere la mail dell'utente
// 2 confrontarla con gli elemente dell'array lista
// 3 stampare a schermo se presento o no

const btnStartEmail = document.querySelector('#btnEmail');
const risultato = document.querySelector('h1');

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
  }else{
    risultato.innerHTML = 'Non sei registrato'
  }

});
