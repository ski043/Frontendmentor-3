const FAQ = () => {
    const expand = document.querySelector('.expand');

    expand.addEventListener('click', () => {
        expand.classList.toggle('expand');
    })
}

FAQ();


