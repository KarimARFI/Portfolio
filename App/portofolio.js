'use strict';

/* ######################################################### */
/* DATE */
/* ######################################################### */
// création des tableaux.
let jour = new Array('Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam');
let mois = new Array('Jan', 'Fév', 'Mars', 'Avr', 'Mai', 'Juill', 'Juin,', 'Août', 'Sep', 'Oct', 'Nov', 'Déc');
// Création d'une instance de la classe "Date".
let today = new Date();

/* Affichage du contenu d'une partie du tableau directement dans la page HTML.
La méthode getDay() = renvoi un chiffre pour le jour de la semaine commence par 0 = dimanche.
La méthode getMonth() renvoi un chiffre pour le nom du mois commence par 0 = janvier. 
Selon les besoins on appel un des tableau avec la fonction native renvoyant un nombre en indice. ou simplement la fonction native de Date*/
document.getElementById("calendar").innerHTML = ' ' + jour[today.getDay()] + ' ' + today.getDate() + ' ' + mois[today.getMonth()] + ' ' + today.getFullYear();

/* ######################################################### */
/* POPOVER BOOSTRAP*/
/* ######################################################### */
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

/* ######################################################### */
/* TOAST BOOSTRAP*/
/* ######################################################### */
const toastTrigger = document.getElementById('ToastBtn')
const ToastDiv = document.getElementById('ToastDiv')

if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(ToastDiv)
    toastTrigger.addEventListener('click', () => {
        toastBootstrap.show()
    })
}

/* ######################################################### */
/* CONTROL DU FORMULAIRE DE CONTACT */
/* ######################################################### */
/* recuperation de l'objet form */
const formArray = document.forms["formContact"];
/* regex */
const regexText = /^[\wÀ-ÿ\s]{3,20}$/;
/* telephone doit commencer par 0 ne peut pas et suivi de 8 ou 9. doit suivre des groupe de 2 chiffres 4 fois */
const regexTelephone = /^0[1234567](?:\d{2}){4}$/;
/* mail doit commencer par 3 caractères mini, suivi d'un @, suive de 3 caracteresmini, suivi d'un point, suivi de 2 caractere mini */
const regexEmail = /^[a-zA-Z0-9._-]{3,}@([a-zA-Z0-9-]{3,}\.)+[a-zA-Z]{2,}$/;

/* function de validation */
formArray.addEventListener('submit', (event) => {
    /* blocage de l'envoi du mail si erreur dans la function */
    event.preventDefault();
    /* recupération des valeurs */
    const civilite = formArray.elements['civilite'].value;
    const nom = formArray.elements['nom'].value;
    const societe = formArray.elements['societe'].value;
    const telephone = formArray.elements['tel'].value;
    const email = formArray.elements['mail'].value;
    const message = formArray.elements['message'].value;
    const condition = formArray.elements['condition'].checked;
    /* condition  */
    if (!civilite) {
        afficheErreur('Veuillez choisir une civilité.');
        return;
    }
    if (!regexText.test(nom)) {
        afficheErreur('Le nom doit comporter entre 3 et 20 lettres.');
        return;
    }
    if (!regexText.test(societe)) {
        afficheErreur('Le nom de la société doit comporter entre 3 et 20 lettres.');
        return;
    }
    if (!regexTelephone.test(telephone)) {
        afficheErreur('Numéro de téléphone = 10 chiffres. doit commencer par 0 et ne peut pas être suivi d\'un 8 ou 9');
        return;
    }
    if (!regexEmail.test(email)) {
        afficheErreur('L\'adresse email n\'est pas valide. Elle doit être de type : nom @ domaine . ext');
        return;
    }
    if (message.length < 30 || message.length > 200) {
        afficheErreur('Le message doit comporter entre 30 et 200 caractères.');
        return;
    }
    if (!condition) {
        afficheErreur('Veuillez cocher et accepter les conditions.');
        return;
    }
    /* capture du bouton de validation */
    let btnValidation = document.querySelector("#btnValidation");
    /* ecoute du bouton btnValidation*/
    btnValidation.addEventListener('click', validFormContact);
    /* capture de la div toast */
    let toastElement = document.querySelector(".toast");

    function validFormContact(e) {
    if (verif) {
        /* création de l'objet toast bootrap */
        let toast = new bootstrap.Toast(toastElement);
        toast.show();
        formArray.submit();
        console.log("OK");
    } else {
        e.preventDefault();
        console.log("arret mail");
    }
}
    // Si tout est correct, envoie du formulaire
    
});
/* affichage des erreurs */
function afficheErreur(message) {
    const error = document.querySelector('.messInfo');
    error.textContent = message;
    error.style.visibility = "visible";
}
/* Compteur des caractères du textarea */
const messageInput = document.getElementById('message');
const nbrChar = document.getElementById('nbrChar');
messageInput.addEventListener('input', function () {
    nbrChar.innerHTML = messageInput.value.length;
});

/* ecoute au changement des champs du formulaire */
formArray["civilite"].addEventListener('change', verif)
formArray["nom"].addEventListener('change', verif)
formArray["societe"].addEventListener('change', verif)
formArray["tel"].addEventListener('change', verif)
formArray["mail"].addEventListener('change', verif)
formArray["message"].addEventListener('change', verif)
formArray["condition"].addEventListener('change', verif)
/* verification des champs différent de vide */
function verif(){
    if (formArray["civilite"].value != ""
        && formArray["nom"].value != ""
        && formArray["societe"].value != ""
        && formArray["tel"].value != ""
        && formArray["mail"].value != ""
        && formArray["message"].value != ""
        && formArray["condition"].checked == true) {
        btnValidation.removeAttribute('disabled');
        btnValidation.classList.remove("btn-secondary")
        btnValidation.classList.add("btn-success")
        return true;
    } else {
        /* setAttribute d'un attribut seul sans nom = valeur */
        document.querySelector("#btnValidation").setAttribute('disabled', '');
        btnValidation.classList.remove("btn-success")
        btnValidation.classList.add("btn-secondary")
        return false;
    }
}
