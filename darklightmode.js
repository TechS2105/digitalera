
/** Dark mode  and light mode converter */

let body = document.querySelector("body");
let sunIcon = document.querySelector("#darkmode");
let moonIcon = document.querySelector("#lightmode");
let textDivHeading = document.querySelector(".textdiv h1");
let textDivPara = document.querySelector(".textdiv p");
let textDivBtn = document.querySelector(".textdiv button");
let bannerImg = document.querySelector(".imgdiv img");
let headerText = document.querySelectorAll(".menu ul li a");
let menuBtn = document.querySelector(".menu ul li a button");
let headerBack = document.querySelector("header .headersection");
let brandLogo = document.querySelectorAll(".logobody img");
let serviceText = document.querySelector('.stext p');
let box1 = document.querySelector(".servicesectionbox .one");
let box2 = document.querySelector(".servicesectionbox .two");
let box3 = document.querySelector(".servicesectionbox .three");
let box4 = document.querySelector(".servicesectionbox .four");
let caseStudy = document.querySelector(".casestudytextsection p");
let workingProcess = document.querySelector(".workingprocesstext p");
let teamSection = document.querySelector(".teamsectiontext p");
let contactSection = document.querySelector(".contactustext p");
let menuIcon = document.querySelector(".menu ul #menubar");
let closeIcon = document.querySelector(".menu ul #close");

function darkModeFun() {
    
    body.style.backgroundColor = "#111";
    sunIcon.style.color = "#fff";
    menuIcon.style.color = "#fff";
    closeIcon.style.color = "#fff";
    sunIcon.style.transition = "all 0.5s ease";
    textDivHeading.style.color = "#b9ff66";
    textDivHeading.style.transition = "all 0.5s ease-in";
    textDivPara.style.color = "#fff";
    textDivPara.style.transition = "all 0.5s ease-in";
    textDivBtn.style.backgroundColor = "#b9ff66";
    textDivBtn.style.color = "#111";
    textDivBtn.style.fontWeight = "500";
    textDivBtn.style.transition = "all 0.5s ease-in";
    bannerImg.style.borderColor = "#111";
    bannerImg.style.borderRadius = "20px";
    bannerImg.style.transition = "all 0.5s ease-in";
    menuBtn.style.borderColor = "#fff";
    menuBtn.style.color = "#b9ff66";
    headerBack.style.backgroundColor = "#111";
    serviceText.style.color = "#fff";
    box1.style.border = "5px solid #fff";
    box2.style.border = "2px solid #b9ff66";
    box3.style.border = "2px solid #b9ff66";
    box4.style.border = "5px solid #fff";
    caseStudy.style.color = "#fff";
    workingProcess.style.color = "#fff";
    teamSection.style.color = "#fff";
    contactSection.style.color = "#fff";

    /** heading menu text color animation */
    headerText.forEach((e) => {

        e.style.color = "#fff";
        e.style.transition = "all 0.5 ease-in";

    });

    /** brand logo background color */

    brandLogo.forEach((e) => {

        e.style.backgroundColor = "#fff";
        e.style.padding = "5px";

    });

}

function lightModeFun() {

    body.style.backgroundColor = "#fff";
    sunIcon.style.color = "#111";
    menuIcon.style.color = "#111";
    closeIcon.style.color = "#111";
    sunIcon.style.transition = "all 0.5s ease";
    textDivHeading.style.color = "#111";
    textDivHeading.style.transition = "all 0.5s ease-in";
    textDivPara.style.color = "#111";
    textDivPara.style.transition = "all 0.5s ease-in";
    textDivBtn.style.backgroundColor = "#111";
    textDivBtn.style.color = "#fff";
    textDivBtn.style.fontWeight = "500";
    textDivBtn.style.transition = "all 0.5s ease-in";
    bannerImg.style.borderColor = "#fff";
    bannerImg.style.borderRadius = "50%";
    bannerImg.style.transition = "all 0.5s ease-in";
    menuBtn.style.borderColor = "#111";
    menuBtn.style.color = "#111";
    headerBack.style.backgroundColor = "#fff";
    serviceText.style.color = "#111";
    box1.style.border = "1px solid #111";
    box2.style.border = "2px solid #111";
    box3.style.border = "2px solid #111";
    box4.style.border = "1px solid #111";
    caseStudy.style.color = "#111";
    workingProcess.style.color = "#111";
    teamSection.style.color = "#111";
    contactSection.style.color = "#111";

    /** heading menu text color animation */
    headerText.forEach((e) => {

        e.style.color = "#111";
        e.style.transition = "all 0.5 ease-in";

    });

}

let darkMode = document.querySelector("#darkmode");
let lightMode = document.querySelector("#lightmode");

darkMode.addEventListener('click', () => {

    darkModeFun();
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";

});

lightMode.addEventListener('click', () => {

    lightModeFun();
    moonIcon.style.display = "none";
    sunIcon.style.display = "block";


});