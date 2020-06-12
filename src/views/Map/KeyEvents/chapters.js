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
    title: 'Sep 6, 2019: The beginning of a long burning season',
    image: '/static/keyEvents/3.jpg',
    description: `Long Gully Road Fire at Drake, near Tenterfield, starts and burns through to end of October, 
    leaving two people dead and destroying 43 homes. 
    Two other fires in same region destroy and damage homes, and burn through to November 12.`,
    location: {
      center: [152.029, -29.049],
      zoom: 14.02,
      pitch: 0.00,
      bearing: 0.00
    },
    onChapterEnter: [],
    onChapterExit: []
  },
  {
    id: '4',
    title: 'Oct 26, 2019: Biggest ever fire begins',
    image: '/static/keyEvents/4.jpg',
    description: `Single lightning strike in the Wollemi National Park northwest of Sydney sparks a fire that quickly spreads. 
    This becomes the Gospers Mountain Fire, which by December had burned more than 500,000 hectares – the biggest fire 
    from a single ignition point in Australian history.`,
    location: {
      center: [151.556, -32.969],
      zoom: 7.03,
      pitch: 55.50,
      bearing: 7.78
    },
    onChapterEnter: [],
    onChapterExit: []
  },
  {
    id: '5',
    title: 'Oct 30, 2019: Fears for koalas',
    image: '/static/keyEvents/5.jpg',
    description: `Experts fear up to 350 koalas were burned alive in fires that tore through 
    thousands of hectares of bush near Port Macquarie on mid-north NSW coast.`,
    location: {
      center: [153.063, -31.464],
      zoom: 6.90,
      pitch: 0.00,
      bearing: -0.05
    },
    onChapterEnter: [
      {
        layer: 'koalas',
        opacity: 1
      },
      {
        layer: 'port-macquarie',
        opacity: 1
      }
    ],
    onChapterExit: [
      {
        layer: 'koalas',
        opacity: 0
      },
      {
        layer: 'port-macquarie',
        opacity: 0
      }
    ]
  },
  {
    id: '6',
    title: 'November 11, 2019: A state of emergency is declared in New South Wales and Queensland.',
    image: '/static/keyEvents/6.jpg',
    description: 'Catastrophic fire danger declared in Greater Sydney for first time since the introduction of this level. NSW declares state of emergency. Almost 600 schools closed. ',
    location: {
      center: [146.754, -26.920],
      zoom: 3.40,
      pitch: 0,
      bearing: 0
    },
    onChapterEnter: [
      {
        layer: 'state-emergency',
        opacity: 1
      }
    ],
    onChapterExit: [
      {
        layer: 'state-emergency',
        opacity: 0
      }
    ]
  },
  {
    id: '7',
    title: 'November to December 2019: Fires continue to spread.',
    image: '/static/keyEvents/7.jpg',
    description: 'In this true color corrected reflectance imagery from VIIRS/Suomi NPP, you can see the brown smoke from the fires on the southeastern coast of Australia ',
    location: {
      center: [177.809, -41.917],
      zoom: 2.11,
      pitch: 0,
      bearing: 0
    },
    onChapterEnter: [{
      layer: 'smoke',
      opacity: 0.85
    }],
    onChapterExit: [{
      layer: 'smoke',
      opacity: 0
    }]
  }
]

export default chapters
