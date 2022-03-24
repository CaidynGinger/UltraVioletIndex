

function getLatLongFromIP() {
  const API1 = "http://ip-api.com/json";
  fetch(API1, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      $("#request-form-data").html(
        ` <p>${data.city}</p>
          <p>${data.timezone}</p>
          <p>${data.zip}</p>
          <p>${data.lat}</p>
          <p>${data.lon}</p>`
      );
    });
}

function searchCityLatAndLong(query) {
    console.log(query)
    const API1 ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+query+'.json?access_token=pk.eyJ1IjoiY2FpZHluZ2luZ2VyIiwiYSI6ImNsMTRmYjFrMjBxbTczZHMwN3g5cWRkbnQifQ.wF8vl03Ce61pdSFekBgO6Q';

    $.getJSON(API1, function(result){
        console.log(result);
    });
}

// getLatLongFromIP()
