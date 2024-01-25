
//let username = window.prompt("What is your name?");
//document.getElementById("p2").textContent = username
let username;
let pass;
document.getElementById("submit").onclick = function(){
	pass = document.getElementById("Pass").value;
	document.getElementById("p1").textContent = "Your password is " + pass;
	username = document.getElementById("User").value;
	document.getElementById("h1").textContent = "hi " +username;
}