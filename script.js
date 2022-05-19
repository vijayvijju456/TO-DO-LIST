let addToDoBtn = document.getElementById('addTask');
let inputField = document.getElementById('info');
let addToDos = document.getElementById('addParagraph');


addToDoBtn.addEventListener('click', () => {
    var paragraph = document.createElement('p');
    paragraph.classList.add('tasks');
    paragraph.innerText = inputField.value;
    addToDos.appendChild(paragraph);
    inputField.value = "";

    paragraph.addEventListener('click', () => {
        paragraph.style.textDecoration = "line-through";
    })

    paragraph.addEventListener('dblclick', () => {
        addToDos.removeChild(paragraph);
    })
})