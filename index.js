const cageForm = document.querySelector('form#cageForm')
const promoteButtons = document.querySelectorAll('#promote')
const deleteButtons = document.querySelectorAll('#delete')

function handleSubmit(ev){
    ev.preventDefault()

    const list = document.querySelector('#list')
    const f = ev.target
    const movie = f.movieName.value
    
    list.insertBefore(renderListItem(movie), list.firstChild)
}

function promoteItem(ev){
    const b = ev.target
    b.textContent = 'Demote'
    b.onclick = demoteItem
    b.parentElement.style.backgroundColor = 'gold'
}

function demoteItem(ev){
    const b = ev.target
    b.textContent = 'Promote'
    b.onclick = promoteItem
    b.parentElement.style.backgroundColor = 'white'
}

function deleteItem(ev){
    const b = ev.target
    const p = b.parentNode
    p.parentNode.removeChild(p)
}

function renderListItem(value){
    const li = document.createElement('li')
    li.textContent = `${value}`
    const b1 = document.createElement('button')
    b1.textContent = 'Promote'
    li.appendChild(b1)
    const b2 =document.createElement('button')
    b2.textContent = 'Delete'
    li.appendChild(b2)
    b1.onclick = promoteItem
    b2.onclick = deleteItem
    return li
}

cageForm.addEventListener('submit', handleSubmit)

for(var i = 0; i < promoteButtons.length; i++){
    promoteButtons[i].onclick = promoteItem
}

for(var i = 0; i < deleteButtons.length; i++){
    deleteButtons[i].onclick = deleteItem
}