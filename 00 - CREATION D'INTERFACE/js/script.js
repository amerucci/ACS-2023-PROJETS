let slideIndex = 1;
let nbreClick = 1;
let slides = document.querySelectorAll(".mySlides");

document.querySelector(".next").addEventListener("click", function () {
  if (nbreClick > 2) {
    document.querySelector("#slide1").classList = "mySlides fade";
    document.querySelector("#slide3").classList = "mySlides fadeOff";
    document.querySelector("#slide1").style = "z-index:2";
    document.querySelector("#slide3").style = "z-index:1; opacity:0";

    nbreClick = 0;
  } else {
    document.querySelector("#slide" + nbreClick).classList = "mySlides fadeOff";
    document.querySelector("#slide" + (nbreClick + 1)).classList =
      "mySlides fade";
    document.querySelector("#slide" + nbreClick).style = "z-index:1; opacity:0";
    document.querySelector("#slide" + (nbreClick + 1)).style = "z-index:2";
  }

  nbreClick++;
});

document.querySelector(".prev").addEventListener("click", function () {
  if (nbreClick < 2) {
    document.querySelector("#slide1").classList = "mySlides fadeOffInverse";
    document.querySelector("#slide3").classList = "mySlides fadeInverse";
    document.querySelector("#slide3").style = "z-index:2; opacity:1";
    document.querySelector("#slide1").style = "z-index:1; ";

    nbreClick = 4;
  } else {
    document.querySelector("#slide" + nbreClick).classList =
      "mySlides fadeOffInverse ";
    document.querySelector("#slide" + (nbreClick - 1)).classList =
      "mySlides fadeInverse current";
    document.querySelector("#slide" + nbreClick).style =
      "z-index:1; opacity:0;";
    document.querySelector("#slide" + (nbreClick - 1)).style = "z-index:2";
  }
  nbreClick--;
});


/********
 * MENU *
 ********/
let menuStatus = false

function hideMenu(){
  document.querySelector(".nav").classList.remove("menuShow")
}


document.querySelector(".hamburger-menu").addEventListener("click", function () {
  menuStatus = !menuStatus;

  document.querySelector("#bar1").classList.toggle('clicked')
  document.querySelector("#bar2").classList.toggle('clicked')
  document.querySelector("#bar3").classList.toggle('clicked')
  
  if(menuStatus==true) {
    document.querySelector(".nav").classList.add("menuShow")
    document.querySelector(".nav").classList.remove("menuHide")
  }
  else{
  
    document.querySelector(".nav").classList.add("menuHide");
   
    setTimeout(hideMenu, 1500);

  
  }


  console.log(menuStatus);



})

