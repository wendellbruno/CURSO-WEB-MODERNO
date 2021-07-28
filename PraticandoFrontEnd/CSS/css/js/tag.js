document.querySelectorAll('.tag').forEach(elemnto =>{
    const tagName = elemento.tagName.toLowerCase();

    elemento.style.borderColor = '#616161'

    if(!elemento.classList.contains('nolabel')){
        const  label = document.createElement('label')
        label.style.backgroundColor = '#A616161'
        label.innerHTML = tagName
        elemento.insetBefore(label, elemento.childNodes[0])    
    }
})