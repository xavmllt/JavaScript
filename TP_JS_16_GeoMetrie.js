
function formuleAire(){
var element = document.getElementById("formu");
var n = element.value;

    switch(n) {
        case "c*c" :
            carre();
            break;
         case "L*l" :
             rectangle();
             break;
         case "(L*l)/2" : 
             triangle();
             break;
        case "b*h" :
            parallélogramme();
             break;
         case "(D*d)/2" :
             losange();
             break;
         case "((b+B)*h)/2" :
             trapeze();
            break;
        case "π*r*r" : 
            cercle();
            break;
        default:
            document.getElementById("resul").value="Pas de figure trouvé";
            break;
    }
 }


function carre(){
    document.getElementById("resul").value = "Carré";
}

function rectangle(){
    document.getElementById("resul").value = "Rectangle";
}

function triangle() {
    document.getElementById("resul").value = "Triangle";
}

function parallélogramme() {
    document.getElementById("resul").value = "Parallélogramme";
}

function losange() {
    document.getElementById("resul").value = "Losange";
}

function trapeze() {
    document.getElementById("resul").value = "Trapeze";
}

function cercle() {
    document.getElementById("resul").value = "Cercle";
}

function message() {
    alert("Attention! Penses à bien écrire ta formule avec les opérateurs logique et les bonnes abréviations. Par exemple pour un rectangle : 'L*l'. ET PENSES AUX PARENTHESES !!");
}
