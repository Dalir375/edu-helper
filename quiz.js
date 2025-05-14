// Copyright (c) 2024-2025 Daniel Gałacewicz
//
// This software is released under the MIT License.
// SPDX-License-Identifier: MIT
//
// For more details, see the LICENSE file.
// Or visit: https://opensource.org/licenses/MIT 



const plusBtn = document.getElementById("plus-btn");
const content = document.getElementById("content");
const startTestBtn = document.getElementById("start-test-btn");
const testArea = document.getElementById("test-area");
const contentArea = document.getElementById("content")
const defintionAnswer = document.getElementById("defintion-answer")
const mistakeAlert = document.getElementById("mistake-alert")
const mistakeBlock = document.getElementById("mistake-block")
let blockCount = 1;  

function addNewBlock(){
    blockCount++;

    if(blockCount < 10){
        const newBlock = document.createElement("div");
        newBlock.className = "q-block";
        newBlock.innerHTML = `
            <textarea class="definition" id="definition_${blockCount}" placeholder="definicja..."></textarea>
            <textarea class="description" id="description_${blockCount}" placeholder="opis..."></textarea>
        `;

        content.appendChild(newBlock);

        if (blockCount > 0) {
            startTestBtn.classList.remove("hidden-block");
        }
    }
}


function getRandomUniqueNumber(numbers) {

    const randomIndex = Math.floor(Math.random() * numbers.length);
    const number = numbers[randomIndex];
    numbers.splice(randomIndex, 1);


    return number;
}




const definitions = [];
const descriptions = [];

let definitionNumber = 0
let mistakeCounter = 0
let tryCounter = 0


function resetDefinitionBlock() {


    defintionAnswer.innerHTML = '';
    const newBlock = document.createElement("div")
    newBlock.innerHTML = `podaj do: ${definitions[definitionNumber]}`
    defintionAnswer.appendChild(newBlock)

}

plusBtn.addEventListener("click", addNewBlock);

startTestBtn.addEventListener("click", () => {
    testArea.classList.remove("hidden-block");
    defintionAnswer.classList.remove("hidden-block");
    defintionAnswer.classList.add("defintion-answer-flex")
    testArea.classList.add("test-area-flex");
    contentArea.classList.add("hidden-block")

    
    
    
    for (let i = 1; i <= blockCount; i++) {
        const definition = document.getElementById(`definition_${i}`);
        const description = document.getElementById(`description_${i}`);

        definitions.push(definition.value);
        descriptions.push(description.value);
    }
    const descriptionsLength = descriptions.length
    const descriptionsLengthForRandom = []
    for(let i = 0; i<descriptionsLength; i++){
        descriptionsLengthForRandom[i] = i 
    }
    console.log(descriptionsLengthForRandom)

    console.log("Определения:", definitions);
    console.log("Описание:", descriptions);

    console.log("Before clearing:", testArea.innerHTML);
testArea.innerHTML = '';
console.log("After clearing:", testArea.innerHTML);

    for (let i = 0; i < descriptions.length; i++) {
        let idRandomBlock = getRandomUniqueNumber(descriptionsLengthForRandom)
        const newBlock = document.createElement("div");
        newBlock.className = "test-description"; 
        newBlock.innerHTML = `<div onclick="checkAnswer(${idRandomBlock})" class = "test-description-block">${descriptions[idRandomBlock]}</div>`;
        testArea.appendChild(newBlock); 
    }
    if(definitions.length>1){

        defintionAnswer.innerHTML = '';
        const newBlock = document.createElement("div")
        newBlock.innerHTML = `podaj do: ${definitions[definitionNumber]}`
        defintionAnswer.appendChild(newBlock)
    }

});


function mistakeAlertTextMader(mistakes , trys){
    const newText = document.createElement("div");
    newText.innerHTML = `Próba: ${trys}, zrobiłeś ${mistakes} błędów`;
    mistakeBlock.appendChild(newText);
}


function checkAnswer(id){
if(id === definitionNumber && definitionNumber <=definitions.length){
    definitionNumber++
    console.log("compleate")
    
    defintionAnswer.classList.add("definition-answer-green")
    resetDefinitionBlock()
    setTimeout(() => {
        defintionAnswer.classList.remove("definition-answer-green")
    }, 1000)

}
else if(id !== definitionNumber){
    console.log("not")
    defintionAnswer.classList.add("defintion-answer-red")
    mistakeCounter++
    console.log(mistakeCounter)
    setTimeout(() => {
        defintionAnswer.classList.remove("defintion-answer-red")
    }, 1000)

}
if(definitionNumber === definitions.length){

    testArea.classList.add("hidden-block");
    defintionAnswer.classList.add("hidden-block");
    defintionAnswer.classList.remove("defintion-answer-flex")
    testArea.classList.remove("test-area-flex");
    contentArea.classList.remove("hidden-block")
    mistakeAlert.classList.remove("hidden-block")
    mistakeAlert.classList.add("mistake-alert-flex")
    console.log("before arr clean", definitions, descriptions)
     definitions.length = 0;
     descriptions.length = 0;
     console.log("after arr clean", definitions, descriptions)

     definitionNumber = definitionNumber - definitionNumber

     tryCounter++
     mistakeAlertTextMader(mistakeCounter, tryCounter)

}
}


function closeAlert(){
    mistakeAlert.classList.add("hidden-block")
    mistakeAlert.classList.remove("mistake-alert-flex")
    mistakeCounter =0
}