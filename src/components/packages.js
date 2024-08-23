const packages = {
    Paris: {
      culture: [
        { name: 'Louvre Museum', duration: 2 },
        { name: 'Notre-Dame Cathedral', duration: 1 },
        { name: 'Sainte-Chapelle', duration: 1 },
        { name: 'Cathedral', duration: 1 },
        { name: 'Melike-Chapelle', duration: 1 },
      ],
      food: [
        { name: 'Le Jules Verne', duration: 2 },
        { name: 'L\'Ambroisie', duration: 2 },
        { name: 'Pierre Hermé', duration: 1 },
      ],
      museum: [
        { name: 'Musée d\'Orsay', duration: 2 },
        { name: 'Centre Pompidou', duration: 2 },
        { name: 'Rodin Museum', duration: 1 },
      ],
      mix: [
        { name: 'Eiffel Tower', duration: 1 },
        { name: 'Louvre Museum', duration: 2 },
        { name: 'Le Jules Verne', duration: 2 },
      ],
    },
    NewYork: {
      culture: [
        { name: 'Metropolitan Museum of Art', duration: 2 },
        { name: 'Broadway Show', duration: 3 },
        { name: 'Central Park', duration: 1 },
        { name: 'Times Square', duration: 1 },
        { name: 'Statue of Liberty', duration: 2 },
      ],
      food: [
        { name: 'Katz\'s Delicatessen', duration: 1 },
        { name: 'Le Bernardin', duration: 2 },
        { name: 'Joe\'s Pizza', duration: 1 },
      ],
      museum: [
        { name: 'American Museum of Natural History', duration: 2 },
        { name: 'Museum of Modern Art (MoMA)', duration: 2 },
        { name: 'Guggenheim Museum', duration: 1 },
      ],
      mix: [
        { name: 'Empire State Building', duration: 1 },
        { name: 'Brooklyn Bridge', duration: 1 },
        { name: 'Central Park', duration: 1 },
        { name: 'Joe\'s Pizza', duration: 1 },
        { name: 'Statue of Liberty', duration: 2 },
      ],
    },
    LosAngeles: {
      culture: [
        { name: 'Getty Center', duration: 2 },
        { name: 'Los Angeles County Museum of Art (LACMA)', duration: 2 },
        { name: 'Griffith Observatory', duration: 1 },
      ],
      food: [
        { name: 'République', duration: 2 },
        { name: 'Bestia', duration: 2 },
        { name: 'Grand Central Market', duration: 1 },
      ],
      outdoors: [
        { name: 'Santa Monica Pier', duration: 1 },
        { name: 'Venice Beach', duration: 2 },
        { name: 'Hollywood Sign Hike', duration: 1 },
      ],
      entertainment: [
        { name: 'Universal Studios Hollywood', duration: 1 },
        { name: 'Hollywood Walk of Fame', duration: 1 },
        { name: 'Disneyland Resort', duration: 2 },
      ],
    },LasVegas: {
      culture: [
        { name: 'Bellagio Gallery of Fine Art', duration: 2 },
        { name: 'The Neon Museum', duration: 1 },
        { name: 'Hoover Dam', duration: 3 },
        { name: 'Red Rock Canyon', duration: 2 },
        { name: 'Las Vegas Strip', duration: 2 },
      ],
      food: [
        { name: 'Joël Robuchon', duration: 2 },
        { name: 'Gordon Ramsay Hell\'s Kitchen', duration: 2 },
        { name: 'Lotus of Siam', duration: 1 },
      ],
      museum: [
        { name: 'The Mob Museum', duration: 2 },
        { name: 'Madame Tussauds', duration: 2 },
        { name: 'Discovery Children\'s Museum', duration: 1 },
      ],
      mix: [
        { name: 'Fremont Street Experience', duration: 1 },
        { name: 'Stratosphere Tower', duration: 1 },
        { name: 'Las Vegas Strip', duration: 2 },
        { name: 'Lotus of Siam', duration: 1 },
        { name: 'The Neon Museum', duration: 1 },
      ],
    },
    Miami: {
      beaches: [
        { name: 'South Beach', duration: 2 },
        { name: 'Miami Beach Boardwalk', duration: 1 },
        { name: 'Crandon Park Beach', duration: 2 },
      ],
      art: [
        { name: 'Wynwood Walls', duration: 1 },
        { name: 'Pérez Art Museum Miami (PAMM)', duration: 2 },
        { name: 'The Bass', duration: 1 },
      ],
      food: [
        { name: 'Joess Stone Crab', duration: 2 },
        { name: 'Versailles', duration: 1 },
        { name: 'Azucar Ice Cream Company', duration: 1 },
      ],
      nightlife: [
        { name: 'LIV Nightclub', duration: 1 },
        { name: 'E11EVEN Miami', duration: 1 },
        { name: 'Mango\'s Tropical Cafe', duration: 2 },
      ],
    },
    SanFrancisco: {
      culture: [
        { name: 'Golden Gate Bridge', duration: 2 },
        { name: 'Alcatraz Island', duration: 3 },
        { name: 'Fisherman\'s Wharf', duration: 2 },
        { name: 'Chinatown', duration: 1 },
        { name: 'Mission District Murals', duration: 2 },
      ],
      food: [
        { name: 'The Slanted Door', duration: 2 },
        { name: 'Tartine Bakery & Cafe', duration: 1 },
        { name: 'In-N-Out Burger', duration: 1 },
      ],
      museum: [
        { name: 'Exploratorium', duration: 2 },
        { name: 'San Francisco Museum of Modern Art (SFMOMA)', duration: 2 },
        { name: 'California Academy of Sciences', duration: 3 },
      ],
      mix: [
        { name: 'Lombard Street', duration: 1 },
        { name: 'Golden Gate Park', duration: 3 },
        { name: 'The Painted Ladies', duration: 1 },
        { name: 'The Castro', duration: 2 },
      ],
    },
    Toronto: {
      landmarks: [
        { name: 'CN Tower', duration: 2 },
        { name: 'Royal Ontario Museum (ROM)', duration: 2 },
        { name: 'Casa Loma', duration: 1 },
      ],
      nature: [
        { name: 'High Park', duration: 2 },
        { name: 'Toronto Islands', duration: 1 },
        { name: 'Edwards Gardens', duration: 1 },
      ],
      food: [
        { name: 'St. Lawrence Market', duration: 2 },
        { name: 'Kensington Market', duration: 1 },
        { name: 'Distillery District', duration: 1 },
      ],
      culture: [
        { name: 'Art Gallery of Ontario (AGO)', duration: 2 },
        { name: 'Theatre District', duration: 1 },
        { name: 'Chinatown', duration: 1 },
      ],
    },Vancouver: {
      outdoors: [
        { name: 'Stanley Park', duration: 2 },
        { name: 'Capilano Suspension Bridge Park', duration: 2 },
        { name: 'Grouse Mountain', duration: 1 },
      ],
      culture: [
        { name: 'Vancouver Art Gallery', duration: 2 },
        { name: 'Museum of Anthropology', duration: 1 },
        { name: 'Science World', duration: 1 },
      ],
      food: [
        { name: 'Granville Island Public Market', duration: 2 },
        { name: 'Chinatown', duration: 1 },
        { name: 'Robson Street', duration: 1 },
      ],
      beaches: [
        { name: 'English Bay Beach', duration: 1 },
        { name: 'Kitsilano Beach', duration: 2 },
        { name: 'Third Beach', duration: 1 },
      ],
    },  Montreal: {
      culture: [
        { name: 'Montreal Museum of Fine Arts', duration: 2 },
        { name: 'Notre-Dame Basilica of Montreal', duration: 1 },
        { name: 'Old Montreal', duration: 2 },
        { name: 'Mount Royal Park', duration: 2 },
        { name: 'St. Joseph\'s Oratory of Mount Royal', duration: 1 },
      ],
      food: [
        { name: 'Schwartz\'s Deli', duration: 1 },
        { name: 'Bagels at St-Viateur Bagel', duration: 1 },
        { name: 'Poutine at La Banquise', duration: 1 },
      ],
      museum: [
        { name: 'Pointe-à-Callière Museum', duration: 2 },
        { name: 'Montreal Science Centre', duration: 2 },
        { name: 'McCord Museum', duration: 1 },
      ],
      mix: [
        { name: 'Jean-Talon Market', duration: 2 },
        { name: 'Montreal Botanical Garden', duration: 3 },
        { name: 'Montreal Biodome', duration: 2 },
        { name: 'Underground City', duration: 2 },
      ],
    },Calgary: {
      landmarks: [
        { name: 'Calgary Tower', duration: 2 },
        { name: 'Glenbow Museum', duration: 1 },
        { name: 'Peace Bridge', duration: 1 },
      ],
      nature: [
        { name: 'Banff National Park', duration: 2 },
        { name: 'Fish Creek Provincial Park', duration: 2 },
        { name: 'Nose Hill Park', duration: 1 },
      ],
      food: [
        { name: 'Calgary Farmers\' Market', duration: 2 },
        { name: 'River Café', duration: 1 },
        { name: 'The Palomino Smokehouse', duration: 1 },
      ],
      culture: [
        { name: 'Heritage Park Historical Village', duration: 2 },
        { name: 'Calgary Zoo', duration: 1 },
        { name: 'Canadas Sports Hall of Fame', duration: 1 },
      ],
    },Ottawa: {
      landmarks: [
        { name: 'Parliament Hill', duration: 2 },
        { name: 'National Gallery of Canada', duration: 1 },
        { name: 'Rideau Canal', duration: 1 },
      ],
      nature: [
        { name: 'Gatineau Park', duration: 2 },
        { name: 'Mud Lake Conservation Area', duration: 2 },
        { name: 'Rideau River', duration: 1 },
      ],
      food: [
        { name: 'ByWard Market', duration: 2 },
        { name: 'Play Food & Wine', duration: 1 },
        { name: 'Elgin Street Diner', duration: 1 },
      ],
      culture: [
        { name: 'Canadian Museum of History', duration: 2 },
        { name: 'National Arts Centre', duration: 1 },
        { name: 'Diefenbunker Cold War Museum', duration: 1 },
      ],
  },Melbourne: {
    landmarks: [
      { name: 'Federation Square', duration: 2 },
      { name: 'Royal Exhibition Building', duration: 1 },
      { name: 'Flinders Street Station', duration: 1 },
    ],
    nature: [
      { name: 'Royal Botanic Gardens Victoria', duration: 2 },
      { name: 'Yarra River', duration: 2 },
      { name: 'St Kilda Beach', duration: 1 },
    ],
    food: [
      { name: 'Queen Victoria Market', duration: 2 },
      { name: 'Chin Chin', duration: 1 },
      { name: 'Hosier Lane Street Art', duration: 1 },
    ],
    culture: [
      { name: 'Melbourne Museum', duration: 2 },
      { name: 'National Gallery of Victoria', duration: 1 },
      { name: 'Australian Centre for the Moving Image', duration: 1 },
    ],
  }, Sydney: {
    culture: [
      { name: 'Sydney Opera House', duration: 2 },
      { name: 'The Rocks', duration: 1 },
      { name: 'Art Gallery of New South Wales', duration: 2 },
      { name: 'Bondi Beach', duration: 2 },
      { name: 'Royal Botanic Garden', duration: 2 },
    ],
    food: [
      { name: 'Quay', duration: 2 },
      { name: 'Bourke Street Bakery', duration: 1 },
      { name: 'The Grounds of Alexandria', duration: 2 },
    ],
    museum: [
      { name: 'Australian Museum', duration: 2 },
      { name: 'Hyde Park Barracks Museum', duration: 1 },
      { name: 'Museum of Contemporary Art Australia', duration: 2 },
    ],
    mix: [
      { name: 'Sydney Harbour Bridge Climb', duration: 3 },
      { name: 'Taronga Zoo', duration: 3 },
      { name: 'Darling Harbour', duration: 2 },
      { name: 'Manly Beach', duration: 2 },
    ],
  },
  Brisbane: {
    landmarks: [
      { name: 'South Bank Parklands', duration: 2 },
      { name: 'Story Bridge', duration: 1 },
      { name: 'Brisbane City Hall', duration: 1 },
    ],
    nature: [
      { name: 'Lone Pine Koala Sanctuary', duration: 2 },
      { name: 'Mount Coot-tha Botanic Gardens', duration: 2 },
      { name: 'Kangaroo Point Cliffs Park', duration: 1 },
    ],
    food: [
      { name: 'Eat Street Northshore', duration: 2 },
      { name: 'Stokehouse Q', duration: 1 },
      { name: 'The Charming Squire', duration: 1 },
    ],
    culture: [
      { name: 'Queensland Art Gallery', duration: 2 },
      { name: 'Queensland Museum', duration: 1 },
      { name: 'Sir Thomas Brisbane Planetarium', duration: 1 },
    ],
  },Perth: {
    landmarks: [
      { name: 'Kings Park and Botanic Garden', duration: 2 },
      { name: 'Swan Bells Tower', duration: 1 },
      { name: 'Perth Mint', duration: 1 },
    ],
    nature: [
      { name: 'Rottnest Island', duration: 2 },
      { name: 'Cottesloe Beach', duration: 2 },
      { name: 'Perth Zoo', duration: 1 },
    ],
    food: [
      { name: 'Fremantle Markets', duration: 2 },
      { name: 'Petition Kitchen', duration: 1 },
      { name: 'The Reveley', duration: 1 },
    ],
    culture: [
      { name: 'Art Gallery of Western Australia', duration: 2 },
      { name: 'Perth Cultural Centre', duration: 1 },
      { name: 'Western Australian Museum', duration: 1 },
    ],
  },Adelaide: {
    landmarks: [
      { name: 'Adelaide Oval', duration: 2 },
      { name: 'Glenelg Jetty', duration: 1 },
      { name: 'Victoria Square', duration: 1 }
    ],
    nature: [
      { name: 'Hallett Cove Conservation Park', duration: 2 },
      { name: 'Mount Lofty House', duration: 2 },
      { name: 'Belair National Park', duration: 1 }
    ],
    food: [
      { name: 'Central Market', duration: 2 },
      { name: 'Haighs Chocolates Factory', duration: 1 },
      { name: 'D Arrys Verandah Restaurant', duration: 1 }
    ],
    culture: [
      { name: 'South Australian Museum', duration: 2 },
      { name: 'Migration Museum', duration: 1 },
      { name: 'Art Gallery of South Australia', duration: 1 }
    ]
  },
  London: {
    culture: [
      { name: 'British Museum', duration: 3 },
      { name: 'Tower of London', duration: 2 },
      { name: 'Buckingham Palace', duration: 2 },
      { name: 'Shakespeare\'s Globe', duration: 2 },
      { name: 'Westminster Abbey', duration: 2 },
    ],
    food: [
      { name: 'The Ledbury', duration: 2 },
      { name: 'Dishoom', duration: 1 },
      { name: 'The Wolseley', duration: 2 },
    ],
    museum: [
      { name: 'Natural History Museum', duration: 2 },
      { name: 'Tate Modern', duration: 2 },
      { name: 'Victoria and Albert Museum', duration: 2 },
    ],
    mix: [
      { name: 'London Eye', duration: 1 },
      { name: 'River Thames Cruise', duration: 2 },
      { name: 'Covent Garden', duration: 2 },
      { name: 'Camden Market', duration: 2 },
    ],
  },
  Manchester: {
    culture: [
      { name: 'Manchester Art Gallery', duration: 2 },
      { name: 'Old Trafford Stadium', duration: 2 },
      { name: 'John Rylands Library', duration: 1 },
      { name: 'The Whitworth', duration: 2 },
      { name: 'Chetham\'s Library', duration: 1 },
    ],
    food: [
      { name: 'The French', duration: 2 },
      { name: 'Mackie Mayor', duration: 1 },
      { name: 'Almost Famous', duration: 1 },
    ],
    museum: [
      { name: 'Science and Industry Museum', duration: 2 },
      { name: 'People\'s History Museum', duration: 2 },
      { name: 'Manchester Museum', duration: 2 },
    ],
    mix: [
      { name: 'Northern Quarter', duration: 2 },
      { name: 'Castlefield Urban Heritage Park', duration: 2 },
      { name: 'Salford Quays', duration: 2 },
    ],
  },Birmingham: {
    landmarks: [
      { name: "Birmingham Cathedral", "duration": 1 },
      { name: "Bullring Shopping Center", "duration": 2 },
      { name: "Cadbury World", "duration": 3 }
    ],
    nature: [
      { name: 'Edgbaston Reservoir', duration: 2 },
      { name: 'Selly Manor and Gardens', duration: 2 },
      { name: 'Winterbourne Botanic Garden', duration: 1 }
    ],
    food: [
      { name: 'Digbeth Dining Club', duration: 1 },
      { name: 'Purnells Bistro', duration: 1 },
      { name: 'The Edgbaston', duration: 1 }
    ],
    culture: [
      { name: 'Ikon Gallery', duration: 1 },
      { name: 'Birmingham Museum & Art Gallery', duration: 2 },
      { name: 'Black Country Living Museum', duration: 3 }
    ]
  },
  Glasgow: {
    landmarks: [
      { name: 'Kelvingrove Art Museum & Gallery', duration: 2 },
      { name: 'Glasgow Cathedral', duration: 1 },
      { name: 'University of Glasgow', duration: 1 }
    ],
    nature: [
      { name: 'Glasgow Botanic Gardens & Kibble Palace', duration: 2 },
      { name:'Pollok Country Park & Pollok House', duration: 2 },
      { name: 'Queens Park', duration: 1 }
    ],
    food: [
      { name: 'Gamba', duration: 1 },
      { name: 'Cail Bruich', duration: 1 },
      { name: 'Two Fat Ladies at the Buttery', duration: 1 }
    ],
    culture: [
      { name: 'Lighthouse Gallery of Modern Art', duration: 1 },
      { name: 'National Piping & Bagpipe Museum', duration: 1 },
      { name: 'Glasgow Science Centre', duration: 2 }
    ]
  },
  Liverpool: {
    landmarks: [
      { name: "Anfield Stadium", duration: 2 },
      { name: "Royal Liver Building", duration: 1 },
      { name: "St George's Hall", duration: 1 }
    ],
    nature: [
      { name: "Sefton Park", duration: 2 },
      { name: "Albert Dock", duration: 1 },
      { name: "New Brighton Beach", duration: 2 }
    ],
    food: [
      { name: "Cowshed Liverpool", duration: 1 },
      { name: "Peaky Blinders Bar", duration: 1 },
      { name: "The Art School", duration: 1 }
    ],
    culture: [
      { name: "The Beatles Story", duration: 2 },
      { name: "International Slavery Museum", duration: 1 },
      { name: "Walker Art Gallery", duration: 1 }
    ]
  },
  Berlin: {
    landmarks: [
      { name: "Brandenburg Gate", duration: 1 },
      { name: "Reichstag Building", duration: 1 },
      { name: "Charlottenburg Palace", duration: 2 }
    ],
    nature: [
      { name: "Tiergarten", duration: 3 },
      { name: "Grunewald Forest", duration: 2 },
      { name: "Humboldt University Botanical Garden", duration: 1 }
    ],
    food: [
      { name: "Markthalle Neun", duration: 2 },
      { name: "Berliner Currywurst", duration: 1 },
      { name: "Döner Kebab", duration: 1 }
    ],
    culture: [
      { name: "Museum Island", duration: 3 },
      { name: "Berlin Cathedral", duration: 2 },
      { name: "Berlin Wall Memorial", duration: 1 }
    ]
  },Hamburg: {
    culture: [
      { name: 'Miniatur Wunderland', duration: 2 },
      { name: 'Elbphilharmonie', duration: 2 },
      { name: 'Speicherstadt', duration: 1 },
      { name: 'Hamburg Rathaus', duration: 1 },
      { name: 'Planten un Blomen', duration: 2 },
    ],
    food: [
      { name: 'Fischmarkt', duration: 1 },
      { name: 'Rindermarkthalle St. Pauli', duration: 1 },
      { name: 'Hamburger Fischmarkt', duration: 1 },
    ],
    museum: [
      { name: 'Hamburger Kunsthalle', duration: 2 },
      { name: 'International Maritime Museum', duration: 2 },
      { name: 'CHOCOVERSUM by HACHEZ', duration: 1 },
    ],
    mix: [
      { name: 'St. Michael\'s Church', duration: 1 },
      { name: 'HafenCity', duration: 2 },
      { name: 'Alster Lakes', duration: 2 },
      { name: 'Reeperbahn', duration: 2 },
    ],
  },Munich: {
    culture: [
      { name: 'Marienplatz', duration: 1 },
      { name: 'Neuschwanstein Castle', duration: 3 },
      { name: 'Englischer Garten', duration: 2 },
      { name: 'Deutsches Museum', duration: 3 },
      { name: 'Nymphenburg Palace', duration: 2 },
    ],
    food: [
      { name: 'Hofbräuhaus', duration: 2 },
      { name: 'Viktualienmarkt', duration: 1 },
      { name: 'Augustiner-Keller', duration: 2 },
    ],
    museum: [
      { name: 'BMW Welt', duration: 2 },
      { name: 'Pinakothek der Moderne', duration: 2 },
      { name: 'Residenz Museum', duration: 2 },
    ],
    mix: [
      { name: 'English Garden', duration: 2 },
      { name: 'Olympiapark', duration: 2 },
      { name: 'Allianz Arena', duration: 2 },
      { name: 'Glockenspiel', duration: 1 },
    ],
  },Cologne: {
    culture: [
      { name: 'Cologne Cathedral', duration: 2 },
      { name: 'Museum Ludwig', duration: 2 },
      { name: 'Hohenzollern Bridge', duration: 1 },
      { name: 'Cologne Zoo', duration: 2 },
      { name: 'Römisch-Germanisches Museum', duration: 2 },
    ],
    food: [
      { name: 'Früh am Dom', duration: 2 },
      { name: 'Päffgen', duration: 2 },
      { name: 'Brauhaus Sion', duration: 2 },
    ],
    museum: [
      { name: 'Chocolate Museum', duration: 2 },
      { name: 'Wallraf-Richartz Museum', duration: 2 },
      { name: 'Museum Schnütgen', duration: 1 },
    ],
    mix: [
      { name: 'Rhine River Cruise', duration: 2 },
      { name: 'Old Town (Altstadt)', duration: 2 },
      { name: 'Botanical Garden Flora', duration: 1 },
    ],
  },Marseille: {
      landmarks: [
        { name: 'Old Town', duration: 2 },
        { name: 'Vieux Port', duration: 1 },
        { name: "Château d'If", duration: 2 }
      ],
      nature: [
        { name: 'Calanques National Park', duration: 3 },
        { name: 'Plage du Prado', duration: 2 },
        { name: 'Parc Borély', duration: 1 }
      ],
      food: [
        { name: 'Marché du Cannebière', duration: 2 },
        { name: 'Bistrot du Sud', duration: 1 },
        { name: 'Le Petit Nice', duration: 1 }
      ],
      culture: [
        { name: "Musée des Civilisations de l'Europe et de la Méditerranée", duration: 2 },
        { name: 'Palais Longchamp', duration: 1 },
        { name: 'La Friche Bellecourte', duration: 1 }
      ]
    },
    Lyon: {
      landmarks: [
        { name: 'Roman Theatre', duration: 1 },
        { name: 'Fourvière Hill', duration: 2 },
        { name: "Presqu'île District", duration: 3 }
      ],
      nature: [
        { name: 'Parc de la Tête d Or', duration: 2 },
        { name: 'Croix-Rousse District', duration: 1 },
        { name: 'Confluence District', duration: 1 }
      ],
      food: [
        { name: 'Les Halles de Lyon', duration: 2 },
        { name: 'Paul Bocuse Restaurant', duration: 1 },
        { name: 'Bouchons Lyonnais', duration: 1 }
      ],
      culture: [
        { name: 'Musée d Art Contemporain', duration: 2 },
        { name: 'Musée des Beaux-Arts', duration: 1 },
        { name: 'Musée Miniature et Cinéma', duration: 1 }
      ]
    },
    Toulous: {
      landmarks: [
        { name: 'Capitole Square', duration: 1 },
        { name: 'Basilique Saint-Sernin', duration: 2 },
        { name: 'Jardin Japonais Pierre Baudis', duration: 1 }
      ],
      nature: [
        { name: 'Canal du Midi', duration: 3 },
        { name: 'Montauban Bridge', duration: 2 },
        { name: 'Georges Clemenceau Library', duration: 1 }
      ],
      food: [
        { name: 'Place du Capitole Market', duration: 2 },
        { name: 'Restaurant Le Ptit Landais', duration: 1 },
        { name: 'Le Bistro des Capucins', duration: 1 }
      ],
      culture: [
        { name: 'Musée des Augustins', duration: 2 },
        { name: 'Musée Georges Labit', duration: 1 },
        { name: 'Musée du Vieux Toulouse', duration: 1 }
      ]
    },
    Nice: {
      landmarks: [
        { name: 'Promenade des Anglais', duration: 2 },
        { name: 'Castle Hill', duration: 3 },
        { name: 'Villa Ephrussi de Rothschild', duration: 2 }
      ],
      nature: [
        { name: 'Baie des Anges', duration: 2 },
        { name: 'Jardin Albert Ier', duration: 1 },
        { name: 'Parc Phoenix', duration: 1 }
      ],
      food: [
        { name: 'Marché aux Fleurs de Nice', duration: 2 },
        { name: 'Restaurant Mirazur', duration: 1 },
        { name: 'Le Grand Café', duration: 1 }
      ],
      culture: [
        { name: 'Matisse Museum', duration: 2 },
        { name: 'Marc Chagall National Museum', duration: 1 },
        { name: 'Nice Observatory', duration: 1 }
      ]
  }, Rome: {
    culture: [
      { name: 'Colosseum', duration: 2 },
      { name: 'Vatican Museums', duration: 3 },
      { name: 'Trevi Fountain', duration: 1 },
      { name: 'Roman Forum', duration: 2 },
      { name: 'Pantheon', duration: 1 },
    ],
    food: [
      { name: 'Trattoria da Teo', duration: 2 },
      { name: 'Giolitti', duration: 1 },
      { name: 'Pinsere', duration: 1 },
    ],
    museum: [
      { name: 'Capitoline Museums', duration: 2 },
      { name: 'Borghese Gallery', duration: 2 },
      { name: 'MAXXI', duration: 2 },
    ],
    mix: [
      { name: 'Spanish Steps', duration: 1 },
      { name: 'Piazza Navona', duration: 1 },
      { name: 'Villa Borghese', duration: 2 },
      { name: 'Castel Sant\'Angelo', duration: 2 },
    ],
  },
  Milan: {
    culture: [
      { name: 'Duomo di Milano', duration: 2 },
      { name: 'Teatro alla Scala', duration: 2 },
      { name: 'Galleria Vittorio Emanuele II', duration: 1 },
      { name: 'Sforzesco Castle', duration: 2 },
      { name: 'Leonardo da Vinci Museum', duration: 2 },
    ],
    food: [
      { name: 'Ristorante da Giacomo', duration: 2 },
      { name: 'Luini', duration: 1 },
      { name: 'Nobu Milano', duration: 2 },
    ],
    museum: [
      { name: 'Pinacoteca di Brera', duration: 2 },
      { name: 'Museum of the Twentieth Century', duration: 2 },
      { name: 'Museo Poldi Pezzoli', duration: 2 },
    ],
    mix: [
      { name: 'Navigli District', duration: 2 },
      { name: 'Bosco Verticale', duration: 1 },
      { name: 'San Siro Stadium', duration: 2 },
      { name: 'Biblioteca Ambrosiana', duration: 2 },
    ],
  },
  Naples: {
    culture: [
      { name: 'Pompeii', duration: 3 },
      { name: 'Naples National Archaeological Museum', duration: 2 },
      { name: 'Mount Vesuvius', duration: 3 },
      { name: 'Castel dell\'Ovo', duration: 2 },
      { name: 'Galleria Umberto I', duration: 1 },
    ],
    food: [
      { name: 'L\'Antica Pizzeria da Michele', duration: 2 },
      { name: 'Gran Caffè Gambrinus', duration: 1 },
      { name: 'Trattoria Nennella', duration: 2 },
    ],
    museum: [
      { name: 'Capodimonte Museum', duration: 2 },
      { name: 'Madre Museum', duration: 2 },
      { name: 'San Martino National Museum', duration: 2 },
    ],
    mix: [
      { name: 'Spaccanapoli', duration: 2 },
      { name: 'Piazza del Plebiscito', duration: 1 },
      { name: 'Via San Gregorio Armeno', duration: 1 },
      { name: 'Royal Palace of Naples', duration: 2 },
    ],
  },
  Turin: {
    culture: [
      { name: 'Mole Antonelliana', duration: 2 },
      { name: 'Egyptian Museum', duration: 2 },
      { name: 'Palazzo Madama', duration: 2 },
      { name: 'Basilica di Superga', duration: 2 },
      { name: 'Royal Palace of Turin', duration: 2 },
    ],
    food: [
      { name: 'Trattoria Valenza', duration: 2 },
      { name: 'Caffè al Bicerin', duration: 1 },
      { name: 'Baladin', duration: 2 },
    ],
    museum: [
      { name: 'Cinema Museum', duration: 2 },
      { name: 'Museum of Rescued Art', duration: 2 },
      { name: 'MAO Museum of Oriental Art', duration: 2 },
    ],
    mix: [
      { name: 'Piazza Castello', duration: 1 },
      { name: 'Parco del Valentino', duration: 2 },
      { name: 'Basilica di Superga', duration: 2 },
      { name: 'Porta Palazzo Market', duration: 2 },
    ],
  },
  Palermo: {
    culture: [
      { name: 'Teatro Massimo', duration: 2 },
      { name: 'Cappella Palatina', duration: 1 },
      { name: 'Palermo Cathedral', duration: 2 },
      { name: 'Norman Palace', duration: 2 },
      { name: 'Quattro Canti', duration: 1 },
    ],
    food: [
      { name: 'Antica Focacceria San Francesco', duration: 2 },
      { name: 'Ballarò Market', duration: 1 },
      { name: 'Trattoria Ai Cascinari', duration: 2 },
    ],
    museum: [
      { name: 'Palazzo dei Normanni', duration: 2 },
      { name: 'Regional Archaeological Museum', duration: 2 },
      { name: 'Gemmellaro Geological Museum', duration: 1 },
    ],
    mix: [
      { name: 'Orto Botanico', duration: 1 },
      { name: 'Palermo Botanical Garden', duration: 2 },
      { name: 'Vucciria Market', duration: 1 },
      { name: 'Capuchin Catacombs', duration: 1 },
    ],
  },Madrid: {
    "landmarks": [
      { "name": "Retiro Park", "duration": 2 },
      { "name": "Royal Palace of Madrid", "duration": 2 },
      { "name": "Prado Museum", "duration": 3 }
    ],
    "nature": [
      { "name": "Royal Botanical Garden", "duration": 1 },
      { "name": "El Parque del Oeste", "duration": 2 },
      { "name": "Monasterio de las Descalzas Reales", "duration": 1 }
    ],
    "food": [
      { "name": "Mercado de San Miguel", "duration": 2 },
      { "name": "Restaurante Botín", "duration": 1 },
      { "name": "Tapas Barrio de Las Letras", "duration": 1 }
    ],
    "culture": [
      { "name": "Thyssen-Bornemisza Museum", "duration": 2 },
      { "name": "Square of Spain", "duration": 1 },
      { "name": "Museum of Contemporary Art", "duration": 1 }
    ]
  },
  Barcelona: {
    "landmarks": [
      { "name": "Sagrada Familia", "duration": 2 },
      { "name": "Park Güell", "duration": 2 },
      { "name": "Casa Batlló", "duration": 1 }
    ],
    "nature": [
      { "name": "Barceloneta Beach", "duration": 2 },
      { "name": "Montjuïc Castle", "duration": 2 },
      { "name": "Botanical Garden of Barcelona", "duration": 1 }
    ],
    "food": [
      { "name": "Boquería Market", "duration": 2 },
      { "name": "Restaurant El Bulli", "duration": 1 },
      { "name": "Paella at Barceloneta", "duration": 1 }
    ],
    "culture": [
      { "name": "Picasso Museum", "duration": 2 },
      { "name": "Museum of Catalan Art", "duration": 1 },
      { "name": "Barcelona Cathedral", "duration": 1 }
    ]
  },
  Valencia: {
    "landmarks": [
      { "name": "City of Arts and Sciences", "duration": 3 },
      { "name": "Valencia Cathedral", "duration": 1 },
      { "name": "Turia Gardens", "duration": 2 }
    ],
    "nature": [
      { "name": "Albufera Natural Park", "duration": 3 },
      { "name": "Maritime Museum", "duration": 1 },
      { "name": "Bioparc Valencia", "duration": 2 }
    ],
    "food": [
      { "name": "Mercado Central", "duration": 2 },
      { "name": "Restaurant Cal Pep", "duration": 1 },
      { "name": "Paella at Mercado de Colón", "duration": 1 }
    ],
    "culture": [
      { "name": "Museum of Fine Arts", "duration": 2 },
      { "name": "Valencian Institute of Modern Art", "duration": 1 },
      { "name": "Valencia Silk Exchange", "duration": 1 }
    ]
  },
  Seville: {
    "landmarks": [
      { "name": "Seville Cathedral", "duration": 2 },
      { "name": "Real Alcazar", "duration": 2 },
      { "name": "Torre del Oro", "duration": 1 }
    ],
    "nature": [
      { "name": "Maria Luisa Park", "duration": 2 },
      { "name": "Plaza de España", "duration": 1 },
      { "name": "Triana Bridge", "duration": 1 }
    ],
    "food": [
      { "name": "Mercado de Triana", "duration": 2 },
      { "name": "Restaurant Eme", "duration": 1 },
      { "name": "Flamenco Show at Tablao Flamenco Los Gallos", "duration": 1 }
    ],
    "culture": [
      { "name": "Museum of Fine Arts", "duration": 2 },
      { "name": "Museum of Flamenco Dance", "duration": 1 },
      { "name": "Archaeological Museum of Seville", "duration": 1 }
    ]
  },
  Zaragoza: {
    "landmarks": [
      { "name": "Basílica del Pilar", "duration": 2 },
      { "name": "Aljafería Palace", "duration": 2 },
      { "name": "Museum of Zaragoza", "duration": 1 }
    ],
    "nature": [
      { "name": "Ebro Delta", "duration": 3 },
      { "name": "Sierra de Moncayo", "duration": 2 },
      { "name": "Paseo del Portillo", "duration": 1 }
    ],
    "food": [
      { "name": "Mercado Central", "duration": 2 },
      { "name": "Restaurant Casa Lacima", "duration": 1 },
      { "name": "Paella at Restaurante El Jardín", "duration": 1 }
    ],
    "culture": [
      { "name": "Museum of Zaragoza", "duration": 2 },
      { "name": "Museum of Fine Arts", "duration": 1 },
      { "name": "Museum of Aragonese Art", "duration": 1 }
    ]
  },
  Amsterdam: {
    culture: [
      { name: 'Van Gogh Museum', duration: 2 },
      { name: 'Rijksmuseum', duration: 3 },
      { name: 'Anne Frank House', duration: 2 },
      { name: 'Vondelpark', duration: 2 },
      { name: 'Royal Palace of Amsterdam', duration: 1 },
    ],
    food: [
      { name: 'De Foodhallen', duration: 2 },
      { name: 'Pancake Bakery', duration: 1 },
      { name: 'FEBO', duration: 1 },
    ],
    museum: [
      { name: 'Stedelijk Museum', duration: 2 },
      { name: 'Rembrandt House Museum', duration: 2 },
      { name: 'NEMO Science Museum', duration: 2 },
    ],
    mix: [
      { name: 'Canal Cruise', duration: 2 },
      { name: 'Dam Square', duration: 1 },
      { name: 'Jordaan District', duration: 2 },
      { name: 'Red Light District', duration: 2 },
    ],
  },
  Rotterdam: {
    culture: [
      { name: 'Markthal Rotterdam', duration: 2 },
      { name: 'Cube Houses', duration: 1 },
      { name: 'Erasmusbrug', duration: 1 },
      { name: 'Museum Boijmans Van Beuningen', duration: 2 },
      { name: 'Euromast', duration: 2 },
    ],
    food: [
      { name: 'Fenix Food Factory', duration: 2 },
      { name: 'Nieuwe Binnenweg', duration: 1 },
      { name: 'Oude Haven', duration: 1 },
    ],
    museum: [
      { name: 'Maritime Museum Rotterdam', duration: 2 },
      { name: 'Kunsthal Rotterdam', duration: 2 },
      { name: 'Wereldmuseum', duration: 2 },
    ],
    mix: [
      { name: 'Delfshaven', duration: 1 },
      { name: 'SS Rotterdam', duration: 2 },
      { name: 'Witte de Withstraat', duration: 1 },
      { name: 'Kijk-Kubus', duration: 1 },
    ],
  },
  'The Hague': {
    culture: [
      { name: 'Madurodam', duration: 2 },
      { name: 'Binnenhof', duration: 1 },
      { name: 'Mauritshuis', duration: 2 },
      { name: 'Scheveningen Beach', duration: 2 },
      { name: 'Peace Palace', duration: 2 },
    ],
    food: [
      { name: 'Pier Scheveningen', duration: 2 },
      { name: 'Grote Markt', duration: 1 },
      { name: 'Hague Market', duration: 1 },
    ],
    museum: [
      { name: 'Escher in Het Paleis', duration: 2 },
      { name: 'Panorama Mesdag', duration: 1 },
      { name: 'Louwman Museum', duration: 2 },
    ],
    mix: [
      { name: 'Binnenhof Gardens', duration: 1 },
      { name: 'Haagse Bos', duration: 2 },
      { name: 'Scheveningen Pier', duration: 1 },
      { name: 'Clangor', duration: 2 },
    ],
  },
  Utrecht: {
    culture: [
      { name: 'Dom Tower', duration: 2 },
      { name: 'Rietveld Schröder House', duration: 1 },
      { name: 'Centraal Museum', duration: 2 },
      { name: 'Utrecht Botanical Gardens', duration: 2 },
      { name: 'St. Martin\'s Cathedral', duration: 2 },
    ],
    food: [
      { name: 'Olivijn', duration: 2 },
      { name: 'Buurten in de Fabriek', duration: 1 },
      { name: 'Winkel van Sinkel', duration: 2 },
    ],
    museum: [
      { name: 'Railway Museum', duration: 2 },
      { name: 'Museum Catharijneconvent', duration: 2 },
      { name: 'Speelklok Museum', duration: 2 },
    ],
    mix: [
      { name: 'Canal Cruise', duration: 2 },
      { name: 'De Haar Castle', duration: 2 },
      { name: 'Miffy Museum', duration: 1 },
      { name: 'Utrecht University Botanic Gardens', duration: 2 },
    ],
  },
  Eindhoven: {
    culture: [
      { name: 'Van Abbemuseum', duration: 2 },
      { name: 'Philips Museum', duration: 2 },
      { name: 'St. Catherine\'s Church', duration: 1 },
      { name: 'DAF Museum', duration: 2 },
      { name: 'Evoluon', duration: 2 },
    ],
    food: [
      { name: 'De Vooruitgang', duration: 2 },
      { name: 'Down Town Gourmet Market', duration: 1 },
      { name: 'Strijp-S', duration: 2 },
    ],
    museum: [
      { name: 'PreHistorisch Dorp', duration: 2 },
      { name: 'Van Gogh-Roosegaarde Cycle Path', duration: 1 },
      { name: 'DAF Museum', duration: 2 },
    ],
    mix: [
      { name: 'Stratumseind', duration: 1 },
      { name: 'St. Catherine\'s Church', duration: 1 },
      { name: 'Genneper Parks', duration: 2 },
      { name: 'Eindhoven Museum', duration: 2 },
    ],
  },Tokyo: {
    culture: [
      { name: 'Senso-ji Temple', duration: 2 },
      { name: 'Tokyo Tower', duration: 2 },
      { name: 'Meiji Shrine', duration: 2 },
      { name: 'Shibuya Crossing', duration: 1 },
      { name: 'Tokyo National Museum', duration: 2 },
    ],
    food: [
      { name: 'Tsukiji Fish Market', duration: 2 },
      { name: 'Ramen Street', duration: 1 },
      { name: 'Sushi Dai', duration: 1 },
    ],
    museum: [
      { name: 'National Museum of Western Art', duration: 2 },
      { name: 'Edo-Tokyo Museum', duration: 2 },
      { name: 'Ghibli Museum', duration: 2 },
    ],
    mix: [
      { name: 'Odaiba', duration: 2 },
      { name: 'Tokyo Disneyland', duration: 1 },
      { name: 'Ueno Park', duration: 2 },
      { name: 'Akihabara', duration: 2 },
    ],
  },
  Yokohama: {
    culture: [
      { name: 'Yokohama Chinatown', duration: 2 },
      { name: 'Yokohama Red Brick Warehouse', duration: 1 },
      { name: 'Sankeien Garden', duration: 2 },
      { name: 'Yokohama Landmark Tower', duration: 2 },
      { name: 'Yokohama Cosmo World', duration: 2 },
    ],
    food: [
      { name: 'Ramen Museum', duration: 2 },
      { name: 'Motomachi Shopping Street', duration: 1 },
      { name: 'Cup Noodles Museum', duration: 2 },
    ],
    museum: [
      { name: 'Yokohama Museum of Art', duration: 2 },
      { name: 'Yokohama Maritime Museum', duration: 2 },
      { name: 'Shin-Yokohama Ramen Museum', duration: 2 },
    ],
    mix: [
      { name: 'Yokohama Bay Bridge', duration: 1 },
      { name: 'Minato Mirai 21', duration: 2 },
      { name: 'Yokohama Hakkeijima Sea Paradise', duration: 2 },
      { name: 'Yokohama Stadium', duration: 2 },
    ],
  },
  Osaka: {
    culture: [
      { name: 'Osaka Castle', duration: 2 },
      { name: 'Dotonbori', duration: 2 },
      { name: 'Shitennoji Temple', duration: 2 },
      { name: 'Umeda Sky Building', duration: 2 },
      { name: 'Osaka Aquarium Kaiyukan', duration: 3 },
    ],
    food: [
      { name: 'Kuromon Ichiba Market', duration: 2 },
      { name: 'Takoyaki Museum', duration: 1 },
      { name: 'Kushikatsu Daruma', duration: 2 },
    ],
    museum: [
      { name: 'Osaka Museum of History', duration: 2 },
      { name: 'Osaka Science Museum', duration: 2 },
      { name: 'Osaka Museum of Housing and Living', duration: 2 },
    ],
    mix: [
      { name: 'Shinsekai', duration: 2 },
      { name: 'Tempozan Ferris Wheel', duration: 1 },
      { name: 'America-mura', duration: 2 },
      { name: 'Sumiyoshi Taisha', duration: 2 },
    ],
  },
  Nagoya: {
    culture: [
      { name: 'Nagoya Castle', duration: 2 },
      { name: 'Osu Kannon Temple', duration: 2 },
      { name: 'Sakae District', duration: 1 },
      { name: 'Atsuta Shrine', duration: 2 },
      { name: 'Port of Nagoya Public Aquarium', duration: 2 },
    ],
    food: [
      { name: 'Yamachan', duration: 2 },
      { name: 'Hitsumabushi', duration: 1 },
      { name: 'Tenmusu', duration: 1 },
    ],
    museum: [
      { name: 'Nagoya City Science Museum', duration: 2 },
      { name: 'Toyota Commemorative Museum of Industry and Technology', duration: 2 },
      { name: 'Nagoya City Art Museum', duration: 2 },
    ],
    mix: [
      { name: 'Nagoya TV Tower', duration: 1 },
      { name: 'Nagoya Port', duration: 2 },
      { name: 'Noritake Garden', duration: 2 },
      { name: 'Nagoya City Science Museum', duration: 2 },
    ],
  },
  Sapporo: {
    culture: [
      { name: 'Sapporo TV Tower', duration: 1 },
      { name: 'Odori Park', duration: 2 },
      { name: 'Sapporo Beer Museum', duration: 2 },
      { name: 'Mount Moiwa Ropeway', duration: 2 },
      { name: 'Historical Village of Hokkaido', duration: 2 },
    ],
    food: [
      { name: 'Sapporo Ramen Alley', duration: 2 },
      { name: 'Nijo Fish Market', duration: 1 },
      { name: 'Sapporo Beer Garden', duration: 2 },
    ],
    museum: [
      { name: 'Hokkaido Museum of Modern Art', duration:2},
      { name: 'Hokkaido Museum of Modern Art', duration: 2 },
        { name: 'Shiroi Koibito Park', duration: 2 },
        { name: 'Moerenuma Park', duration: 2 },
      ],
      mix: [
        { name: 'Otaru Canal', duration: 2 },
        { name: 'Nakajima Park', duration: 2 },
        { name: 'Sapporo Clock Tower', duration: 1 },
        { name: 'Susukino', duration: 2 },
      ],
    },
    Seoul: {
      "landmarks": [
        { "name": "Namdaemun Market", "duration": 2 },
        { "name": "Gangnam District", "duration": 2 },
        { "name": "Changdeokgung Palace", "duration": 2 }
      ],
      "nature": [
        { "name": "N Seoul Tower", "duration": 1 },
        { "name": "Hongdae Area", "duration": 2 },
        { "name": "Yongsan Park", "duration": 1 }
      ],
      "food": [
        { "name": "Myeongdong Street Food", "duration": 2 },
        { "name": "Insadong", "duration": 1 },
        { "name": "Itaewon", "duration": 1 }
      ],
      "culture": [
        { "name": "National Museum of Korea", "duration": 2 },
        { "name": "Seoul Museum of History", "duration": 1 },
        { "name": "Seoul Folk Village", "duration": 2 }
      ]
    },
    Busan: {
      "landmarks": [
        { "name": "Haeundae Beach", "duration": 2 },
        { "name": "Gamcheon Culture Village", "duration": 2 },
        { "name": "Busan Tower", "duration": 1 }
      ],
      "nature": [
        { "name": "Taejongdae Park", "duration": 3 },
        { "name": "Oryukdo Skywalk", "duration": 1 },
        { "name": "Songdo Beach", "duration": 2 }
      ],
      "food": [
        { "name": "Gukje Market", "duration": 2 },
        { "name": "Jjimjilbang", "duration": 1 },
        { "name": "Haedong Yonggungsa Seafood", "duration": 1 }
      ],
      "culture": [
        { "name": "Busan Museum of Art", "duration": 2 },
        { "name": "Busan Cinema Center", "duration": 1 },
        { "name": "Busan Maritime Autodrome", "duration": 1 }
      ]
    },
    Incheon: {
      "landmarks": [
        { "name": "Incheon International Airport", "duration": 1 },
        { "name": "Incheon Chinatown", "duration": 1 },
        { "name": "Incheon Landing Operation Memorial Hall", "duration": 1 }
      ],
      "nature": [
        { "name": "Yeonsu Beach", "duration": 2 },
        { "name": "Incheon Songdo Moonlight Festival Park", "duration": 2 },
        { "name": "Incheon Dream Park", "duration": 1 }
      ],
      "food": [
        { "name": "Incheon Fish Market", "duration": 2 },
        { "name": "Incheon Chinatown", "duration": 1 },
        { "name": "Incheon Seafood Street", "duration": 1 }
      ],
      "culture": [
        { "name": "Incheon Art Platform", "duration": 2 },
        { "name": "Incheon Metropolitan City Museum", "duration": 1 },
        { "name": "Incheon National University Museum", "duration": 1 }
      ]
    },
    Daegu: {
      "landmarks": [
        { "name": "Daegu Arboretum Park", "duration": 2 },
        { "name": "Donghwasa Temple", "duration": 2 },
        { "name": "Daegu Alps Park", "duration": 1 }
      ],
      "nature": [
        { "name": "Daegu Culture Museum", "duration": 1 },
        { "name": "Donghwasa Temple", "duration": 2 },
        { "name": "Daegu Alps Park", "duration": 1 }
      ],
      "food": [
        { "name": "Daegu Galleria Department Store", "duration": 2 },
        { "name": "Daegu Traditional Market", "duration": 1 },
        { "name": "Daegu Ssamjang", "duration": 1 }
      ],
      "culture": [
        { "name": "Daegu Culture Museum", "duration": 2 },
        { "name": "Donghwasa Temple", "duration": 2 },
        { "name": "Daegu Alps Park", "duration": 1 }
      ]
    },
    Daejeon: {
      "landmarks": [
        { "name": "Daejeon Science Park", "duration": 2 },
        { "name": "Daejeon Railroad Museum", "duration": 1 },
        { "name": "Daejeon World Cup Stadium", "duration": 1 }
      ],
      "nature": [
        { "name": "Daejeon Expo Park", "duration": 2 },
        { "name": "Daejeon Zoo", "duration": 2 },
        { "name": "Daejeon Botanical Garden", "duration": 1 }
      ],
      "food": [
        { "name": "Daejeon Traditional Market", "duration": 2 },
        { "name": "Daejeon Galleria Department Store", "duration": 1 },
        { "name": "Daejeon Ssamjang", "duration": 1 }
      ],
      "culture": [
        { "name": "Daejeon Science Park", "duration": 2 },
        { "name": "Daejeon Railroad Museum", "duration": 1 },
        { "name": "Daejeon World Cup Stadium", "duration": 1 }
      ]
    },
    "Shanghai": {
      "culture": [
        { "name": "The Bund", "duration": 2 },
        { "name": "Shanghai Museum", "duration": 3 },
        { "name": "Yuyuan Garden", "duration": 2 }
      ],
      "food": [
        { "name": "Din Tai Fung", "duration": 1 },
        { "name": "Xintiandi", "duration": 2 },
        { "name": "Jing'an Kerry Centre", "duration": 1 }
      ],
      "outdoors": [
        { "name": "Chongming Island", "duration": 2 },
        { "name": "Century Park", "duration": 1 },
        { "name": "Shanghai Botanical Gardens", "duration": 2 }
      ],
      "entertainment": [
        { "name": "Oriental Pearl Tower", "duration": 1 },
        { "name": "Shanghai Disneyland", "duration": 2 },
        { "name": "Shanghai Ocean Aquarium", "duration": 1 }
      ]
    },
    "Beijing": {
      "culture": [
        { "name": "Great Wall of China", "duration": 5 },
        { "name": "Forbidden City", "duration": 3 },
        { "name": "Summer Palace", "duration": 3 }
      ],
      "food": [
        { "name": "Quanjude Roast Duck", "duration": 1 },
        { "name": "Haidilao Hot Pot", "duration": 2 },
        { "name": "Nanluoguxiang Snack Street", "duration": 1 }
      ],
      "outdoors": [
        { "name": "Temple of Heaven", "duration": 2 },
        { "name": "Beihai Park", "duration": 2 },
        { "name": "Jingshan Park", "duration": 1 }
      ],
      "entertainment": [
        { "name": "Beijing Opera", "duration": 1 },
        { "name": "798 Art Zone", "duration": 2 },
        { "name": "Water Cube National Aquatics Center", "duration": 1 }
      ]
    },
    "Tianjin": {
      "culture": [
        { "name": "Ancient Cultural Street", "duration": 2 },
        { "name": "Tianjin History Museum", "duration": 2 },
        { "name": "Five Great Avenues", "duration": 2 }
      ],
      "food": [
        { "name": "Bistro 33", "duration": 1 },
        { "name": "Italian Cuisine", "duration": 2 },
        { "name": "Tianjin Seafood Wholesale Market", "duration": 1 }
      ],
      "outdoors": [
        { "name": "Tianjin Eye Ferris Wheel", "duration": 1 },
        { "name": "Tianjin Zoo", "duration": 2 },
        { "name": "Tianjin Water Park", "duration": 1 }
      ],
      "entertainment": [
        { "name": "Tianjin Grand Theater", "duration": 1 },
        { "name": "Tianjin Museum of Natural History", "duration": 2 },
        { "name": "Tianjin Binhai Amusement Park", "duration": 1 }
      ]
    },
    "Guangzhou": {
      "culture": [
        { "name": "Canton Tower", "duration": 2 },
        { "name": "Sun Yat-sen Memorial Hall", "duration": 2 },
        { "name": "Zhenhai Tower", "duration": 1 }
      ],
      "food": [
        { "name": "Yum Cha", "duration": 1 },
        { "name": "Guangdong Folk Arts Museum", "duration": 2 },
        { "name": "Pearl River Night Cruise", "duration": 1 }
      ],
      "outdoors": [
        { "name": "Yuexiu Park", "duration": 2 },
        { "name": "Ladies' Street", "duration": 1 },
        { "name": "Guangdong Science Center", "duration": 2 }
      ],
      "entertainment": [
        { "name": "Guangzhou Opera House", "duration": 1 },
        { "name": "Guangzhou Museum", "duration": 2 },
        { "name": "Haixinsha Island", "duration": 1 }
      ]
    },
    "Shenzhen": {
      "culture": [
        { "name": "Window of the World", "duration": 2 },
        { "name": "Splendid China Miniature Scenic Area", "duration": 2 },
        { "name": "Happy Valley Shenzhen", "duration": 2 }
      ],
      "food": [
        { "name": "Sea World", "duration": 1 },
        { "name": "Mission Hills Golf Club", "duration": 2 },
        { "name": "Shenzhen Safari Park", "duration": 1 }
      ],
      "outdoors": [
        { "name": "Shenzhen Bay Park", "duration": 2 },
        { "name": "Shenzhen University Town", "duration": 1 },
        { "name": "Shenzhen Mangrove Nature Reserve", "duration": 2 }
      ],
      "entertainment": [
        { "name": "Shenzhen Convention and Exhibition Center", "duration": 1 },
        { "name": "Shenzhen Happy Valley", "duration": 2 },
        { "name": "Shenzhen Wildlife Park", "duration": 1 }
      ]
    },'São Paulo': {
      culture: [
        { name: 'São Paulo Museum of Art', duration: 2 },
        { name: 'Ibirapuera Park', duration: 2 },
        { name: 'São Paulo Cathedral', duration: 1 },
        { name: 'Municipal Market of São Paulo', duration: 2 },
        { name: 'Pinacoteca do Estado de São Paulo', duration: 2 },
      ],
      food: [
        { name: 'Mercadão', duration: 2 },
        { name: 'Rua Teodoro Sampaio', duration: 1 },
        { name: 'Pizzaria Veridiana', duration: 2 },
      ],
      museum: [
        { name: 'Catavento Museum', duration: 2 },
        { name: 'Football Museum', duration: 2 },
        { name: 'Museum of the Portuguese Language', duration: 2 },
      ],
      mix: [
        { name: 'Avenida Paulista', duration: 2 },
        { name: 'São Paulo Zoo', duration: 2 },
        { name: 'São Paulo Aquarium', duration: 2 },
        { name: 'Villa-Lobos Park', duration: 2 },
      ],
    },
    'Rio de Janeiro': {
      culture: [
        { name: 'Christ the Redeemer', duration: 2 },
        { name: 'Sugarloaf Mountain', duration: 2 },
        { name: 'Copacabana Beach', duration: 2 },
        { name: 'Jardim Botânico', duration: 2 },
        { name: 'Museum of Tomorrow', duration: 2 },
      ],
      food: [
        { name: 'Feira de São Cristóvão', duration: 2 },
        { name: 'Confeitaria Colombo', duration: 1 },
        { name: 'Bar Urca', duration: 2 },
      ],
      museum: [
        { name: 'National Museum of Brazil', duration: 2 },
        { name: 'Museum of Modern Art', duration: 2 },
        { name: 'Niemeyer Museum', duration: 2 },
      ],
      mix: [
        { name: 'Lapa Arches', duration: 1 },
        { name: 'Maracanã Stadium', duration: 2 },
        { name: 'Santa Teresa District', duration: 2 },
        { name: 'Quinta da Boa Vista', duration: 2 },
      ],
    },
    Salvador: {
      culture: [
        { name: 'Pelourinho', duration: 2 },
        { name: 'Farol da Barra', duration: 1 },
        { name: 'Mercado Modelo', duration: 1 },
        { name: 'São Francisco Church and Convent', duration: 2 },
        { name: 'Bonfim Church', duration: 2 },
      ],
      food: [
        { name: 'Acarajé da Dinha', duration: 1 },
        { name: 'Casa de Tereza', duration: 2 },
        { name: 'Maria Mata Mouro', duration: 1 },
      ],
      museum: [
        { name: 'Museum of Modern Art of Bahia', duration: 2 },
        { name: 'African-Brazilian Museum', duration: 2 },
        { name: 'Rodin Bahia Museum', duration: 1 },
      ],
      mix: [
        { name: 'Porto da Barra Beach', duration: 2 },
        { name: 'Itapuã Beach', duration: 2 },
        { name: 'Dique do Tororó', duration: 1 },
        { name: 'Elevador Lacerda', duration: 1 },
      ],
    },
    Brasília: {
      culture: [
        { name: 'National Congress of Brazil', duration: 2 },
        { name: 'Palácio da Alvorada', duration: 1 },
        { name: 'Itamaraty Palace', duration: 2 },
        { name: 'Catedral Metropolitana', duration: 2 },
        { name: 'JK Memorial', duration: 2 },
      ],
      food: [
        { name: 'Fogo de Chão', duration: 2 },
        { name: 'Feira da Torre de TV', duration: 1 },
        { name: 'Brasília Shopping', duration: 2 },
      ],
      museum: [
        { name: 'National Museum of the Republic', duration: 2 },
        { name: 'National Museum', duration: 2 },
        { name: 'Memorial JK', duration: 2 },
      ],
        mix: [
          { name: 'Ponte JK', duration: 1 },
          { name: 'Parque daÁgua Mineral', duration: 2 },
          { name: 'Parque Nacional de Brasília', duration: 2 },
          { name: 'Estádio Nacional Mané Garrincha', duration: 2 },
          ],
        },
        Fortaleza: {
          culture: [
          { name: 'Beach Park', duration: 2 },
          { name: 'Praia do Futuro', duration: 2 },
          { name: 'Dragão do Mar Center of Art and Culture', duration: 2 },
          { name: 'Coco Park', duration: 2 },
          { name: 'Mucuripe Fish Market', duration: 1 },
          ],
          food: [
          { name: 'Coco Bambu', duration: 2 },
          { name: 'Feirinha Beira Mar', duration: 1 },
          { name: 'Mercado dos Pinhões', duration: 2 },
          ],
          museum: [
          { name: 'Ceará Museum', duration: 2 },
          { name: 'Museum of Fortaleza', duration: 2 },
          { name: 'Museu do Ceará', duration: 2 },
          ],
          mix: [
          { name: 'Praia de Iracema', duration: 2 },
          { name: 'Fortaleza Central Market', duration: 2 },
          { name: 'Ponte dos Ingleses', duration: 1 },
          { name: 'Praia de Morro Branco', duration: 2 },
          ],
        },
        "Mexico City": {
          "culture": [
            { "name": "National Museum of Anthropology", "duration": 3 },
            { "name": "Palacio de Bellas Artes", "duration": 2 },
            { "name": "Museo Frida Kahlo", "duration": 2 }
          ],
          "food": [
            { "name": "El Moro", "duration": 1 },
            { "name": "La Casa Azul", "duration": 2 },
            { "name": "Mercado San Juan", "duration": 1 }
          ],
          "outdoors": [
            { "name": "Chapultepec Park", "duration": 2 },
            { "name": "Lake Xochimilco", "duration": 2 },
            { "name": "Ciudad Universitaria", "duration": 1 }
          ],
          "entertainment": [
            { "name": "Teotihuacán Ruins", "duration": 3 },
            { "name": "Six Flags Mexico", "duration": 1 },
            { "name": "Poliforum Siqueiros", "duration": 2 }
          ]
        },
        "Ecatepec": {
          "culture": [
            { "name": "Templo Mayor", "duration": 2 },
            { "name": "Museum of Modern Art", "duration": 2 },
            { "name": "Museum of Contemporary Art", "duration": 2 }
          ],
          "food": [
            { "name": "Restaurante Pujol", "duration": 1 },
            { "name": "Restaurante Quintonil", "duration": 2 },
            { "name": "Mercado Roma", "duration": 1 }
          ],
          "outdoors": [
            { "name": "Parque Ecológico de Coyoacán", "duration": 2 },
            { "name": "Bosques de Chapultepec", "duration": 1 },
            { "name": "Plaza de las Tres Culturas", "duration": 1 }
          ],
          "entertainment": [
            { "name": "Cineteca Nacional", "duration": 1 },
            { "name": "Centro Cultural Roberto Cantoral", "duration": 2 },
            { "name": "Teatro Metropólitan", "duration": 1 }
          ]
        },
        "Guadalajara": {
          "culture": [
            { "name": "Catedral de Guadalajara", "duration": 2 },
            { "name": "Museo Regional de Guadalajara", "duration": 2 },
            { "name": "Museo del Tequila", "duration": 1 }
          ],
          "food": [
            { "name": "Restaurant La Chamba", "duration": 1 },
            { "name": "Restaurant El Tio", "duration": 2 },
            { "name": "Mercado San Juan de Dios", "duration": 1 }
          ],
          "outdoors": [
            { "name": "Parque Agua Azul", "duration": 2 },
            { "name": "Parque Minerva", "duration": 1 },
            { "name": "Parque Revolución", "duration": 1 }
          ],
          "entertainment": [
            { "name": "Teatro Degollado", "duration": 1 },
            { "name": "Auditorio Telmex", "duration": 2 },
            { "name": "Parque de la Viga", "duration": 1 }
          ]
        },
        "Puebla": {
          "culture": [
            { "name": "Historic Center of Puebla", "duration": 2 },
            { "name": "Cathedral of Our Lady of the Immaculate Conception", "duration": 2 },
            { "name": "Franciscan Monastery of Santa Clara", "duration": 1 }
          ],
          "food": [
            { "name": "Café des Artistes", "duration": 1 },
            { "name": "Restaurante Los Tayos", "duration": 2 },
            { "name": "Mercado el Parian", "duration": 1 }
          ],
          "outdoors": [
            { "name": "Garden of the Angels", "duration": 2 },
            { "name": "San Pedro Cholula Church", "duration": 1 },
            { "name": "Cholula Pyramid", "duration": 2 }
          ],
          "entertainment": [
            { "name": "Puebla Cathedral", "duration": 1 },
            { "name": "Museum of the Americas", "duration": 2 },
            { "name": "Puebla Ethnobotanic Garden", "duration": 1 }
          ]
        },
        "Juárez": {
          "culture": [
            { "name": "Juarez Avenue", "duration": 2 },
            { "name": "Juarez Market", "duration": 2 },
            { "name": "Juarez Cathedral", "duration": 1 }
          ],
          "food": [
            { "name": "Restaurante Juarez", "duration": 1 },
            { "name": "Restaurante Juarez II", "duration": 2 },
            { "name": "Mercado Juarez", "duration": 1 }
          ],
          "outdoors": [
            { "name": "Juarez Square", "duration": 2 },
            { "name": "Juarez Park", "duration": 1 },
            { "name": "Juarez Boulevard", "duration": 2 }
          ],
          "entertainment": [
            { "name": "Juarez Theater", "duration": 1 },
            { "name": "Juarez Museum", "duration": 2 },
            { "name": "Juarez Cultural Center", "duration": 1 }
          ]
        },
        "Cairo": {
          "culture": [
            { "name": "Egyptian Museum", "duration": 3 },
            { "name": "Khan El Khalili Bazaar", "duration": 2 },
            { "name": "Al-Azhar Park", "duration": 2 }
          ],
          "food": [
            { "name": "Felfela Restaurant", "duration": 1 },
            { "name": "Abou El Sid", "duration": 2 },
            { "name": "El Fishawy Cafe", "duration": 1 }
          ],
          "outdoors": [
            { "name": "Pyramids of Giza", "duration": 3 },
            { "name": "Saqqara Necropolis", "duration": 2 },
            { "name": "Memphis Necropolis", "duration": 1 }
          ],
          "entertainment": [
            { "name": "Cairo Citadel", "duration": 1 },
            { "name": "Cairo Opera House", "duration": 2 },
            { "name": "Cairo Tower", "duration": 1 }
          ]
        },
        "Alexandria": {
          "culture": [
            { "name": "Library of Alexandria", "duration": 2 },
            { "name": "Montazah Palace", "duration": 2 },
            { "name": "Qaitbay Citadel", "duration": 1 }
          ],
          "food": [
            { "name": "Fishawi's Coffeehouse", "duration": 1 },
            { "name": "Abu Alaa Al Askari", "duration": 2 },
            { "name": "Sofra Maamoura", "duration": 1 }
          ],
          "outdoors": [
            { "name": "Stanley Bridge", "duration": 2 },
            { "name": "Alexandria Library", "duration": 1 },
            { "name": "Alexandria Aquarium", "duration": 2 }
          ],
          "entertainment": [
            { "name": "Alexandria National Museum", "duration": 1 },
            { "name": "Alexandria Opera House", "duration": 2 },
            { "name": "Alexandria Bibliotheca", "duration": 1 }
          ]
        },
        Giza: {
          culture: [
            { name: 'Great Sphinx of Giza', duration: 2 },
            { name: 'Chephren Pyramid', duration: 1 },
            { name: 'Khafre Pyramid', duration: 1 }
          ],
          food: [
            { name: 'Ramses Restaurant', duration: 1 },
            { name: 'Pyramid Restaurant', duration: 2 },
            { name: 'Giza Koshary', duration: 1 }
          ],
          outdoors: [
            { name: 'Giza Plateau', duration: 3 },
            { name: 'Solar Boat Museum', duration: 1 },
            { name: 'Giza Zoo', duration: 2 }
          ],
          entertainment: [
            { name: 'Sound & Light Show', duration: 1 },
            { name: 'Giza Camel Ride', duration: 2 },
            { name: 'Giza Pyramids Park', duration: 1 }
          ]
        },
        ShubraElKheima: {
          culture: [
            { name: 'Al-Hussein Mosque', duration: 2 },
            { name: 'Al-Mohandiseen Mall', duration: 2 },
            { name: 'Al-Ahram Park', duration: 1 }
          ],
          food: [
            { name: 'Al-Salam Restaurant', duration: 1 },
            { name: 'Al-Fayrouz Restaurant', duration: 2 },
            { name: 'Al-Shawarma Corner', duration: 1 }
          ],
          outdoors: [
            { name: 'Al-Nakheel Park', duration: 2 },
            { name: 'Al-Amal Park', duration: 1 },
            { name: 'Al-Wadi Park', duration: 2 }
          ],
          entertainment: [
            { name: 'Al-Salam Cinema', duration: 1 },
            { name: 'Al-Mohandiseen Cinema', duration: 2 },
            { name: 'Al-Salam Bowling Center', duration: 1 }
          ]
        },
        PortSaid: {
          culture: [
            { name: 'Port Said Lighthouse', duration: 1 },
            { name: 'Port Said Museum', duration: 2 },
            { name: 'Port Said Clock Tower',duration: 1 }
          ],
          food: [
            { name: 'Al-Basha Restaurant', duration: 1 },
            { name: 'Al-Qamar Restaurant', duration: 2 },
            { name: 'Al-Sultan Restaurant', duration: 1 }
          ],
          outdoors: [
            { name: 'Port Said Port', duration: 2 },
            { name: 'Al-Gomhouria Park', duration: 1 },
            { name: 'Al-Salam Park', duration: 2 }
          ],
          entertainment: [
            { name: 'Al-Salam Cinema', duration: 1 },
            { name: 'Al-Gomhouria Cinema', duration: 2 },
            { name: 'Al-Salam Bowling Center', duration: 1 }
          ]
        },
  
    // Diğer şehirleri burada tanımlayın
  };
  
  export default packages;