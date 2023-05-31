// Select DOM Elements
const button = document.querySelectorAll('.btn')


// Add Events __________________________________________
for(let i in button){
    button[i].addEventListener("click", function() {
        let line = this.parentNode.parentNode

        line.parentNode.removeChild(line)
    })
}
