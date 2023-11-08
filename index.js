window.addEventListener('scroll', function() {
    const leftSidebar = document.querySelector('.left');
    const rightSidebar = document.querySelector('.right');
    const content = document.querySelector('.content'); 
    const wrapper = document.querySelector('.wrapper');

    const contentHeight = content.offsetHeight; 
    const sidebarHeight = contentHeight; 

    leftSidebar.style.height = sidebarHeight + 'px';
    rightSidebar.style.height = sidebarHeight + 'px';
});

// Page scrolls smoothly when nav links are clicked
function scrollSmoothly() {
    const navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.querySelector(link.getAttribute('href'));
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
      });
    };

    scrollSmoothly();


// collapsible

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {

var collapsibleContent = coll[i].nextElementSibling;
collapsibleContent.style.display = "none";

// expand/collapse
coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var collapsibleContent = this.nextElementSibling;
    if (this.classList.contains("flex")) {
        if (collapsibleContent.style.display === "flex") {
            collapsibleContent.style.display = "none";
        } else {
            collapsibleContent.style.display = "flex";
        }
    } else {
        if (collapsibleContent.style.display === "block") {
            collapsibleContent.style.display = "none";
        } else {
            collapsibleContent.style.display = "block";
        }
    }
});
}
