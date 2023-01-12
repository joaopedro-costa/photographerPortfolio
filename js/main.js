
let img1 = document.getElementById('img1'),
    img2 = document.getElementById('img2'),
    img3 = document.getElementById('img3'),
    img4 = document.getElementById('img4'),
    img5 = document.getElementById('img5'),
    img6 = document.getElementById('img6'),
    img7 = document.getElementById('img7'),
    img8 = document.getElementById('img8'),
    img9 = document.getElementById('img9'),
    logo = document.getElementById('logo'),
    nav = document.querySelectorAll('nav')[0]

    // window.addEventListener('scroll', function () {
    //     let valueY = window.scrollY
    
    //     console.log(valueY)
    
    //     document.getElementById('jsteste').innerHTML = valueY
    //     let teste = 75000
    //     img1.style.transform = 'translate(' + teste / valueY + 'px,' + teste / valueY + 'px)'
    //     img2.style.transform = 'translate(' + valueY / 10 + '%,' + valueY / 100 + '%)'
    //     img3.style.transform = 'translate(' + teste / valueY + 'px,' + teste / valueY + 'px)'
    //     img4.style.transform = 'translate(' + valueY / 30 + '%,' + teste / valueY / 2 + '%)'
    //     img5.style.transform = 'translate(' + -valueY / 10 + 'px,' + -valueY / 10 + 'px)'
    //     img6.style.transform = 'translate(' + -valueY / 10 + '%,' + teste / valueY + 'px)'
    //     img7.style.transform = 'translate(' + valueY / 7 + '%,' + valueY / 10 + '%)'
    //     img8.style.transform = 'translate(' + -teste / 2 / valueY + 'px,' + teste / valueY + 'px)'
    //     img9.style.transform = 'translate(' + teste * 2 / valueY + 'px,' + -teste / 2 / valueY / 2 + 'px)'
    //     img1.style.filter = 'blur(' + valueY / 250 + 'px )'
    //     img2.style.filter = 'blur(' + valueY / 100 + 'px )'
    //     img6.style.filter = 'blur(' + valueY / 150 + 'px )'
    //     img8.style.filter = 'blur(' + (valueY - 1150) + 'px )'
    //     img9.style.filter = 'blur(' + valueY / 300 + 'px )'
    //     if (valueY) {
    //         nav.style.backgroundColor = "rgba(0, 0, 0, 0.7)"
    //         nav.style.backdropFilter = 'blur(10px)'
    //     } else {
    //         nav.style.backgroundColor = "transparent"
    //         nav.style.backdropFilter = 'blur(0px)'
    //     }
    // })

    window.addEventListener('scroll', () => {
        var valueY = window.scrollY
        console.log(valueY)
    })
