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
                  <h5 class="card-title" id="name">${descrition.name}</h5>
                  <p class="card-text" id="role">${descrition.role}</p>
                  <a class="card-text" id="email">${descrition.email}</a>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>`
  return membercard
}

//Ciclo ogni elemento presente nell'array di oggetti per inserirlo all'interno dell'html tramite il collegamento prima richiamato
for (let i = 0; i < teamMembers.length; i++) {
  let member = generatecardteam(teamMembers[i]);

  memberTeam.innerHTML += member
}



