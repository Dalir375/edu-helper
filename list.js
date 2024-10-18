const btnNewSth = document.getElementById("new-list-btn")

function hideBtn(btn){
    btn.classList.add("hidden")
}

btnNewSth.addEventListener("click" , function(){
    hideBtn(btnNewSth)})