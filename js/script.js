const deviceWidth = document.body.clientWidth;

// changes arrow images for navbar-links depending on the screen-width;
const arrowImages = document.querySelectorAll('.arrow-img');

if(deviceWidth<=900){
   arrowImages.forEach((arrowImage) => {
      arrowImage.src = ('images/icon-arrow-dark.svg');
   });
}

// toggles between hamburger and close button and displays the content accordingly;
const linkBtnWrap = document.querySelector('.link-btn-wrap');
const toggleButton = document.querySelector('.toggle-button');

const hamburgerImg = document.querySelector('.hamburger-img');
const closeImg = document.querySelector('.close-img');

   toggleButton.addEventListener('click', function(e){
      linkBtnWrap.classList.toggle('active');

      if(linkBtnWrap.classList.contains('active')){
         closeImg.style.display = 'block';
         hamburgerImg.style.display = 'none';
      }
      else{
         closeImg.style.display = 'none';
         hamburgerImg.style.display = 'block';
      }
   });


// to display relevant info of navbar-links (sub-list)
const allNavLinks = document.querySelectorAll('.main-link');
const allSubItems = document.querySelectorAll('.sub-items');

   for(let i=0; i<allNavLinks.length; i++){
      allNavLinks[i].addEventListener('click', function(event){
         
         if(allSubItems[i].classList.contains('show')){
            allSubItems[i].classList.remove('show'); 
         }
         else{
            clearAll();
            allSubItems[i].classList.add('show'); 
         }
      });
   }

function clearAll(){/*function to maintain only one active sub-list */
   for(let i=0; i<allSubItems.length; i++){
         allSubItems[i].classList.remove('show');
   }
}

// changing the editor image and laptop image for desktops and tablets
const editorImg = document.querySelector('.editor-img');
const laptopImg = document.querySelector('.laptop');
   if(deviceWidth>600){
      editorImg.src = ('images/illustration-editor-desktop.svg');
      laptopImg.src = ('images/illustration-laptop-desktop.svg');
   }