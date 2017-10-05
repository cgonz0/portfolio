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
  maxZoom: 15,
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
    return (feature.properties.Decade80s === "80s");
      },

  onEachFeature: function (feature, layer) {
            if (feature.properties && feature.properties.Decade80s) {
                layer.bindPopup("<h3 class='infoHeader'>" + feature.properties.Sitcom + "</h3><p class='infoDetail'><span>Location:</span> " + feature.properties.Location +"</p><p class='infoDetail'><span>On Air:</span> " + feature.properties.OnAir + (feature.properties.Spinoff ? "<p class='infoDetail'><span>Spin off:</span> " + feature.properties.Spinoff : ' ') + (feature.properties.SpinoffOf ? "<p class='infoDetail'><span>Spin off of:</span> " + feature.properties.SpinoffOf : ' ') + "<p class='infoDetail'><span>Network:</span> " + feature.properties.Network + (feature.properties.ImageSrc ? "<p class='image'><a href=" + feature.properties.ImageLink + " target='_blank'><img src=" + feature.properties.ImageSrc + " ></a></p>" : ' ') + (feature.properties.IntroTheme ? "<p class='intro'><a href=" + feature.properties.IntroTheme + " target='_blank'><i class='fa fa-youtube-play'></i></a></p>" : ' '));
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
    return (feature.properties.Decade90s === "90s");    
  },
  onEachFeature: function (feature, layer) {
            if (feature.properties && feature.properties.Decade90s) {
                layer.bindPopup("<h3 class='infoHeader'>" + feature.properties.Sitcom + "</h3><p class='infoDetail'><span>Location:</span> " + feature.properties.Location +"</p><p class='infoDetail'><span>On Air:</span> " + feature.properties.OnAir + (feature.properties.Spinoff ? "<p class='infoDetail'><span>Spin off:</span> " + feature.properties.Spinoff : ' ') + (feature.properties.SpinoffOf ? "<p class='infoDetail'><span>Spin off of:</span> " + feature.properties.SpinoffOf : ' ') + "<p class='infoDetail'><span>Network:</span> " + feature.properties.Network + (feature.properties.ImageSrc ? "<p class='image'><a href=" + feature.properties.ImageLink + " target='_blank'><img src=" + feature.properties.ImageSrc + " ></a></p>" : ' ') + (feature.properties.IntroTheme ? "<p class='intro'><a href=" + feature.properties.IntroTheme + " target='_blank'><i class='fa fa-youtube-play'></i></a></p>" : ' '));
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



var fictional = L.geoJson(maplistgeo, {
  filter: function(feature, layer) {
    return (feature.properties.FictionalLocation === "Yes");    
  },
  onEachFeature: function (feature, layer) {
            if (feature.properties && feature.properties.FictionalLocation) {
                layer.bindPopup("<h3 class='infoHeader'>" + feature.properties.Sitcom + "</h3><p class='infoDetail'><span>Location:</span> " + feature.properties.Location +"</p><p class='infoDetail'><span>On Air:</span> " + feature.properties.OnAir + (feature.properties.Spinoff ? "<p class='infoDetail'><span>Spin off:</span> " + feature.properties.Spinoff : ' ') + (feature.properties.SpinoffOf ? "<p class='infoDetail'><span>Spin off of:</span> " + feature.properties.SpinoffOf : ' ') + "<p class='infoDetail'><span>Network:</span> " + feature.properties.Network + (feature.properties.ImageSrc ? "<p class='image'><a href=" + feature.properties.ImageLink + " target='_blank'><img src=" + feature.properties.ImageSrc + " ></a></p>" : ' ') + (feature.properties.IntroTheme ? "<p class='intro'><a href=" + feature.properties.IntroTheme + " target='_blank'><i class='fa fa-youtube-play'></i></a></p>" : ' '));
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
  "90s": nineties,
  "Fictional Location": fictional 
};


L.control.layers(null, overlay,{collapsed:false}).addTo(map);


//Set target zoom views

var locNYC = new L.LatLng (40.748583, -73.954811);
var locLA = new L.LatLng(34.099922, -118.345413);
function zoomTo(location) {map.setView(location, [11]);}


var resetmap = function(c){
  if(c=='Reset')
   map.setView(new L.LatLng(39.8097, -98.5556), 4);
};

/*
map.on('viewreset', function()
function zoomTo(location) {map.setView(location);}*/
/*function zoomTo(location) {map.setView(location, [11]);}*/

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


