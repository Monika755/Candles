const images = document.querySelectorAll('.img img');

images.forEach(img => {
  
  img.addEventListener('mouseenter', () => {
    img.style.boxShadow = '20px 20px 20px rgba(0, 0, 0, 0.4)';
    img.style.transition = 'box-shadow 0.9s ease';
  });

  
  img.addEventListener('mouseleave', () => {
    img.style.boxShadow = 'none';
  });
}) 


 
function mouseOver(img) {
    img.style.boxShadow = "10px 10px 10px rgba(0, 0, 0, 0.4)";
  }

  function mouseOut(img) {
    img.style.boxShadow = "none";
  }