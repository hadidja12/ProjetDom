// Code javascript
import { data } from "./data.js";
import { generateDialogHTML, generateProductHTML } from "./founction.js";
//Afficher la liste des produits

const productsContainer = document.querySelector(".produits");


const dialog = document.querySelector("dialog");
// dialog.showModal();



//Loop entre differents elements
const afficherProduit = (produits) =>{



    produits.forEach((produit) =>{
    const produitHTML = document.createElement("div");
    produitHTML.classList.add("carte-produit");
      
    produitHTML.setAttribute("data-id",produit.id);
    
     
    produitHTML.innerHTML = generateProductHTML(produit);
    

    productsContainer.appendChild(produitHTML);
});


};
afficherProduit(data);


//recherche un produit
const input = document.querySelector(".recherche");
input.addEventListener("keyup", (e) =>{
    console.log(e.target.value);
    const filtre = data.filter(p => p.nom.toLowerCase().includes(e.target.value));
    productsContainer.innerHTML ="";
    // condition pour rendre les produit
    if (filtre.length >0) {
        afficherProduit(filtre);
        
    } else {
        const vide = document.createElement("h3");
        vide.textContent ="Aucun produit touver";

        productsContainer.appendChild(vide);
        
    }
    // afficherProduit(filtre);

    
});
//Actions sur les produits

const cartes = document.querySelectorAll(".carte-produit");
cartes.forEach(produit =>{
    produit.addEventListener("click", ()=>{
        dialog.showModal();
        console.log(produit.dataset);
        
        const curentproduct = data.filter((p) =>p.id
            == produit.dataset.id)[0];

            const section = document.createElement("section");
            section.classList.add("dialog-menu");
            section.innerHTML = generateDialogHTML(curentproduct);
            dialog.appendChild(section);

            console.log(curentproduct);
        

    });

});
console.log(cartes);
// fermer le dialog
const close = document.querySelector(".close")
close.addEventListener("click", ()=>{
    dialog.close();
});





