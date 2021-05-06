//DECLARATION VARIABLES :
var pcPoints = 0;
var userPoints = 0;

//SELECTION DES ID BALISES IMG
var userImage = document.getElementById("imgUser");
var pcImage = document.getElementById("imgPC");
var soundImg = document.getElementById("sound");
//DECLARATION DES IMAGES
var pierreImg = "assets/img/pierre.jpg"
var feuilleImg = "assets/img/feuille.jpg"
var ciseauxImg = "assets/img/ciseaux.jpg"
var speakers = "assets/img/speaker.png"
var muted = "assets/img/sound.png"

//SELECTION DES DIFFERENT ID
var egality = document.getElementById("egality");
var defait = document.getElementById("defait");
var victory = document.getElementById("victory");
var win = document.getElementById("win");
var lose = document.getElementById("lose");
var resetbtn = document.getElementById("reset");
var launch = document.getElementById("launch");

//CHOIX IA
const iaChoice =() =>{
    let ramdom = Math.floor((Math.random() * 3)+1);

    if (ramdom == 1){
        return "pierre";
    }
    else if (ramdom == 2){
        return "feuille";
    }
    else{
        return "ciseaux";
    }
}

//COMPARAISON DES CHOIXS
const comparison = (user, pc) =>{
    //USER CHOICE = PIERRE
    if(user == "pierre" && pc == "pierre"){
        egality.classList.remove("d-none");
        userImage.src = pierreImg;
        pcImage.src = pierreImg;
        
        return 0;
    }
    else if(user == "pierre" && pc == "feuille"){
        defait.classList.remove("d-none");
        userImage.src = "assets/img/pierre.jpg";
        pcImage.src = "assets/img/feuille.jpg";
        
        return 2;
    }
    else if(user == "pierre" && pc == "ciseaux"){
        victory.classList.remove("d-none");
        userImage.src = "assets/img/pierre.jpg";
        pcImage.src = "assets/img/ciseaux.jpg";
        
        return 1;
    }

    //USER CHOICE = FEUILLE
    if(user == "feuille" && pc == "pierre"){
        victory.classList.remove("d-none");
        pcImage.src = "assets/img/pierre.jpg";
        userImage.src = "assets/img/feuille.jpg";
        return 1;
    }
    else if(user == "feuille" && pc == "feuille"){
        egality.classList.remove("d-none");
        userImage.src = "assets/img/feuille.jpg";
        pcImage.src = "assets/img/feuille.jpg";
        return 0;
    }
    else if(user == "feuille" && pc == "ciseaux"){
        defait.classList.remove("d-none");
        userImage.src = "assets/img/feuille.jpg";
        pcImage.src = "assets/img/ciseaux.jpg";
        return 2;
    }

    //USER CHOICE = CISEAUX
    if(user == "ciseaux" && pc == "pierre"){
        defait.classList.remove("d-none");
        pcImage.src = "assets/img/pierre.jpg";
        userImage.src = "assets/img/ciseaux.jpg";
        return 2; 
    }
    else if(user == "ciseaux" && pc == "feuille"){
        victory.classList.remove("d-none");
        pcImage.src = "assets/img/feuille.jpg";
        userImage.src = "assets/img/ciseaux.jpg";
        return 1;
    }
    else if(user == "ciseaux" && pc == "ciseaux"){
        egality.classList.remove("d-none");
        pcImage.src = "assets/img/ciseaux.jpg";
        userImage.src = "assets/img/ciseaux.jpg";
        return 0;
    }
}

//COMPTAGE DES POINTS
const points = (count) =>{
    if (count == 1){
        userPoints++;
        $('#userPoints').html(`VOUS : ${userPoints}`);
        if (userPoints == 3){
            return 1;
        }
    }
    else if (count == 2){
        pcPoints++;
        $('#pcPoints').html(`VOUS : ${pcPoints}`);
        if (pcPoints == 3){
            return 2;
        }
    } 
    
}
function countTotal(total){
    if (total == 1){
        win.classList.remove("d-none");
        document.getElementById("applause").play();
        launch.disabled = true;
        resetbtn.classList.remove("d-none");
    }
    else if (total == 2){
        lose.classList.remove("d-none");
        launch.disabled = true;
        resetbtn.classList.remove("d-none");
    } 
}

//RESET BUTTON
$("#reset").click(function(){
    pcPoints = 0;
    userPoints = 0;
    $('#pcPoints').html(`VOUS : ${pcPoints}`);
    $('#userPoints').html(`VOUS : ${userPoints}`);

    egality.classList.add("d-none");
    victory.classList.add("d-none");
    defait.classList.add("d-none");
    win.classList.add("d-none");
    lose.classList.add("d-none");
    resetbtn.classList.add("d-none");

    launch.disabled = false;
});

//FONCTION MAIN
$("#launch").click(function(){
    let userChoice = document.getElementById('choice').value;
    document.getElementById("ost").play();
    egality.classList.add("d-none");
    victory.classList.add("d-none");
    defait.classList.add("d-none");
    
    let count = comparison(userChoice, iaChoice());
    countTotal(points(count));
});

//Au chargement de la page
$( document ).ready(function() {
    
});

$("#sound").click(function(){

    if(soundImg.src != speakers){
        soundImg.src = muted;
    }
    else{
        soundImg.src = speakers;
    }
        
});