function changeColor(color) {
    document.body.style.background = color;
}
changeColor("#18afd1")

//3 Au clic sur le bouton 1, supprimez le dernier <li> dans la liste 1.
//ul.removeChild(ul.lastElementChild);
const bouton_1 = document.getElementById('bouton-1');
const maListe = document.querySelector('#ma-liste');
const nouvelElement = document.createElement('li');
nouvelElement.textContent = 'Lorem';
maListe.appendChild(nouvelElement);

bouton_1.addEventListener('click', () => {
    maListe.removeChild(maListe.lastElementChild);
})


//5 Au clic sur le bouton 3, ajoutez une classe CSS au bouton 1 pour qu'il récupère une marge supérieure supplémentaire.
const bouton1 = document.querySelector('#bouton-1');
const bouton3 = document.querySelector('#bouton-3');
      
bouton3.addEventListener('click', function() {
bouton1.classList.add('marge-sup');
        });

//6 Au clic sur le bouton 4, changez de classe CSS pour qu'il change de couleur
const bouton4 = document.querySelector('#bouton-4');

  bouton4.addEventListener('click', function() {
    bouton4.classList.add('couleur-2');
  });


//7 Au clic sur le bouton 5, chargez l'image “background.jpg” en image de fond sur la section #section-1.

//8 Au survol du bouton 6, changez la couleur de tous les boutons en vert.
const boutons = document.querySelectorAll('button');
const bouton6 = document.querySelector('#bouton-6');

bouton6.addEventListener('mouseover', function() {
  boutons.forEach(function(bouton) {
    bouton.style.color = "green";
  });
});


//9 Annulez le clic sur le bouton 7 et changez sa couleur lors d'un double clic.
const bouton7 = document.querySelector('#bouton-7');

bouton7.addEventListener('click', function(event) {
  event.preventDefault();
});

bouton7.addEventListener('dblclick', function() {
  bouton7.style.backgroundColor = "red";
});









//10 Au clic sur le bouton 8, faites disparaître/apparaître tous les <h2> de la page

const bouton8 = document.querySelector('#bouton-8');
const titres = document.querySelectorAll('h2');

  bouton8.addEventListener('click', function() {
    titres.forEach(function(titre) {
      if (titre.style.display === "none") {
        titre.style.display = "block";
      } else {
        titre.style.display = "none";
      }
    });
  });





        


let liste = ['button1', 'button2', 'button3', 'button4', 'button5', 'button6', 'button7', 'button8'];
liste;

let sequence = [1, 1, 2, 3, 5, 8];











let inputValue = "";
const maDiv = document.querySelector("#maDiv");
let affichage = document.createElement("form");
let affichage1 = document.createElement("input");
affichage1.setAttribute("type","text");
affichage.append(affichage1);
document.body.append(affichage);
let affichage2 = document.createElement("p");
document.body.append(affichage2);


// comportement naturel = capacité de faire un submit sans présence de bouton
affichage.addEventListener("submit",e=>{
    console.log(e);  // - e evenement du submit
    e.preventDefault();  // ca empeche de rafrechire la page
    let par = document.createElement("p"); // on cre un element "p" et en le stock dans par ( ca dovienne objet)
    inputValue = affichage1.value; // on recuper la valeur d'input et en la stoc dans la variable inputValue
    par.innerText = inputValue; //on affiche dans le paragrapche la valeur d'iput Value
    document.body.append(par); // on ajut le paragraphe dans le body
});



let open = document.querySelector("#open")
open.addEventListener("click", ()=>{
    maDiv.classList.add("active");
})

let close = document.querySelector("#close")
close.addEventListener("click", ()=>{
    maDiv.classList.remove("active");
})

//récupérer la valeur rentrée dans 
//l'input et le stocker dans la variable inputValue 
//sur un évènement (soumission de formulaire submit, 
//ou quand on rentre des données dans l'input input)

// 2 param event et fct callback

