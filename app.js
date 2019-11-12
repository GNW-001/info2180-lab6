
window.addEventListener('DOMContentLoaded', (event) => {
	let searchButton = document.getElementById("bttn");
	searchButton.addEventListener('click', loadXMLDoc);
});

function loadXMLDoc() {
	let name = useless();
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var result = this.responseText;
			var search = result.split(/%/);
			updatePage(search);
		}
	};
	xhttp.open("POST", "http://localhost:8080/superheroes.php", true);
	xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
	xhttp.send("name="+name);
 }

function useless() {
 	let avenger = document.getElementById("in").value;
	avenger = avenger.trim();
	//return avenger.charAt(0).toUpperCase() + avenger.slice(1);
	return avenger.replace(/\w\S*/g, function(txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
        );
}

function updatePage(search) {
	if (search.length > 1) {
	document.getElementById("result").innerHTML = '<h3>'+search[1]+'</h3>'+'<h4>'+search[0]+'</h4>'+'<p>'+search[2]+'</p>';
	} else {
		document.getElementById("result").innerHTML = search;
	}

}