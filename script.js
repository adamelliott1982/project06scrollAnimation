const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)


checkBoxes()


function checkBoxes() {
    const triggerBox = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        
        if (boxTop < triggerBox) {
            box.classList.add('revealed')
        } else {
            box.classList.remove('revealed')
        }
    })
}

