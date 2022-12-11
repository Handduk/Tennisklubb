
//Tar elementet navLinks
let navLinks = document.getElementById("navLinks");

//Funktionen showenu gör att menyn visas när man trycker på hamburgareikonen
function showMenu(){
    navLinks.style.right = "0";
}

//Gömmer menyn
function hideMenu(){
    navLinks.style.right = "-200px";
}