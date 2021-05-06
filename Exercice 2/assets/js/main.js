//CALCUL DE LA MOYENNE
function average(){
    let tabNote=new Array();
    let tabId=new Array("#note1", "#note2", "#note3", "#note4", "#note5");
    let avg=0;
    let i =0;
    for(i = 0; i<=4; i++){
        if(document.querySelector(`${tabId[i]}`).value < 0 || document.querySelector(`${tabId[i]}`).value > 20){
            return -1;
        }
        tabNote[i] = parseInt(document.querySelector(`${tabId[i]}`).value);
        avg += tabNote[i];
    }
    avg = avg/i;
    return avg;
}

//Vérification
const verif = (number) =>{
    if (number >= 0 && number < 10){
        $("#comment").html("Appréciation : En dessous de la moyenne.");
    }
    else if (number >= 10 && number < 13){
        $("#comment").html("Appréciation : Moyen.");
    }
    else if (number >= 13 && number < 16){
        $("#comment").html("Appréciation : Bien."); 
    }
    else if (number >= 16 && number < 20){
        $("#comment").html("Appréciation : Très bien.");
    }
    else if (number == 20){
        $("#comment").html("Appréciation : Excellent.");
    }
    else{
        $("#result").html(`Résultat : Aucunes données ou mauvaise données`);
        $("#comment").html("Appréciation : Aucunes données ou mauvaise données.");
    }
}


//MAIN FONCTION
const main = () =>{
    $("#result").html(`Résultat : ${average()}`);
    verif(average());
}