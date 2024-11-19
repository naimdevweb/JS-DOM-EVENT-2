const Image1 = document.querySelector('#image1');
Image1.addEventListener('mouseover', Handlehoverimage);

function Handlehoverimage(){
Image1.classList.toggle('border-black');
}