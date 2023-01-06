projects = document.querySelectorAll('.project')
toggleNav = document.querySelector('#toggle-nav')

projects.forEach(project => {
    project.addEventListener('mouseenter', e => {
        project.querySelector('.project-link').classList.add('show')
    })
    project.addEventListener('mouseleave', e => {
        project.querySelector('.project-link').classList.remove('show')
    })
});

toggleNav.addEventListener('click', e => {
    document.querySelector('#section-nav').classList.toggle('show-nav')
})