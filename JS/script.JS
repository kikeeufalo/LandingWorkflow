let li1 = window.document.getElementById('li1')
let link = window.document.getElementById('link')

li1.addEventListener('mouseenter', function() {
    li1.style.background = 'rgba(255,255,255, 0.6)'
    link.style.color = 'rgb(126, 1, 117)'
    link.style.fontWeight = '600'
})