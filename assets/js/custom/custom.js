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

/******* Media query ********/

const media = window.matchMedia("(max-width: 700px)");

media.addEventListener("change", (event) => {
  if (event.matches) {
    document.querySelector(".home .profil h1").style.backgroundColor = "pink";
  } else {
    document.querySelector(".home .profil h1").style.backgroundColor = "red";
  }
});

/* media.addListener((event) => {
    if (event.matches) {
        document.querySelector(".home .profil h1").style.backgroundColor = "pink"
    } else {
        document.querySelector(".home .profil h1").style.backgroundColor = "red";
    }
}); */


document.addEventListener("scroll", () => {

  //console.log("the page y off set " + window.pageYOffset);
  if(window.pageYOffset > 0){
    document.querySelector('nav').style.padding = "17px 50px";
    document.querySelector('nav').style.backgroundColor = "#111c";
  }else{
    document.querySelector('nav').style.padding = "40px 50px";
    document.querySelector('nav').style.backgroundColor = "transparent";
  }
});


// SPREAD THE IMAGES CORRECTLY 

/* const worksSectionWidth = workContainer.width; // THE WIDTH OF THE WORK CONTAINER SECTION */

const images = document.querySelectorAll('.works-container > div');




const worksContainer = document.querySelector('.works-container');
  worksContainer.style.minHeight = "1000px";

images[0].style.left = "0";
images[0].style.top = "0"; 
images[1].style.left = images[0].clientWidth + "px";
images[1].style.top = "0";

images[2].style.left = "0";
images[2].style.top = images[0].clientHeight + "px";
images[3].style.left = images[2].clientWidth + "px";
images[3].style.top = images[1].clientHeight + "px";

images[4].style.left = "0";
images[4].style.top = images[0].clientHeight + images[2].clientHeight + "px";
images[5].style.left = images[4].clientWidth + "px";
images[5].style.top = images[1].clientHeight + images[3].clientHeight + "px";; 




/* images[2].style.top = images[0].clientHeight + "px";
images[2].style.left = "0"; */
/*
images[3].style.right = "200px";
images[3].style.top = images[0].clientHeight + "px";
images[4].style.right = "-200px";
images[4].style.top = images[1].clientHeight + "px";
images[5].style.left = "200px";
images[5].style.top = images[2].clientHeight + "px"; 

images[6].style.right = "200px";
images[6].style.top = (images[0].clientHeight + images[3].clientHeight) + "px";
images[7].style.right = "-200px";
images[7].style.top = (images[1].clientHeight + images[4].clientHeight) + "px";
images[8].style.left = "200px";
images[8].style.top = (images[2].clientHeight + images[5].clientHeight) + "px";  */



/* Media Queries For Images */

const smallMedia = window.matchMedia('(min-width: 568px)')
const mediumMedia = window.matchMedia('(min-width: 786px)')
const largeMedia = window.matchMedia('(min-width: 992px)')
const extraLargeMedia = window.matchMedia('(min-width: 1200px)')

smallMedia.addEventListener('change', (e) =>{
  if(e.matches){
    console.log("You're In Small Media");
  }
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















