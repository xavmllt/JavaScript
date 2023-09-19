// function imc() {
//     var element = document.getElementById("age");
//     var n = element.value;


function imc() {
    var age = parseFloat(document.getElementById("age").value);
    var taille = Number(document.getElementById("taille").value);
    // Convertir la taille en m
    var tailm = taille/100;
    var poids = Number(document.getElementById("poids").value);

    if (age >= 18 && age <= 65){
        var imcc = poids/(tailm*tailm);
        // alert("Votre IMC est de : " + imcc);
        document.getElementById("imctxt").value = imcc;
     }else{
         alert("Vous n'avez pas l'âge requis pour calculer votre IMC")
     }
 }







        // function masseCorpo(a, b, c, age) {
        //     var age = parseInt(prompt("Rentrez votre âge : " ));
        //     var a = Number(prompt("Rentrez votre poids : " ));
        //     var b = Number(prompt("Rentrez votre taille en cm : " ));
        //     // Convertir cm en m
        //     var c = b/100;
        //     if (age >= 18 && age <= 65){
        //         return a/(c*c);
        //     }else{
        //         alert("Vous n'avez pas l'âge requis pour calculer votre IMC")
        //     }
        // }
        // console.log(masseCorpo());
    