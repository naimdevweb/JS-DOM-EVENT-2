
const colorButtons = document.querySelectorAll('.color');  
const textElement = document.querySelector('#text');      


colorButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        
        const color = this.classList[1]; 
        
        textElement.style.color = color;
    });
});
