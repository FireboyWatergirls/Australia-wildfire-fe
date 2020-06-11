var chapters = [
  {
    id: '1',
    title: '2019-2020 Australian Bushfires',
    image: '/static/keyEvents/1.jpg',
    description: 'The fires created unprecedented damage, destroying more than 14 million acres of land and killing more than 20 people and an estimated 1 billion animals. Scroll to see where the fires started and how it spread.',
    location: {
      center: [148.194, -27.085],
      zoom: 3.15,
      pitch: 0.00,
      bearing: 0.00
    },
    onChapterEnter: [],
    onChapterExit: []
  },
  {
    id: '2',
    title: 'The fires sparked in September 2019, but the story really began back in 2017. ',
    image: '',
    description: `Droughts plagued Australia in 2017 and 2018. 
    The prolonged drought made this 2019's bushfire season more devastating than ever.
    On the left, there is a Nine-monthly rainfall deficiency map for Australia(1 January to 30 September 2019)`,
    location: {
      center: [148.194, -27.085],
      zoom: 3.15,
      pitch: 0.00,
      bearing: 0.00
    },
    onChapterEnter: [
      {
        layer: 'drought',
        opacity: 0.85
      },
      {
        layer: 'legend',
        opacity: 1
      },
      {
        layer: 'admin_level_3',
        opacity: 0
      },
      {
        layer: 'state-label',
        opacity: 0
      }
    ],
    onChapterExit: [
      {
        layer: 'drought',
        opacity: 0
      },
      {
        layer: 'legend',
        opacity: 0
      },
      {
        layer: 'admin_level_3',
        opacity: 1
      },
      {
        layer: 'state-label',
        opacity: 1
      }
    ]
  },
  {
    id: '3',
    title: 'Indego Bike Share',
    image: '',
    description: 'Indego has been operating in Philadelphia since 20XX. The system initally was focused on Center City, but has expanded service to neighboring areas to support equitable mobility options to the city\'s residents.',
    location: {
      center: [152.029, -29.049],
      zoom: 14.02,
      pitch: 0.00,
      bearing: 0.00
    },
    onChapterEnter: [
    ],
    onChapterExit: [
    ]
  },
  {
    id: 'belmont',
    title: 'Belmont Plateau Trails',
    image: '',
    description: 'A short ride along the Schuylkill River Trail from the Art Museum, Belmont is a twisty, log-ridden rollercoaster of a trail network. It is easy to get turned around, the underbrush is at times impenetrable, and short steep sections come out of nowhere. In other words, it\'s really fun',
    location: {
      center: [-75.20325, 39.99574],
      zoom: 14.99,
      pitch: 44.00,
      bearing: -40.00
    },
    onChapterEnter: [
      {
        layer: 'belmont',
        opacity: 1
      }
    ],
    onChapterExit: [
      {
        layer: 'belmont',
        opacity: 0
      }
    ]
  },
  {
    id: 'wiss',
    title: 'Wissahickon Park Trails',
    image: '',
    description: 'This steep, rocky gorge can be surprisingly technical. Follow the orange and yellow trails to repeatedly climb and descend through the schist hillsides (careful of the cliffs), or stick to the gravel Forbidden Drive for a relaxing ride along the creek. You\'ll forget you\'re in a city.',
    location: {
      center: [-75.21223, 40.05028],
      zoom: 13.08,
      pitch: 47.50,
      bearing: 32.80
    },
    onChapterEnter: [
      {
        layer: 'wissahickon',
        opacity: 1
      }
    ],
    onChapterExit: [
      {
        layer: 'wissahickon',
        opacity: 0
      }
    ]
  },
  {
    id: 'pennypack',
    title: 'Pennypack Park Trails',
    image: '',
    description: 'Pennypack is a great introduction trail system. Not too steep and not too technical, the beautiful wooded park also provides a great escape from urban life. The south side trails are originally bridle trails, so be nice to equestrians and dismount when you approach them.',
    location: {
      center: [-75.05685, 40.06839],
      zoom: 13.73,
      pitch: 43.50,
      bearing: 96.80
    },
    onChapterEnter: [
      {
        layer: 'pennypack',
        opacity: 1
      }
    ],
    onChapterExit: [
      {
        layer: 'pennypack',
        opacity: 0
      }
    ]
  }
]

export default chapters
