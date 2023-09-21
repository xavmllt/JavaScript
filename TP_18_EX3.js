function buzfiz() {
    let i = 0;
        function nombre() {
            if(i<100){
                i++;
                verif();
                setTimeout(nombre, 200);    
            }
        }
        nombre();


        function verif() {
         if(i%3===0 && i%15===0){
                document.getElementById("txt").innerHTML="FizzBuzz";
             }else if(i%5===0){
                document.getElementById("txt").innerHTML="Buzz";
             }else if(i%3===0){
                document.getElementById("txt").innerHTML="Fizz";
             }else{
                document.getElementById("txt").innerHTML=i;
             }
            }
}



