const cageForm = document.querySelector('form#cageForm')

function handleSubmit(ev){
    ev.preventDefault()

    const list = document.querySelector('#list')
    const f = ev.target
    const movie = f.movieName.value
    
    list.appendChild(renderListItem(movie))
}

function renderListItem(value){
    const li = document.createElement('li')
    li.textContent = `${value}`
    return li
}

cageForm.addEventListener('submit', handleSubmit)