


function sound(key){
    switch (key) {
        
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play()
            break;
        case "a":
            var kick = new Audio("sounds/kick.mp3");
            kick.play()
            break;
        case "s":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play()
            break;
        case "d":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play()
            break;
        case "j":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play()
            break;
        case "k":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play()
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play()
            break;
    
        default: console.log(buttonClicked);
            break;
    }
}

for (var i =0; i < 7; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        var buttonClicked = this.textContent;
        sound(buttonClicked);
        keyAnimation(buttonClicked);
    })
} 

document.addEventListener("keydown", function(event){
    sound(event.key);
    keyAnimation(event.key); 
})

function keyAnimation(key){
    var keypressed = document.querySelector("."+key);
    keypressed.classList.add("pressed");
    setTimeout(function(){
        keypressed.classList.remove("pressed");
    }, 100)
}