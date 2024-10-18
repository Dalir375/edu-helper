const plusBtn = document.getElementById("plus-btn")
const content = document.getElementById("content");
let blockCount = 1; 

plusBtn.addEventListener("click", () => {
    blockCount++; 
    
    const newBlock = document.createElement("div");
    newBlock.className = "q-block";
    newBlock.innerHTML = `
        <textarea class="definition" name="definition_${blockCount}" placeholder="Введите определение..."></textarea>
        <textarea class="description" name="description_${blockCount}" placeholder="Введите описание..."></textarea>
    `;
    
    content.appendChild(newBlock);
});