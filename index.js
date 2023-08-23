window.addEventListener('scroll', function() {
    const leftSidebar = document.querySelector('.left');
    const rightSidebar = document.querySelector('.right');
    const wrapper = document.querySelector('.wrapper');
    const windowHeight = window.innerHeight;

    const headingsHeight = wrapper.offsetHeight;
    const sidebarHeight = windowHeight > headingsHeight ? windowHeight : headingsHeight;

    leftSidebar.style.height = sidebarHeight + 'px';
    rightSidebar.style.height = sidebarHeight + 'px';
});
