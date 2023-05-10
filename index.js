const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let btnOneEl = document.getElementById("btnOne-el")
let btnTwoEl = document.getElementById("btnTwo-el")


function generate() {
    // Password 1 //
    function passwordOne() {
        let index = Math.floor(Math.random() * characters.length)
        btnOneEl.textContent += characters[index]
    }
    for ( let i = 0; i < 16; i++) {
        passwordOne()
    }
    
    // Password 2 //
    function passwordTwo() {
        let index = Math.floor(Math.random() * characters.length)
        btnTwoEl.textContent += characters[index]
    }
    for ( let i = 0; i < 16; i++) {
        passwordTwo()
    }

}






