
function formuleAire(){
var element = document.getElementById("formule");
var n = element.value;

    switch(n) {
        case "carre" :
            carre();
            break;
        case "rectangle" :
            rectangle();
            break;
        case "triangle" : 
            triangle();
            break;
        case "parallelogramme" :
            parallélogramme();
            break;
        case "losange" :
            losange();
            break;
        case "trapeze" :
            trapeze();
            break;
        case "cercle" : 
            cercle();
            break;
        default:
            console.log("Pas de figure trouvé")
            break;
    }
}


function carre(){
    alert("Ceci est un carré");
}

function rectangle(){
    alert("Ceci est un rectangle");
}

function triangle() {
    alert("Ceci est un triangle");
}

function parallélogramme() {
    alert("Ceci est un parallélogramme");
}

function losange() {
    alert("Ceci est un losange");
}

function trapeze() {
    alert("Ceci est un trapeze");
}

function cercle() {
    alert("Ceci est un cercle");
}