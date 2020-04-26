let checkbox = document.querySelector('input[name=mode]');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        document.querySelector("main").classList.remove('theme--dark')
        document.querySelector("main").classList.add('theme--light')
    } else {
        document.querySelector("main").classList.remove('theme--light')
        document.querySelector("main").classList.add('theme--dark')
    }
})