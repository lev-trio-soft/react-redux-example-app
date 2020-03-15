const courses = [
  {
    id: 1,
    title: "Kotlin",
    slug: "kotlin",
    authorId: 1,
    category: "Mobile"
  },
  {
    id: 2,
    title: "Data Structures",
    slug: "data-structures",
    authorId: 2,
    category: "CS"
  },
  {
    id: 3,
    title: "Linear Algebra",
    slug: "linear-algebra",
    authorId: 3,
    category: "Math"
  },
  {
    id: 4,
    title: "C++",
    slug: "c++",
    authorId: 1,
    category: "CS"
  },
  {
    id: 5,
    title: "Adaptive Python",
    slug: "adaptive-python",
    authorId: 2,
    category: "CS"
  }
];

const authors = [
  { id: 1, name: "Anjali Wainwright" },
  { id: 2, name: "Raul Hunt" },
  { id: 3, name: "Dexter Logan" }
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: ""
};

const markers = [
  { id: 1, coordinates: [31.812865, 34.653818] },
  { id: 2, coordinates: [31.813, 34.654] },
  { id: 3, coordinates: [31.8121, 34.6531] }
];

const polylines = [
  {
    id: 1,
    coordinates: [
      [31.82, 34.6553],
      [31.83, 34.656],
      [31.84, 34.6558],
      [31.85, 34.6551],
      [31.86, 34.65535]
    ],
    color: "blue"
  }
];

const polygons = [
  {
    id: 1,
    coordinates: [
      [37.786617, -122.404654],
      [37.797843, -122.407057],
      [37.798962, -122.39826],
      [37.794299, -122.395234]
    ],
    color: "red"
  },
  {
    id: 2,
    coordinates: [
      [
        [37, -109.05],
        [41, -109.03],
        [41, -102.05],
        [37, -102.04]
      ], // outer ring
      [
        [37.29, -108.58],
        [40.71, -108.58],
        [40.71, -102.5],
        [37.29, -102.5]
      ] // hole
    ]
  },
  {
    id: 3,
    coordinates: [
      [
        // first polygon
        [
          [37, -109.05],
          [41, -109.03],
          [41, -102.05],
          [37, -102.04]
        ], // outer ring
        [
          [37.29, -108.58],
          [40.71, -108.58],
          [40.71, -102.5],
          [37.29, -102.5]
        ] // hole
      ],
      [
        // second polygon
        [
          [41, -111.03],
          [45, -111.04],
          [45, -104.05],
          [41, -104.05]
        ]
      ]
    ]
  }
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors,
  markers,
  polygons,
  polylines
};
