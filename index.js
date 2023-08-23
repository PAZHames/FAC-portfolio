window.addEventListener('scroll', function() {
    const leftSidebar = document.querySelector('.left');
    const rightSidebar = document.querySelector('.right');
    const headings = document.querySelector('.headings');
    const windowHeight = window.innerHeight;

    const headingsHeight = headings.offsetHeight;
    const sidebarHeight = windowHeight > headingsHeight ? windowHeight : headingsHeight;

    leftSidebar.style.height = sidebarHeight + 'px';
    rightSidebar.style.height = sidebarHeight + 'px';
});
