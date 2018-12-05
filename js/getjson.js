// JS aditional functions

// AJAX function to load a JSON
function fetchJSONFile(path, callback) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.overrideMimeType("appplication/json");
  httpRequest.onreadystatechange = function() {
    if ((httpRequest.readyState === 4) && (httpRequest.status === 200)) {
      var data = JSON.parse(httpRequest.responseText);
      if (callback) callback(data);
    }
  };
  httpRequest.open('GET', path);
  httpRequest.send();
  if ((httpRequest.readyState === 4) && (httpRequest.status === 200)) return data;
};
