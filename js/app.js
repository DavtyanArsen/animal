const burger = () =>{
    const btn = document.querySelector('header .burger>svg')
    const off = document.querySelector('.offset')
    const close = document.querySelector('.offset nav svg:first-child')
    btn.addEventListener('click', () =>{
        off.style.display = 'block'
    })

    close.addEventListener('click', () =>{
        off.style.display = 'none'
    })
}

burger()
