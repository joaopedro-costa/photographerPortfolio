window.addEventListener('scroll', function () {
    var valueY = Math.round(window.scrollY)
    let nav = document.querySelectorAll('nav')[0]
    if (valueY) {
        nav.style.backgroundColor = "rgba(0, 0, 0, 0.7)"
        nav.style.backdropFilter = 'blur(10px)'
    } else {
        nav.style.backgroundColor = "#000"
        nav.style.backdropFilter = 'blur(0px)'
    }
})

let foto = document.querySelectorAll('.foto')
let foto1 = document.querySelectorAll('.foto')[0]
let foto2 = document.querySelectorAll('.foto')[1]
let foto3 = document.querySelectorAll('.foto')[2]
let foto4 = document.querySelectorAll('.foto')[3]
let foto5 = document.querySelectorAll('.foto')[4]
let foto6 = document.querySelectorAll('.foto')[5]
let foto7 = document.querySelectorAll('.foto')[6]
let foto8 = document.querySelectorAll('.foto')[7]
let foto9 = document.querySelectorAll('.foto')[8]
let foto10 = document.querySelectorAll('.foto')[9]
let foto11 = document.querySelectorAll('.foto')[10]
let foto12 = document.querySelectorAll('.foto')[11]
let foto13 = document.querySelectorAll('.foto')[12]
let foto14 = document.querySelectorAll('.foto')[13]
let foto15 = document.querySelectorAll('.foto')[14]
let foto16 = document.querySelectorAll('.foto')[15]
let foto17 = document.querySelectorAll('.foto')[16]
let foto18 = document.querySelectorAll('.foto')[17]
let foto19 = document.querySelectorAll('.foto')[18]
let foto20 = document.querySelectorAll('.foto')[19]
let fechar = document.getElementById('fechar')
let div = document.getElementById('fotografia')
let fullscreen = document.getElementById('fullscreen')

foto1.style.backgroundImage = 'url(https://images.pexels.com/photos/758898/pexels-photo-758898.png?auto=compress&cs=tinysrgb&w=1600)'
foto2.style.backgroundImage = 'url(https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=1600)'
foto3.style.backgroundImage = 'url(https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1600)'
foto4.style.backgroundImage = 'url(https://images.pexels.com/photos/1589820/pexels-photo-1589820.jpeg?auto=compress&cs=tinysrgb&w=1600)'
foto5.style.backgroundImage = 'url(https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1600)'
foto6.style.backgroundImage = 'url(https://images.pexels.com/photos/1573007/pexels-photo-1573007.jpeg?auto=compress&cs=tinysrgb&w=1600)'
foto7.style.backgroundImage = 'url(https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=1600)'
foto8.style.backgroundImage = 'url(https://images.pexels.com/photos/1024968/pexels-photo-1024968.jpeg?auto=compress&cs=tinysrgb&w=1600)'
foto9.style.backgroundImage = 'url(https://images.pexels.com/photos/759668/pexels-photo-759668.jpeg?auto=compress&cs=tinysrgb&w=1600)'
foto10.style.backgroundImage = 'url(https://images.pexels.com/photos/1533648/pexels-photo-1533648.jpeg?auto=compress&cs=tinysrgb&w=1600)'
foto11.style.backgroundImage = 'url(https://images.pexels.com/photos/1603884/pexels-photo-1603884.jpeg?auto=compress&cs=tinysrgb&w=1600)'
foto12.style.backgroundImage = 'url(https://images.pexels.com/photos/933118/pexels-photo-933118.jpeg?auto=compress&cs=tinysrgb&w=1600)'
foto13.style.backgroundImage = 'url(https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=1600)'
foto14.style.backgroundImage = 'url(https://images.pexels.com/photos/1488324/pexels-photo-1488324.jpeg?auto=compress&cs=tinysrgb&w=1600)'
foto15.style.backgroundImage = 'url(https://images.pexels.com/photos/1646730/pexels-photo-1646730.jpeg?auto=compress&cs=tinysrgb&w=1600)'
foto16.style.backgroundImage = 'url(https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1600)'
foto17.style.backgroundImage = 'url(https://images.pexels.com/photos/1589818/pexels-photo-1589818.jpeg?auto=compress&cs=tinysrgb&w=1600)'
foto18.style.backgroundImage = 'url(https://images.pexels.com/photos/2403568/pexels-photo-2403568.jpeg?auto=compress&cs=tinysrgb&w=1600)'
foto19.style.backgroundImage = 'url(https://images.pexels.com/photos/230290/pexels-photo-230290.jpeg?auto=compress&cs=tinysrgb&w=1600)'
foto20.style.backgroundImage = 'url(https://images.pexels.com/photos/3342697/pexels-photo-3342697.jpeg?auto=compress&cs=tinysrgb&w=1600)'

foto.forEach(item => {
    item.addEventListener('click', function () {
        div.style.backgroundImage = item.style.backgroundImage

        fullscreen.style.opacity = '1'
        fullscreen.style.zIndex = '99999'
        fullscreen.style.display = 'flex'
        fullscreen.style.top = window.pageYOffset + 'px'
        disableScroll()
    })
})

fechar.addEventListener('click', function () {
    fullscreen.style.opacity = '0'
    fullscreen.style.zIndex = '-10'
    enableScroll()
})

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
    }));
} catch (e) { }

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}