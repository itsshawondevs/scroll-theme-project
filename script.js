let scrollBar = document.querySelector('.bar')

function handleScroll(){
    const scrollY = window.scrollY
    const innerHeight = window.innerHeight
    
    const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
    )
    
    const scrollProgress = scrollY / (documentHeight - innerHeight) * 100

    scrollBar.style.width = `${scrollProgress}%`
}

window.addEventListener('scroll', handleScroll)

        // === scroll back to top ===

let scrollBackBtn = document.querySelector('.scroll_back')

scrollBackBtn.addEventListener('click',function(){
   document.documentElement.scrollTop = 0
   document.body.scrollTop > 0
})

window.addEventListener('scroll', scrollBack)

function scrollBack(){
    if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
        scrollBackBtn.style.display = 'flex'
    }
    else{
        scrollBackBtn.style.display = 'none'
    }
}

    // === theme function ===

const bodyMode = document.querySelector('#mode')

let root = document.querySelector(':root')

let darkBtn = document.querySelector('.dark_btn')
let lightBtn = document.querySelector('.light_btn')

darkBtn.addEventListener('click',function(){
    bodyMode.style.background = '#15202b'
    root.style.setProperty('--nav_bg', '#15202b')
    root.style.setProperty('--text_color', '#FFFFFF')
    root.style.setProperty('--pg_color', '#FCF8F8')
    root.style.setProperty('--sales_bg', '#15202b')
    scrollBackBtn.style.background = '#7258f7'
    lightBtn.style.color = '#FFFFFF'
    darkBtn.style.display = 'none'
    lightBtn.style.display = 'block'
})

lightBtn.addEventListener('click',function(){
    bodyMode.style.background = '#FFFFFF'
    root.style.setProperty('--nav_bg', '#DBD5FB')
    root.style.setProperty('--text_color', '#3D3430')
    root.style.setProperty('--pg_color', '#5F5450')
    root.style.setProperty('--sales_bg', '#FCF8F8')
    scrollBackBtn.style.background = '#DBD5FB'
    lightBtn.style.display = 'none'
    darkBtn.style.display = 'block'
})


