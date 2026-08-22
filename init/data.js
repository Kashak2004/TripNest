const sampleListings = [
  {
    title: "Cozy Beach House",
    description: "A beautiful house near the beach with an amazing ocean view.",
    image: {
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
      filename: "beach-house",
    },
    price: 2500,
    location: "Goa",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [74.124, 15.299],
    },
    category: "Trending",
  },
  {
    title: "Mountain View Cabin",
    description: "Peaceful cabin surrounded by mountains and nature.",
    image: {
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
      filename: "mountain-cabin",
    },
    price: 3200,
    location: "Manali",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.189, 32.239],
    },
    category: "Mountains",
  },
  {
    title: "Luxury Pool Villa",
    description: "Private luxury villa with a beautiful swimming pool.",
    image: {
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
      filename: "pool-villa",
    },
    price: 5500,
    location: "Udaipur",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [73.712, 24.585],
    },
    category: "Amazing Pools",
  },
  {
    title: "Modern City Apartment",
    description: "Modern apartment located in the heart of the city.",
    image: {
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      filename: "city-apartment",
    },
    price: 2800,
    location: "Mumbai",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [72.877, 19.076],
    },
    category: "Iconic Cities",
  },
  {
    title: "Forest Camping Retreat",
    description: "A quiet camping experience surrounded by lush green forests.",
    image: {
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
      filename: "forest-camp",
    },
    price: 1800,
    location: "Rishikesh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [78.267, 30.086],
    },
    category: "Camping",
  },
  {
    title: "Royal Palace Stay",
    description: "Experience a royal stay in a beautiful heritage property.",
    image: {
      url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
      filename: "royal-palace",
    },
    price: 6000,
    location: "Jaipur",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [75.787, 26.912],
    },
    category: "Castles",
  },
  {
    title: "Peaceful Farm House",
    description: "Relaxing farmhouse surrounded by fields and greenery.",
    image: {
      url: "https://images.unsplash.com/photo-1500076656116-558758c991c1",
      filename: "farm-house",
    },
    price: 2200,
    location: "Pune",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [73.856, 18.520],
    },
    category: "Farms",
  },
  {
    title: "Luxury Dome Stay",
    description: "Unique dome-shaped accommodation under the stars.",
    image: {
      url: "https://images.unsplash.com/photo-1520984032042-162d526883e0",
      filename: "dome-stay",
    },
    price: 4000,
    location: "Ladakh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.577, 34.152],
    },
    category: "Domes",
  },
  {
    title: "Houseboat Experience",
    description: "Stay on a beautiful traditional houseboat.",
    image: {
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
      filename: "houseboat",
    },
    price: 4500,
    location: "Alappuzha",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [76.338, 9.498],
    },
    category: "Boats",
  },
  {
    title: "Arctic Glass Cabin",
    description: "A unique glass cabin perfect for watching the night sky.",
    image: {
      url: "https://images.unsplash.com/photo-1517825738774-7de9363ef735",
      filename: "arctic-cabin",
    },
    price: 7000,
    location: "Iceland",
    country: "Iceland",
    geometry: {
      type: "Point",
      coordinates: [-19.0208, 64.9631],
    },
    category: "Arctic",
  },
];

module.exports = { data: sampleListings };