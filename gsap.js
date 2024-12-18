let responsiveMenu = document.querySelector(".responsivemenu");
let menuBar = document.querySelector("#menubar");
let closeBar = document.querySelector("#close");

/** Disable right click of mouse */
window.addEventListener("contextmenu", (e) => {

    e.preventDefault();

});

menuBar.addEventListener('click', () => {

    $(responsiveMenu).slideDown(1000);
    menuBar.style.display = "none";
    closeBar.style.display = "block";

});

closeBar.addEventListener('click', () => {

    $(responsiveMenu).slideUp();
    closeBar.style.display = "none";
    menuBar.style.display = "block";

});

/** Header scrolling animation */
window.addEventListener("wheel", (event) => {

    if (event.deltaY > 0) {

        $(".headersection").slideUp();

    } else if (event.deltaY < 0) {


        $(".headersection").slideDown(function () {
            
            $(".headersection").css({

            "background-color": "#f3f3f37d",
            "backdrop-filter": "blur(10px)"

            });

        });

    }

});

/** header animation section */
const pageAnimation = () => {

    let tl1 = gsap.timeline();

    tl1.from(".logo", {

        y: -50,
        opacity: 0,
        duration: 0.5,

    });

    tl1.from(".menu ul li, #darkmode", {

        y: -50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2

    });

    tl1.from(".textdiv h1", {

        y: -500,
        opacity: 0,
        duration: 1,

    }, "-=0.3");

    tl1.from(".textdiv p", {

        x: -500,
        opacity: 0,
        duration: 0.7

    }, "-=0.4");

    tl1.from(".textdiv button", {

        x: -500,
        opacity: 0,
        duration: 0.7

    }, "-=0.4");

    tl1.from(".imgdiv img", {

        // x: 500,
        opacity: 0,
        duration: 0.8

    }, '-=0.2');

}

/** Logo section animation */

const logofunction = () => {

    let tl2 = gsap.timeline({

        scrollTrigger: {

            trigger: ".logobody",
            scroll: "body",
            start: "top 100%",
            end: "top 50%",
            scrub: 1

        }

    });

    tl2.from(".logobody img", {

        y: 500,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2

    });

}

/** Service section animation  */

const serviceSection = () => {

    let tl3 = gsap.timeline({

        scrollTrigger: {

            trigger: ".stext",
            scroll: "body",
            start: "top 50%",
            end: "top 50%",
            scrub: 1

        }

    });

    tl3.from(".stext h2", {

        y: 500,
        opacity: 0,
        duration: 1

    });

    tl3.from(".stext p", {

        y: 500, 
        opacity: 0,
        duration: 0.5

    })

}

/** Service box section animation */
const serviceBoxAnimation = () => {

    let tl4 = gsap.timeline({

        scrollTrigger: {

            trigger: ".servicesectionbox",
            scroll: "body",
            start: "top 50%",
            end: "top 0%",
            scrub: 1

        }

    });

    tl4.from(".servicesectionbox .one", {

        x: -500,
        duration: 1,
        opacity: 0,

    });

    tl4.from(".servicesectionbox .two", {

        x: 500,
        duration: 1,
        opacity: 0

    });

    tl4.from(".servicesectionbox .three", {

        x: -500,
        duration: 1,
        opacity: 0

    });

    tl4.from(".servicesectionbox .four", {

        x: 500,
        duration: 1,
        opacity: 0

    });

}

/** Let's make things section */
const letMakeThingsHappen = () => {

    let tl5 = gsap.timeline({

        scrollTrigger: {

            trigger: ".letmakethings",
            scroll: "body",
            start: "top 50%",
            end: "top 0%",
            scrub: 2

        }

    });

    tl5.from(".letmakethings .letmakethingtext", {
        
        y: -500,
        opacity: 0,
        duration: 1

    });

    tl5.from(".letmakethings .letmakethingimg", {

        x: 500,
        opacity: 0,
        duration: 5

    });

}

/** Case study section */
const caseStudySection = () => {

    let tl6 = gsap.timeline({

        scrollTrigger: {

            trigger: ".casestudytextsection",
            scroll: "body",
            start: "top 50%",
            end: "top 0%",
            scrub: 1

        }

    });

    tl6.from(".casestudytextsection h2", {

        y: 500,
        opacity: 0,
        duration: 2

    });

    tl6.from(".casestudytextsection p", {

        y: 500,
        opacity: 0,
        duration: 0.5

    });

    tl6.from(".casestudybox .casebox1", {

        x: -500,
        opacity: 0,
        duration: 1

    });

    tl6.from(".casestudybox .casebox2", {

        x: -500,
        opacity: 0,
        duration: 1

    });

    tl6.from(".casestudybox .casebox3", {

        x: -500,
        opacity: 0,
        duration: 1

    });

} 

/** working process section */
const workingProcessSection = () => {

    let tl7 = gsap.timeline({

        scrollTrigger: {

            trigger: ".workingprocesstext",
            scroll: "body",
            start: "top 100%",
            end: "top 0%",
            scrub: 1

        }

    });

    tl7.from(".workingprocesstext h2", {

        y: 100,
        opacity: 0,
        duration: 1

    });

    tl7.from(".workingprocesstext p", {

        y: 100,
        opacity: 0,
        duration: 1

    });
    
}

/** working toggle box section  */

