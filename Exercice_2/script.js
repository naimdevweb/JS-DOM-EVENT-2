
const afficher = document.querySelector('a[href="#"]');  
const masquer = document.querySelectorAll('a[href="#"]')[1];  
const texte = document.querySelector('#text');  


afficher.addEventListener('click', function(event) {
    event.preventDefault();  
    texte.style.display = 'block'; 
});


masquer.addEventListener('click', function(event) {
    event.preventDefault();  
    texte.style.display = 'none'; 
});
