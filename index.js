window.addEventListener('scroll', function() {
    const leftSidebar = document.querySelector('.left');
    const rightSidebar = document.querySelector('.right');
    const content = document.querySelector('.content'); // Add this line
    const wrapper = document.querySelector('.wrapper');

    const contentHeight = content.offsetHeight; // Add this line
    const sidebarHeight = contentHeight; // Use contentHeight instead of windowHeight

    leftSidebar.style.height = sidebarHeight + 'px';
    rightSidebar.style.height = sidebarHeight + 'px';
});

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
