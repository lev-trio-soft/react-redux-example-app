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

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors
};
