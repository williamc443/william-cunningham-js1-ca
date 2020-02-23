const baseUrl = "https://rickandmortyapi.com/api/character/";

fetch(baseUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    rmepisodes(json);
  })
  .catch(function(error) {
    console.log(error);
  });

function rmepisodes(json) {
  const results = json.results;
  console.dir(results);
  const resultsContainer = document.querySelector(".results");

  // this is the variable the new HTML will be added to
  let html = "";

  // loop through the results
  for (let i = 0; i < results.length; i++) {
    // use properties from each result in inside the HTML
    html += `<div class="col-sm-6 col-md-4 col-lg-3">                
      <div class="card">    
          <img class="image" src="https://via.placeholder.com/300" alt="Character Name">
          <div class="details">
              <h4 class="name">Character Name</h4>
              <p>Type: Type value here</p>    
              <p>Episode count: Episode count here</p>                                  
              <a class="btn btn-primary" href="details.html?id=">Details</a>
          </div>
      </div>
  </div>`;
  }

  // once the loop is done, set the innerHTML property of the element to the new HTML
  resultsContainer.innerHTML = html;
}

function typeValue() {
  // type
  const type = document.querySelectorAll(".type");
  console.dir(results);

  // create a default value for the type
  let typeValue = "Genetic experiment";

  if (json.type) {
    // the name type exists, assign it to typeValue
    //typeValue = json.type;
  } // use typeValue, not json.type
  type.innerHTML = typeValue;
}

/* var request = new XMLHttpRequest();

request.open("GET", "https://rickandmortyapi.com/api/character/");

request.onload = function() {
  var response = request.response;
  var parsedData = JSON.parse(response);
  console.log(parsedData);
};

request.send(); */
