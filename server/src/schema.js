const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid."
    tracksForHome: [Track!]!
  }

  "A track is a group of Modules that teaches about a specific topic."
  type Track {
    id: ID!
    "The track's title."
    title: String!
    "The track's main author."
    author: Author!
    "The track's thumbnail image."
    thumbnail: String
    "The track's length in minutes."
    length: Int
    "The number of modules in the track."
    modulesCount: Int
  }

  "Author of a complete Track or a Module."
  type Author {
    id: ID!
    "The author's name."
    name: String!
    "The URL to the author's profile picture."
    photo: String
  }
`;

module.exports = typeDefs;
