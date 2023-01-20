function valider(){
let mdp1=document.forms[0]['mdp1'].value;
    let mdp2=document.forms[0]['mdp2'].value;

    // on veut un minimum de 8 caracteres
    if(mdp1===mdp2 && mdp1.length>=8)
    {
            return true;

        // on veut aussi avoire des chiffres et des lettres
        // if(mdp1.contains([1-9],[a-z]))
    }
    else{
        alert("les mots de passe doivent etre identique  et contenir au  moins 8 caracteres");
        return false; //Empêcher l'envoie du formulaire0 c'est comme preventdefaulf
    }

}