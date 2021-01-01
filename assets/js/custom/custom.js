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
    document.querySelector('nav').style.padding = "20px 30px";
    document.querySelector('nav').style.backgroundColor = "transparent";
  }
});


// SPREAD THE IMAGES CORRECTLY 

const images = document.querySelectorAll('.works-container > div');
const innerImages = document.querySelectorAll('.works-container .image')
const worksContainer = document.querySelector('.works-container')

console.log(worksContainer)


/* Media Queries For Images */

const smallMedia = window.matchMedia('(min-width: 568px)')
const mediumMedia = window.matchMedia('(min-width: 786px)')
const largeMedia = window.matchMedia('(min-width: 992px)')
const extraLargeMedia = window.matchMedia('(min-width: 1200px)')

smallMedia.addEventListener('change', (e) =>{
  if(e.matches){
    
    images[0].style.transform = "translate3D(0, 0, 1)";
    images[1].style.transform = "translate3D(50%, 0, 1)";
    
    images[2].style.transform = "translate3d(0, 0, 1)";
    images[3].style.transform = "translate3d(50%, -25px, 1)";

    console.log('You Are In Small Media !!!')
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

  worksContainer.style.height = parentHeight(getHeight(innerImages)) + "px";
  worksContainer.style.position = "relative";
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















