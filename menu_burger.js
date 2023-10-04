/* quand je clique sur l'icone */
let icons = document.getElementById('icons');

/* au clique j'aimerais que tu me sortes et cache la classe active */
icons.addEventListener("click", function(){
    nav.classList.toggle("active");
})

/* en cliquant sur un de ces boutons, la navbar se replace */
// pour ce faire on va pointer tous nos liens //
const links = document.querySelectorAll("nav, li"); /* je place toutes les balises enfants (li) dans la variable links */

links.forEach(link =>{ // ()=> équivaut à function(){}
    link.addEventListener("click", ()=>{ /* les trois <li>, je les appelle link qui est un paramètre, puis on ajoute un évènement click sur chacun des li, verifiable avec un console.log(links)*/
        nav.classList.remove("active"); // enfin, j'enlève la classe li si jamais on clique //
    })
})