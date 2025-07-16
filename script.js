const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

//Primo passaggio 
//Recupero gli elementi dell'html che devo andare ad utilizzare

const memberTeam = document.getElementById(`memberTeam`);


//ciclo l'array per andare ad inserire la struttura html per ogni elemento 
function generatecardteam(descrition) {
  let membercard = `<div class="col-12 col-md-4">
  <div class="card mb-3">
  <div class="row g-0">
  <div class="col-md-4">
  <img src="${descrition.img}" class="img-fluid rounded-start h-100" alt="...">
                </div>
                <div class="col-md-8 bg-black">
                  <div class="card-body  text-white ">
                  <h5 class="card-title" >${descrition.name}</h5>
                  <p class="card-text" >${descrition.role}</p>
                  <a class="card-text" >${descrition.email}</a>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>`
  return membercard
}

//Ciclo ogni elemento presente nell'array di oggetti per inserirlo all'interno dell'html tramite il collegamento prima richiamato


//trasformo in una funzione che mi permette di essere richiamata alla creazione della pagina e una volta cliccato il bottone 
function generatecard() {
  for (let i = 0; i < teamMembers.length; i++) {

    let member = generatecardteam(teamMembers[i]);

    memberTeam.innerHTML += member
  }
}

//creo la funzione che mi permette di inserire un nuovo elemento all'html quando inserisco i dati all'interno della form 

//recupero l'elemento che mi scatena l'azione in questo caso il bottone

const button = document.getElementById(`confirm`);

//genero l'evento che deve generare la creazione di una nuova card

button.addEventListener(`click`, (e) => {
  e.preventDefault(); //prevengo la rigenerazione della pagina eliminando il comportamento di default del bottone
  //recupero i valori gli elementi dall'html



  //per ovviare al problema di duplicare tutto nuovamente svuoto prima di tutto quello che c'è nell'html per poi successivamente rimetterlo dentro

  memberTeam.innerHTML = ``;

  const name = document.getElementById(`name`).value;
  const role = document.getElementById(`role`).value;
  const email = document.getElementById(`email`).value;
  const img = document.getElementById(`img`).value;

  //aggiungo la condizione che non permette la creazione di slot vuoti

  generatecard();

  if (name === `` || role === `` || email === ``) {
    return;
  }

  const newmember = {
    name, role, email, img
  }

  teamMembers.push(newmember)
  //se richiamo la funzione senza svuotarla mi crea i ''doppioni'' degli elementi generati in precedenza, quindi svuoto l'html assegnandogli un valore vuoto per poi successivamente ''inniettargli'' la funzione

  //svuoto successivamente i campi
  document.getElementById(`name`).value = ``;
  document.getElementById(`role`).value = ``;
  document.getElementById(`email`).value = ``;
  document.getElementById(`img`).value = ``;


});

generatecard();
