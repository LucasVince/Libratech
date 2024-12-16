window.addEventListener('load', () => {
    let loadingBg = document.querySelector('#loading-bg')
    setTimeout(() => {
        loadingBg.style.opacity = '0%'
        loadingBg.style.transition = 'opacity 1s';
        setTimeout(() => {
            loadingBg.style.display = 'none'
        }, 500)
    }, 250)
})

// código meoo bagunçado e confuso porem, se fazer um esforcinho da pra entender(eu ainda n sei usar jquerry)