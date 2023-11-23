let menu = document.querySelector('.header .menu');

document.querySelector('#menu-btn').onclick = () =>{
   menu.classList.toggle('active')
}

window.onscroll = () => {
   menu.classList.remove('active')
}

document.querySelectorAll('.view-property .details .thumb .small-images img').
forEach(images => {
   images.onclick = () =>{
      src = images.getAttribute('src');
      document.querySelector('.view-property .details .thumb .big-image img').src = src;
}
});

document.querySelectorAll('.faq .box-container .box  h3').forEach(headings => {
   headings.onclick = () =>{
      headings.parentElement.classList.toggle('active');
   }
});
