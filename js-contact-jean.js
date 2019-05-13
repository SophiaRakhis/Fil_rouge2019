function bouton (){
    var jeclique = document.getElementById("formulaire");
    console.log(jeclique);
    jeclique.style.display = "inline";
}
var button = document.getElementById("cliquemoi");
console.log(button);
button.addEventListener('click', bouton);

