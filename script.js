 $(document).ready(function() {
	 document.getElementById("query-input").addEventListener('keypress', (e) => {
	    if (e.key === 'Enter') {
	      const query = document.getElementById("query-input").value
	      submitQuery(query);
	      document.getElementById("query-input").value = '';
	      const paragraph = document.createElement("p");
	  	  paragraph.innerHTML = `Q: ${query}`;
	  	  $("#convo").append(paragraph);
	    }
	});

	const getHost = () => {
		// Uncomment this if you want to hit the local endpoint
		// return 'http://127.0.0.1:8000'

		return 'https://gentle-fortress-89872.herokuapp.com'		
	}

	const submitQuery = (query) => {
		fetch(`${getHost()}/models/ms_2/ask?query=${encodeURIComponent(query)}`)
		  .then((response) => response.json())
		  .then((data) => {
		  	const paragraph = document.createElement("p");
		  	paragraph.innerHTML = `A: ${data.message.response}`;
		  	$("#convo").append(paragraph);
		  });
	}
});

