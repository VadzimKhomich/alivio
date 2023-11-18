// Mobile nav

const mobileNavButton = document.querySelector('.mobile-nav-button')
const mobileNavIcon = document.querySelector(".mobile-nav-button__icon")
const mobileNav = document.querySelector('.mobile-nav')


mobileNavButton.addEventListener('click', function() {
    mobileNavIcon.classList.toggle('active')
    mobileNav.classList.toggle('active')
    document.body.classList.toggle('no-scroll')

})

// Video

const playButton = document.querySelector('#story-button')
const video = document.querySelector('#video-story')
const videoStoryIcon = document.querySelector('#video-story-icon')
const overlay = document.querySelector('.story__video-overlay')

playButton.addEventListener('click', function() {
    function toggleOverlay(event) {
        if (event.type === 'mouseleave') {
            playButton.classList.add('hidden')
            overlay.classList.add('hidden')
        } else {
            playButton.classList.remove('hidden')
            overlay.classList.remove('hidden')
        }
    }




    if (video.paused) {
        video.play()
        videoStoryIcon.src = './image/pause.svg'
        playButton.onmouseleave = toggleOverlay
        playButton.onmouseenter = toggleOverlay
        overlay.onmouseleave = toggleOverlay
        overlay.onmouseenter = toggleOverlay




    } else {
        video.pause()
        videoStoryIcon.src = './image/Icon-large-play-white.svg'
        // playButton.onmouseleave = null
        // playButton.onmouseenter = null
    }
})


