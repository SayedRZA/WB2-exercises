function displayGreeting() {
    
    var name = document.getElementById("nameInput").value;

   
    if (name) {
       
        var greeting = "Hello, " + name + "!";
        document.getElementById("greeting").textContent = greeting;
    } else {
        
        document.getElementById("greeting").textContent = "Please enter your name.";
    }
}

