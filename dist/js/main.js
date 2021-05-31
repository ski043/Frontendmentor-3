function myFunction() {
    const expand = document.querySelector('.expand')
    if (expand.style.display === 'none') {
        expand.style.display = "block";
    } else {
        expand.style.display = "none";
    }
}