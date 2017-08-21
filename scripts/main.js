// dropdown menu

var main = function() {
  $('.dropdown img').click(function() {
    $('.dropdown-menu').toggle();
  });
};
 
$(document).ready(main);

$(function(){

// menu modal popup

var appendthis =  ("<div class='modal-overlay js-modal-close'></div>");

  $('a[data-modal-id]').click(function(e) {
    e.preventDefault();
    $("body").append(appendthis);
    $(".modal-overlay").fadeTo(500, 0.7);
    //$(".js-modalbox").fadeIn(500);
    var modalBox = $(this).attr('data-modal-id');
    $('#'+modalBox).fadeIn($(this).data());
  });  
  
  
$(".js-modal-close, .modal-overlay").click(function() {
  $(".modal-box, .modal-overlay").fadeOut(500, function() {
    $(".modal-overlay").remove();
  });
});
 
$(window).resize(function() {
  $(".modal-box").css({
    //top: ($(window).height() - $(".modal-box").outerHeight()) / 2,
    //left: ($(window).width() - $(".modal-box").outerWidth()) / 2
  });
});
 
$(window).resize();
 
});



// js and leaflet map


var tileLayer = L.tileLayer('https://api.mapbox.com/styles/v1/cgonza/cj4hmmeji35942rp5tehaqvle/tiles/256/{z}/{x}/{y}?access_token={token}', {
    attribution: 'MapBox',
    token: 'pk.eyJ1IjoiY2dvbnphIiwiYSI6ImNqNGhtNHo5czAxMjIzMm5xeGpuM2x3ZjYifQ.VTojBophVZa--pcX3CCixQ'
  });


var map = L.map('mapid', {
  center: [39.8097, -98.5556],
  zoom: 4,
  minZoom: 3,
  maxZoom: 12,
  scrollWheelZoom:false,
  layers: tileLayer
});


/*var icon = L.icon({iconUrl: 'images/90s-marker-icon-2x.png', iconSize: [30, 30]});*/

/*function onEachFeature (feature, layer) {
  layer.bindPopup("<h3 class='infoHeader'>" + feature.properties.Sitcom + "</h3><p class='infoDetail'><span>Location:</span> " + feature.properties.Location +"</p><p class='infoDetail'><span>On Air:</span> " + feature.properties.Years + "<p class='infoDetail'><span>Decade:</span> " + feature.properties.Decade +"</p><p class='infoDetail'><span>Network:</span> " + feature.properties.Network +"</p>"
);
  layer.setIcon(icon);
};*/

/*L.geoJson(maplistgeo, {
  onEachFeature: onEachFeature
}).addTo(map);*/



var eighties = L.geoJson(maplistgeo, {
filter: function(feature, layer) {
    return (feature.properties.Decade === "80s");
      },

  onEachFeature: function (feature, layer) {
            if (feature.properties && feature.properties.Decade) {
                layer.bindPopup("<h3 class='infoHeader'>" + feature.properties.Sitcom + "</h3><p class='infoDetail'><span>Location:</span> " + feature.properties.Location +"</p><p class='infoDetail'><span>On Air:</span> " + feature.properties.Years + "<p class='infoDetail'><span>Decade:</span> " + feature.properties.Decade +"</p><p class='infoDetail'><span>Network:</span> " + feature.properties.Network +"</p>");
            }
        },

         pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                    radius: 10,
                    fillColor: "#15cec9",
                    color: "#15cec9",
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 1

                });
        }


  }).addTo(map);




var nineties = L.geoJson(maplistgeo, {
  filter: function(feature, layer) {
    return (feature.properties.Decade === "90s");    
  },
  onEachFeature: function (feature, layer) {
            if (feature.properties && feature.properties.Decade) {
                layer.bindPopup("<h3 class='infoHeader'>" + feature.properties.Sitcom + "</h3><p class='infoDetail'><span>Location:</span> " + feature.properties.Location +"</p><p class='infoDetail'><span>On Air:</span> " + feature.properties.Years + "<p class='infoDetail'><span>Decade:</span> " + feature.properties.Decade +"</p><p class='infoDetail'><span>Network:</span> " + feature.properties.Network +"</p>");
            }
        },


        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                    radius: 10,
                    fillColor: "#15cec9",
                    color: "#15cec9",
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 1
                });
        }

}).addTo(map);



var basemap = {
  "First Basemap": tileLayer
};

var overlay = {
  "80s": eighties,
  "90s": nineties
};



L.control.layers(null, overlay,{collapsed:false}).addTo(map);




/*
L.marker([39.8097, -98.5556]).addTo(map)
  .bindPopup("<b>Hello world!</b><br />I am a popup."); 
*/

//geoJSON




// name prompt
/*
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome back, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
};
*/


