const btnRoll = document.getElementById("btnRoll");
const txtRandom = document.getElementById("txtRandom");

btnRoll.onclick = function(){
    txtRandom.textContent = Math.floor(Math.random() * 21);
};