let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("first_slider");
  let dots = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

//email part

let name = document.getElementById('name')
let tel = document.getElementById('tel')
let send = document.getElementById('send')


function send_mail(name,tel){



  Email.send({
      Host : "smtp.gmail.com",
      Username : "baboomian53@gmail.com",
      Password : "password",
      To : 'baboomian53@gmail.com',
      From : "baboomian53@gmail.com",
      Subject : `${name} sent a request`,
      Body : `${tel}`
  }).then(
    message => alert(message)
  );
}

