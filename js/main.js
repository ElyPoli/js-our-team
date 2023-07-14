/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
- Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
- Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
- Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
- Trasformare la stringa foto in una immagine effettiva

BONUS 2:
- Organizzare i singoli membri in card/schede
*/

// Dichiaro variabili
const boxTeam = document.querySelector("#box-team");

const membersOfTeam = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg",
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg",
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg",
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg",
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg",
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg",
    },
];

//console.log(membersOfTeam);

for(let i = 0; i < membersOfTeam.length; i++) {
    // console.log(membersOfTeam[i].nome);
    // console.log(membersOfTeam[i].ruolo);
    // console.log(membersOfTeam[i].foto);

    //console.log(`Il ${i+1}° membro del team è ${membersOfTeam[i].nome}, lavora nel ruolo di ${membersOfTeam[i].ruolo} e questa è una sua foto: ${membersOfTeam[i].foto}`);

    boxTeam.innerHTML += `<p>Il ${i+1}° membro del team è ${membersOfTeam[i].nome}, lavora nel ruolo di ${membersOfTeam[i].ruolo} e questa è una sua foto: ${membersOfTeam[i].foto}</p>`;
}

