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

// Creo le card dei membri del team
for (let i = 0; i < membersOfTeam.length; i++) {

    const memberCardBox = document.createElement("div");
    memberCardBox.classList.add("col-12", "col-sm-6", "col-lg-4");

    const memberCard = document.createElement("div");
    memberCard.classList.add("card", "border-0", "my-card", "m-3");

    const memberCardBody = document.createElement("div");
    memberCardBody.classList.add("card-body", "text-center");

    const memberPhoto = document.createElement("img");
    memberPhoto.src = `img/${membersOfTeam[i].photo}`;
    memberPhoto.alt = membersOfTeam[i].photo;
    memberPhoto.classList.add("card-img-top");

    const memberName = document.createElement("h5");
    memberName.textContent = membersOfTeam[i].name;
    memberName.classList.add("card-title", "fw-bold");

    const memberRole = document.createElement("p");
    memberRole.textContent = membersOfTeam[i].role;
    memberRole.classList.add("card-text");

    // Richiamo la funzione con cui stampo a schermo
    printMemberCard(memberCardBox, memberCard, memberCardBody, memberPhoto, memberName, memberRole);
}

// Funzione in cui stampo a schermo
function printMemberCard(memberCardBox, memberCard, memberCardBody, memberPhoto, memberName, memberRole) {
    boxTeam.append(memberCardBox);
    memberCardBox.append(memberCard);
    memberCard.append(memberPhoto);
    memberCard.append(memberCardBody);
    memberCardBody.append(memberName);
    memberCardBody.append(memberRole);
}