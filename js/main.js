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
        name: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "walter-gordon-office-manager.jpg",
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "scott-estrada-developer.jpg",
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg",
    },
];

//console.log(membersOfTeam);

// Stampo i membri del team
for (let i = 0; i < membersOfTeam.length; i++) {
    // console.log(membersOfTeam[i].nome);
    // console.log(membersOfTeam[i].ruolo);
    // console.log(membersOfTeam[i].foto);
    
    //console.log(`Il ${i+1}° membro del team è ${membersOfTeam[i].nome}, lavora nel ruolo di ${membersOfTeam[i].ruolo} e questa è una sua foto: ${membersOfTeam[i].foto}`);

    const memberName = document.createElement("h3");
    memberName.textContent = membersOfTeam[i].name;

    const memberRole = document.createElement("p");
    memberRole.textContent = membersOfTeam[i].role;

    const memberPhoto = document.createElement("img");
    memberPhoto.src = `img/${membersOfTeam[i].photo}`;
    memberPhoto.alt = membersOfTeam[i].photo;

    boxTeam.append(memberName);
    boxTeam.append(memberRole);
    boxTeam.append(memberPhoto);
}
