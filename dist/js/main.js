const accordain = document.getElementsByClassName('faq')

for(let i = 0; i < accordain.length; i++) {
    accordain[i].addEventListener('click', function() {
        this.classList.toggle('active')
    })
}