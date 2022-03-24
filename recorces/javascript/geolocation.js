function getUVdataFromIP() {
  const IPApi = "http://ip-api.com/json";
  fetch(IPApi, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      $("#request-form-data").html(
        ` <p>${data.city}</p>
              <p>${data.timezone}</p>
              <p>${data.zip}</p>
              <p>${data.lat}</p>
              <p>${data.lon}</p>`
      );
      latitude = data.lat;
      longitude = data.lon;
      let UVApi =
        "https://api.openuv.io/api/v1/uv?lat=" + latitude + "&lng=" + longitude;
      fetch(UVApi, {
        method: "GET",
        headers: {
          "x-access-token": "0b229f7be43154465f0d898f6e117b4c",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          response = data.result;
          uvTime = response.uv_time
          uvTime = uvTime.slice(11,19)
          uvMaxTime = response.uv_max_time
          uvMaxTime = uvMaxTime.slice(11,19)
          $('#uv-index-data').html(`
          <p>${response.uv}</p>
          <p>${uvTime}</p>
          <p>${response.uv_max}</p>
          <p>${uvMaxTime}</p>
          <p>${response.safe_exposure_time.st3} minutes</p>
          `);
          sunInfo = response.sun_info.sun_times
          solarNoon = sunInfo.solarNoon.slice(11,19)
          sunrise = sunInfo.sunrise.slice(11,19)
          sunset = sunInfo.sunset.slice(11,19)
          dawn = sunInfo.dawn.slice(11,19)
          dusk = sunInfo.dusk.slice(11,19)
          goldenHourStart = sunInfo.goldenHour.slice(11,19)
          goldenHourEnd = sunInfo.goldenHourEnd.slice(11,19)

          $('#extra-sun-info').html(`
          <p>${solarNoon}</p>
          <p>${sunrise}</p>
          <p>${sunset}</p>
          <p>${dawn}</p>
          <p>${dusk}</p>
          <p>${goldenHourStart}</p>
          <p>${goldenHourEnd}</p>
          `);
        });
    });
}

function searchCityLatAndLong(query) {
  console.log(query);
  const API1 =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    query +
    ".json?access_token=pk.eyJ1IjoiY2FpZHluZ2luZ2VyIiwiYSI6ImNsMTRmYjFrMjBxbTczZHMwN3g5cWRkbnQifQ.wF8vl03Ce61pdSFekBgO6Q";

  $.getJSON(API1, function (result) {
    data = result.features[0];
    console.log(data);
    lat = Math.round(data.center[1] * 100) / 100;
    lon = Math.round(data.center[0] * 100) / 100;
    $("#request-form-data-search").html(
      ` <p>${data.text}</p>
        <p>${data.context[2].text}</p>
        <p>${lat}</p>
        <p>${lon}</p>`
    );
  });
}

// getUVdataFromIP();
