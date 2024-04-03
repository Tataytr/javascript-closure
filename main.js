

const button = document.querySelectorAll('button')

button.forEach(function(eachButton) {

    eachButton.addEventListener('click', function() {

        document.getElementById('hello').style.color = eachButton.dataset.color
        
    })
    
})