const workingToggleBox = () => {

    let tl8 = gsap.timeline({

        scrollTrigger: {

            trigger: ".togglebox",
            scroll: "body",
            start: "top 20%",
            end: "top 20%",
            scrub: 5

        }

    });

    tl8.from(".togglebox", {

        x: -500,
        opacity: 0,
        duration: 10,
        stagger: 5

    });

}

/** team section box */

const ourTeamSection = () => {

    let tl9 = gsap.timeline({

        scrollTrigger: {

            trigger: ".teamsectiontext",
            scroll: "body",
            start: "top 70%",
            end: "top 70%",
            scrub: 2

        }

    });

    tl9.from(".teamsectiontext h2", {

        y: 100,
        opacity: 0,
        duration: 1

    });

    tl9.from(".teamsectiontext p", {

        y: 100,
        opacity: 0,
        duration: 1

    });

}

/** Team members box */
const teamMembersSection = () => {

    let tl10 = gsap.timeline({

        scrollTrigger: {

            trigger: ".teamboxes",
            scroll: "body",
            start: "top 10%",
            end: "top 10%",
            scrub: 1

        }

    });

    tl10.from(".teamboxes .teambox", {

        scale: 0,
        duration: 20,
        opacity: 0,
        stagger: 0.2

    });

}

/** Contact us text section  */

const contactUsSection = () => {

    let tl11 = gsap.timeline({

        scrollTrigger: {

            trigger: ".contactustext",
            scroll: "body",
            start: "top 40%",
            end: "end 40%",
            scrub: 2,

        }

    });

    tl11.from(".contactustext h2", {

        y: 500,
        duration: 1,
        opacity: 0

    });

    tl11.from(".contactustext p", {

        y: 500,
        duration: 2,
        opacity: 0

    });

}

/** Contact us form section */
const contactUsFormSection = () => {

    let tl12 = gsap.timeline({

        scrollTrigger: {

            trigger: ".contactusformbox",
            scroll: "body",
            start: "top 10%",
            end: "top 10%",
            scrub: 2,

        }

    });

    tl12.from(".contactusformbox form span", {

        x: -500,
        duration: 5, 
        stagger: 0.2,
        opacity: 0

    })

    tl12.from(".contactusformbox form input, textarea", {

        x: -500,
        duration: 5, 
        stagger: 0.2,
        opacity: 0

    });

}

/** toggle box section animation */

// Toggle box 1
let toggleClass = document.getElementsByClassName("toggleicon");
toggleClass[0].classList.add("icon1");
let firstIcon = document.querySelector(".icon1");
let subHeading = document.getElementsByClassName("subheadingtext");
subHeading[0].classList.add("togglesubheading");

firstIcon.addEventListener('click', () => {
    
    $(".icon1 i").toggleClass("icon1");
    $(".togglesubheading").slideToggle(() => {

        $(".textboxes").slideToggle();

    });

});

// Toggle box 2
toggleClass[1].classList.add("icon2");
subHeading[1].classList.add("togglesubheading2");
let secondIcon = document.querySelector(".icon2");

secondIcon.addEventListener('click', () => {

    $(".icon2 i").toggleClass("icon2");
    $(".togglesubheading2").slideToggle(() => {

        $(".textboxes").slideToggle();

    });

});

// Toggle box 3
toggleClass[2].classList.add("icon3");
subHeading[2].classList.add("togglesubheading3");
let thirdIcon = document.querySelector(".icon3");

thirdIcon.addEventListener('click', () => {

    $(".icon3 i").toggleClass("icon3");
    $(".togglesubheading3").slideToggle(() => {

        $(".textboxes").slideToggle();
        $(".teamsection").toggleClass("teamtoggle");

    });

});

// Toggle box 4
toggleClass[3].classList.add("icon4");
subHeading[3].classList.add("togglesubheading4");
let fourthIcon = document.querySelector(".icon4");

fourthIcon.addEventListener('click', () => {

    $('.icon4 i').toggleClass("icon4");
    $('.togglesubheading4').slideToggle(() => {

        $(".textboxes").slideToggle();
        $(".teamsection").toggleClass("teamtoggle");

    });

});

// Toggle box 5
toggleClass[4].classList.add("icon5");
subHeading[4].classList.add("togglesubheading5");
let fifthIcon = document.querySelector(".icon5");

fifthIcon.addEventListener('click', () => {

    $('.icon5 i').toggleClass("icon5");
    $(".togglesubheading5").slideToggle(() => {

        $(".textboxes").slideToggle();
        $(".teamsection").toggleClass("teamtoggle");

    });

});

// Toggle box 6
toggleClass[5].classList.add("icon6");
subHeading[5].classList.add("togglesubheading6");
let sixthIcon = document.querySelector(".icon6");

sixthIcon.addEventListener('click', () => {

    $('.icon6 i').toggleClass("icon6");
    $(".togglesubheading6").slideToggle(() => {

        $(".textboxes").slideToggle();
        $(".teamsection").toggleClass("teamtoggle");

    });

});

/** Window loading timming function */
window.addEventListener('load', () => {

    pageAnimation();
    logofunction();
    serviceSection();
    serviceBoxAnimation();
    letMakeThingsHappen();
    caseStudySection();
    workingProcessSection();
    workingToggleBox();
    ourTeamSection();
    teamMembersSection();
    contactUsSection();
    contactUsFormSection();

});



