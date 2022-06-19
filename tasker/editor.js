const toggleEditor = document.getElementById('toggleEditor');
const editor = document.getElementById('editor');


toggleEditor.addEventListener('click', ()=>{
    editor.classList.toggle("editor_open")
})

// Шорт-кей
addEventListener('keyup', (e)=>{
    if (e.ctrlKey && e.key == "ArrowUp") {
        editor.classList.add("editor_open")
    }
    if (e.ctrlKey && e.key == "ArrowDown") {
        editor.classList.remove("editor_open")
    }
})
