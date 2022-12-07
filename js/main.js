const header = document.querySelector("header");

window.addEventListener("scroll", function (){
  header.classList.toggle ("sticky", window.scrollY > 0);
})

let menu =document.querySelector('#menu-icon')
let navbar =document.querySelector('.navbar')

menu.onclick = () => {
  menu.classList.toggle('bx-x')
  navbar.classList.toggle('active')
};

window.onscroll = () => {
  menu.classList.remove('bx-x')
  navbar.classList.remove('active')
}

//on click
function showAlert(){
  const myText ='Donations Coming Soon..!';
  alert(myText);
}

//submit
function alert(){
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const success = document.getElementById('success');
  const danger = document.getElementById('danger');

  if(username.value === '' || email.value === '' || message.value === ''){
    danger.style.display = 'block';
  }
  else{
    setTimeout(() => {
    username.value = '';
    email.value = '';
    message.value = '';
    }, 2000);

    success.style.display = 'block'
  }

  setTimeout(() => {
    danger.style.display = 'none';
    success.style.display = 'none';
  }, 4000);
}

