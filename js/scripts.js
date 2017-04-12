var map = L.map('mapContainer', {
  scrollWheelZoom: false
}).setView([40.735021, -73.994787], 12);

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
}).addTo(map);

var restaurantsCrew = [
  {
    name: 'Armani Restaurant',
    coord: [40.762102, -73.974202],
  },
  {
    name: 'Gotham Bar and Grill',
    coord: [40.734435, -73.993699],
  },
  {
    name: '99 Favor Taste',
    coord: [40.717635, -73.992544],
  },
  {
    name: 'Saigon Shack',
    coord: [40.729719, -74.000633],
  },
  {
    name: 'Café China',
    coord: [40.750292, -73.982050],
  },
]

var attractionsCrew = [
  {
    name: 'The Metropolitan Museum of Art',
    coord: [40.779843, -73.962740],
  },
  {
    name: 'The Museum of Modern Art',
    coord: [40.761449, -73.977686],
  },
  {
    name: 'Whitney Museum of American Art',
    coord: [40.739999, -74.008851],
  },
  {
    name: 'American Museum of Natural History',
    coord: [40.781270, -73.973214],
  },
  {
    name: 'Statue of Liberty National Monument',
    coord: [40.689698, -74.044446],
  },
]

var hotelsCrew = [
  {
    name: 'New York Marriott Marquis',
    coord: [40.758636, -73.986130],
  },
  {
    name: 'Millenium Hilton',
    coord: [40.711261, -74.010288],
  },
  {
    name: 'Hotel Pennsylvania',
    coord: [40.750324, -73.990805],
  },
]

var restaurantsLayerGroup = L.layerGroup();

restaurantsCrew.forEach(function(data) {
  var thisCircleMarker = L.circleMarker(data.coord, {
    color: 'black',
    fillColor: 'red',
    fillOpacity: .9,
    weight: 1,
  })
    .bindPopup(data.name)
   

  restaurantsLayerGroup.addLayer(thisCircleMarker);
});

var attractionsLayerGroup = L.layerGroup();

attractionsCrew.forEach(function(data) {
  var thisCircleMarker = L.circleMarker(data.coord, {
    color: 'orange',
    fillColor: 'steelblue',
    fillOpacity: .9,
    weight: 1,
  })
    .bindPopup(data.name)
    .addTo(map)


    attractionsLayerGroup.addLayer(thisCircleMarker);
});

var hotelsLayerGroup = L.layerGroup();

hotelsCrew.forEach(function(data) {
  var thisMarker = L.marker(data.coord, {
    title: data.name, 
  });

  thisMarker.bindPopup(data.name);

  hotelsLayerGroup.addLayer(thisMarker);
  
});

restaurantsLayerGroup.addTo(map);
attractionsLayerGroup.addTo(map);
hotelsLayerGroup.addTo(map);


var boroughs = {
  "Restaurant": restaurantsLayerGroup,
  "Attraction": attractionsLayerGroup,
  "Hotel": hotelsLayerGroup,
}

L.control.layers(null, boroughs, {
  collapsed: false
}).addTo(map);


$('.favorite-restaurant').on('click', function() {
  map.flyTo([40.762102, -73.974202], 16)
});

$('.favorite-attraction').on('click', function() {
  map.flyTo([40.779843, -73.962740], 16)
});

$('.favorite-hotel').on('click', function() {
  map.flyTo([40.758636, -73.986130], 16)
});

$('.reset').on('click', function() {
  map.flyTo([40.735021, -73.994787], 12);
});
