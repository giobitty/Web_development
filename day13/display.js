    // 'DISPLAY.HTML' FORM DISPLAY
    let cusername = document.querySelector('.cusername')
    let clanguage = document.querySelector(".clanguage")
    // set value stored in sessionStorage to each collected element
    cusername.innerHTML = sessionStorage.getItem('firstname')
    clanguage.innerHTML = sessionStorage.getItem('selection_language')