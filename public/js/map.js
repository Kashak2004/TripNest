// public/js/map.js

// yeh dono show.ejs se aa rahe hain:
console.log("MAP TOKEN:", mapToken);
console.log("LISTING DATA:", listingData);

mapboxgl.accessToken = mapToken;

// safety: agar geometry hi nahi hai to kuch mat karo
if (!listingData.geometry || !listingData.geometry.coordinates) {
  console.warn("No geometry for this listing, map won't render.");
} else {
  const coordinates = listingData.geometry.coordinates; // [lng, lat]

  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: coordinates,
    zoom: 9,
  });

  new mapboxgl.Marker({ color: "red" })
    .setLngLat(coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<h4>${listingData.title}</h4>
         <p>Exact Location will be provided after booking!</p>`
      )
    )
    .addTo(map);
}
