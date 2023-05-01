var acc = document.querySelectorAll(".accordion .header");

var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    this.classList.toggle('active')

    var img = this.querySelector('img')
    img.classList.toggle('rotated')
    
    var panel = this.nextElementSibling;

    if(panel.style.display === 'none' || panel.style.display === '' )
        panel.style.display = 'block'
    else
        panel.style.display = 'none'
  
  });
}