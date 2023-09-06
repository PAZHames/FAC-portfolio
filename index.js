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

