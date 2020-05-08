// Your code goes here
let colorChange = document.querySelector('body')
colorChange.addEventListener('wheel', event => { //#8
    event.target.style.backgroundColor = 'blue'
})

let h1Event = document.querySelector('.logo-heading')
h1Event.addEventListener('click', event => { //#1
    event.target.style.color = 'green'
})

let anchorEvents = document.querySelectorAll('.nav-link')
anchorEvents.forEach(element => {
    element.addEventListener('mouseenter', event => {  //#2
        event.target.style.transform = 'scale(1.6)'
        event.target.style.transition = 'all .3s'
    })
    element.addEventListener('mouseleave', event => {  //#3
        event.target.style.transform = 'scale(1)'
    })
});

let dissapear = document.querySelector('img')
dissapear.addEventListener('dblclick', event => {  //#4
    event.target.style.display = 'none'
})

let superGrow = document.querySelector('h2')
superGrow.addEventListener('mouseover', event => {  //#5
    event.target.style.fontSize = '100px'
})

let rounded = document.querySelector('.img-fluid')  //#6
rounded.addEventListener('mousedown', event => {
    event.target.style.borderRadius = '100%'
})
rounded.addEventListener('mouseup', event => {  //#7
    event.target.style.border = '5px dotted red'
})

let lotsOfBuses = document.querySelector('.main-navigation')
lotsOfBuses.addEventListener('mousemove', event => {  //#9
    event.target.style.backgroundImage = 'url(img/BUS.png)'
})

document.addEventListener('resize', event => {
    alert('You have just resized the window!')
})