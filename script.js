$(document).ready(function() {
	 document.getElementById("query-input").addEventListener('keypress', (e) => {
	    if (e.key === 'Enter') {
	      const query = document.getElementById("query-input").value
	      submitQuery(query);
	      document.getElementById("query-input").value = '';
	      const qParagraph = document.createElement("p");
	  	  qParagraph.innerHTML = `Q: ${query}`;
	  	  qParagraph.style.fontFamily = "Helvetica";
	  	  qParagraph.style.fontSize = "large";
	  	  qParagraph.style.fontWeight = "bold";
		  $("#convo").append(qParagraph);
	    }
	});
	const getHost = () => {
    // Uncomment this if you want to hit the local endpoint
    // return 'http://127.0.0.1:8000'
    // Uncomment this if you want to hit the cloud endpoint
    return 'https://gentle-fortress-89872.herokuapp.com'   
	}
	const submitQuery = (query) => {
		fetch(`${getHost()}/models/ms_2/ask?query=${encodeURIComponent(query)}`)
		  .then((response) => response.json())
		  .then((data) => {
		  	const aParagraph = document.createElement("p");
		  	aParagraph.innerHTML = `A: ${data.message.response}`;
		  	aParagraph.style.fontFamily = "Helvetica";
			aParagraph.style.fontSize = "large";
			$("#convo").append(aParagraph);
		  });
	}
});