let li1 = window.document.getElementById('li1')
let link = window.document.getElementById('link')
let inscrevaSeBtn = window.document.getElementById('inscreva-BTN')

inscrevaSeBtn.addEventListener('mouseenter', function() {
    inscrevaSeBtn.style.color = 'white'
    inscrevaSeBtn.style.background = 'rgba(255,255,255, 0.4)'
    inscrevaSeBtn.style.border = '2px solid rgb(255, 255, 255, .4)'
    inscrevaSeBtn.style.padding = '18px'
})

inscrevaSeBtn.addEventListener('mouseleave', function() {
    inscrevaSeBtn.style.color = 'rgb(126, 1, 117)'
    inscrevaSeBtn.style.background = 'whitesmoke'
    inscrevaSeBtn.style.padding = '20px'
    inscrevaSeBtn.style.border = 'none'
})

li1.addEventListener('mouseenter', function() {
    li1.style.background = 'rgba(255,255,255, 0.5)'
    link.style.color = 'rgb(126, 1, 117)'
})

li1.addEventListener('mouseleave', function() {
    li1.style.background = ''

    link.style.color = 'white'
})