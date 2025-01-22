
document.getElementById('cora-vazio1').addEventListener('click', function() {
 const icon = this;

 icon.classList.add('animate');

 if (icon.classList.contains('fa-regular')) {
      icon.classList.remove('fa-regular')
      icon.classList.add('fa-solid')
 }
 else {
      icon.classList.remove('fa-solid')
      icon.classList.add('fa-regular')
 }
 });


document.getElementById('cora-vazio2').addEventListener('click', function() {
     const icon = this;
    
     icon.classList.add('animate');
    
     if (icon.classList.contains('fa-regular')) {
          icon.classList.remove('fa-regular')
          icon.classList.add('fa-solid')
     }
     else {
          icon.classList.remove('fa-solid')
          icon.classList.add('fa-regular')
     }
     });


document.getElementById('cora-vazio3').addEventListener('click', function() {
     const icon = this;
    
     icon.classList.add('animate');
    
     if (icon.classList.contains('fa-regular')) {
          icon.classList.remove('fa-regular')
          icon.classList.add('fa-solid')
     }
     else {
          icon.classList.remove('fa-solid')
          icon.classList.add('fa-regular')
     }
     });
     
     
document.getElementById('cora-vazio4').addEventListener('click', function() {
 const icon = this;

 icon.classList.add('animate');

 if (icon.classList.contains('fa-regular')) {
      icon.classList.remove('fa-regular')
      icon.classList.add('fa-solid')
 }
 else {
      icon.classList.remove('fa-solid')
      icon.classList.add('fa-regular')
 }
 });


document.getElementById('cora-vazio5').addEventListener('click', function() {
     const icon = this;
    
     icon.classList.add('animate');
    
     if (icon.classList.contains('fa-regular')) {
          icon.classList.remove('fa-regular')
          icon.classList.add('fa-solid')
     }
     else {
          icon.classList.remove('fa-solid')
          icon.classList.add('fa-regular')
     }
     });


document.getElementById('cora-vazio6').addEventListener('click', function() {
     const icon = this;
    
     icon.classList.add('animate');
    
     if (icon.classList.contains('fa-regular')) {
          icon.classList.remove('fa-regular')
          icon.classList.add('fa-solid')
     }
     else {
          icon.classList.remove('fa-solid')
          icon.classList.add('fa-regular')
     }
     });


document.getElementById('cora-vazio7').addEventListener('click', function() {
 const icon = this;

 icon.classList.add('animate');

 if (icon.classList.contains('fa-regular')) {
      icon.classList.remove('fa-regular')
      icon.classList.add('fa-solid')
 }
 else {
      icon.classList.remove('fa-solid')
      icon.classList.add('fa-regular')
 }
 });


document.getElementById('cora-vazio8').addEventListener('click', function() {
     const icon = this;
    
     icon.classList.add('animate');
    
     if (icon.classList.contains('fa-regular')) {
          icon.classList.remove('fa-regular')
          icon.classList.add('fa-solid')
     }
     else {
          icon.classList.remove('fa-solid')
          icon.classList.add('fa-regular')
     }
     });


document.getElementById('cora-vazio9').addEventListener('click', function() {
 const icon = this;

 icon.classList.add('animate');

 if (icon.classList.contains('fa-regular')) {
      icon.classList.remove('fa-regular')
      icon.classList.add('fa-solid')
 }
 else {
      icon.classList.remove('fa-solid')
      icon.classList.add('fa-regular')
 }
 });


document.getElementById('cora-vazio10').addEventListener('click', function() {
 const icon = this;

 icon.classList.add('animate');

 if (icon.classList.contains('fa-regular')) {
      icon.classList.remove('fa-regular')
      icon.classList.add('fa-solid')
 }
 else {
      icon.classList.remove('fa-solid')
      icon.classList.add('fa-regular')
 }
 });




//  interatividade slider

const slider = document.querySelector('.slider-track');
const prevButton = document.querySelector('.slider-button.prev');
const nextButton = document.querySelector('.slider-button.next');

let currentIndex = 0;
const itensToShow = 6;
const cardWidth = slider.querySelector('.quadrado-item').offsetWidth; // Pega a largura de um card
const totalCards = slider.children.length;

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPos();
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < totalCards - itensToShow) {
    currentIndex++;
    updateSliderPos();
  }
});

function updateSliderPos() {
  const translateX = -(currentIndex * (cardWidth + 20)); // Ajuste de margem se necessário
  slider.style.transform = `translateX(${translateX}px)`; // Use crases para template literals
}
