
window.addEventListener('DOMContentLoaded', (event) => {
	let searchButton = document.getElementById("bttn");
	searchButton.addEventListener('click', loadXMLDoc);
});

function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
    }
  };
  xhttp.open("GET", "http://localhost:8000/superheroes.php", true);
  xhttp.send();
 }