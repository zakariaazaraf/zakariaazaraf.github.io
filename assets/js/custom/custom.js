const professions = document.querySelectorAll(".home .profil h2 .profession b"),
  profession = document.querySelector(".profession"),
  widths = [];
let i = 0;

professions.forEach((item) => {
  widths[i] = item;
  i++;
});

/* Set the width of the parent professions with the first element with */
professions[0].parentElement.style.width = widths[0].clientWidth + 10 + "px";

i = 1;

animate = () => {
  if (i >= widths.length - 1) {
    i = 0;
  } else {
    i++;
  }

  profession.style.width = 0;

  profession.addEventListener("transitionend", () => {
    professions.forEach((item) => {
      item.classList.remove("active");
    });

    widths[i].classList.add("active");

    profession.style.width = widths[i].clientWidth + 10 + "px";
  });
};

setInterval(animate, 3000);

let percentages = document.querySelectorAll(".skills p");

percentages.forEach((item) => {
  item.style.width = item.dataset.percentage;
  item.firstElementChild.innerHTML = item.dataset.percentage;
});


/*
=======================================================
=============== TOGGLE THE ICON MENU ==================
=======================================================
*/

const menuIcon = document.querySelector('nav .menu-icon')
const menuList = document.querySelector('nav ul')


$(menuIcon).click(()=>{
  $(menuList).toggleClass('toggleMenu'); 
  const listLinks = document.querySelectorAll('.toggleMenu li')
})

/*
=======================================================
============== Form PlaceHolder events ================
=======================================================
*/

$('[placeholder]').focus((e)=>{

  $(e.target).attr('data-place', e.target.placeholder);
  e.target.placeholder = ''
  
})
  .blur((e)=>{
     
  e.target.placeholder = $(e.target).attr('data-place');
  
})

/******* Media query ********/

const media = window.matchMedia("(max-width: 700px)");

media.addEventListener("change", (event) => {
  if (event.matches) {
    
  } 
});


document.addEventListener("scroll", () => {

  //console.log("the page y off set " + window.pageYOffset);
  if(window.pageYOffset > 0){
    document.querySelector('nav').style.padding = "20px 30px";
    document.querySelector('nav').style.backgroundColor = "#111c";
  }else{
    document.querySelector('nav').style.padding = "20px 30px";
    document.querySelector('nav').style.backgroundColor = "transparent";
  }
});


// SPREAD THE IMAGES CORRECTLY 

const images = document.querySelectorAll('.works-container > div');
const innerImages = document.querySelectorAll('.works-container .image')
const worksContainer = document.querySelector('.works-container')

/* Media Queries For Images */

const smallMedia = window.matchMedia('(min-width: 568px)')
const mediumMedia = window.matchMedia('(min-width: 786px)')
const largeMedia = window.matchMedia('(min-width: 992px)')
const extraLargeMedia = window.matchMedia('(min-width: 1200px)')

smallMedia.addEventListener('change', (e) =>{
  if(e.matches){
    
  }
})




function getWidth(arrElement){
  let elementsWidth = []
  arrElement.forEach(item => elementsWidth.push(item.clientWidth))
  return elementsWidth
}

function getHeight(arrElement){
  let elemnetsHeight = []
  arrElement.forEach(item => elemnetsHeight.push(item.clientHeight))
  return elemnetsHeight
}


// GET THE PARENT HEIGHT
function parentHeight(arrElement){

  let evenSum = 0, oddSum = 0;
  arrElement.forEach((item, index)=>{
    if(index % 2 === 0){
      evenSum += item
    }else{
      oddSum += item
    }
  })

  return oddSum > evenSum ? oddSum : evenSum
}

window.addEventListener('resize', ()=>{
  
  console.log(parentHeight(getHeight(innerImages)))

})



mediumMedia.addEventListener('change', (e)=>{
  if(e.matches){
    console.log("Medium Media")
  }
})

largeMedia.addEventListener('change', (e)=>{
  e.matches ? console.log("Large Media") : ''
})

extraLargeMedia.addEventListener('change', (e)=>{
  e.matches ? console.log("Extra Large Media") : ''
})


$(()=>{

  // SELECT FORM INPUTS
  const formUsername = document.getElementById('formUsername')
  const formEmail = document.getElementById('formEmail')
  const formSubject = document.getElementById('formSubject')
  const formMessage = document.getElementById('formMessage')


  $('.contact #formSubmit').click((e)=>{
    e.preventDefault()
    let username = formUsername.value,
        email = formEmail.value,
        subject = formSubject.value,
        message = formMessage.value

    // PRAPRE MY OBJECT DATA
    let emailData = {
      From : username,
      Email: email,
      Subject: subject,
      Message: message
    }

    $.ajax({
						type: 'POST',
						data: JSON.stringify(emailData),
            contentType: 'application/json',
            url: '/',						
            success: function(data) {            
                
                const {mes, status} = JSON.parse(data)

                if(status == '200'){

                  alert('Your Email Has Been Sent Successfully !! :)')
                  formUsername.placeholder = formUsername.getAttribute('data-place').value || 'Name*'
                  formEmail.placeholder = formEmail.getAttribute('data-place').value || 'Email Adress*'
                  formSubject.placeholder = formSubject.getAttribute('data-place').value || 'Subject*'
                  formMessage.placeholder = formMessage.getAttribute('data-place').value || 'Message*'

                  formUsername.value = ''
                  formEmail.value = ''
                  formSubject.value = ''
                  formMessage.value = ''
                }
                
            }
    });

  })
})










