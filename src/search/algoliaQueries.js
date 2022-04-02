const env = require("../../env")
const jsTimestampToUnixTimestamp = require("../utils/jsTimestampToUnixTimestamp")

const postQuery = `{
    posts: allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }){
      edges {
        node {
          objectID: id
          fields {
            slug
          }
          frontmatter {
            title
            category
            date_timestamp: date
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
          }
          excerpt(pruneLength: 5000)
        }
      }
    }
  }`

function flatten(edges) {
    return edges.map(({ node: { frontmatter, ...rest } }) => ({
        ...frontmatter,
        date_timestamp: jsTimestampToUnixTimestamp(frontmatter.date_timestamp),
        ...rest
    }))
}

const settings = { attributesToSnippet: [`excerpt:20`] }

module.exports = [
    {
        query: postQuery,
        transformer: ({ data }) => flatten(data.posts.edges),
        indexName: env.ALGOLIA_INDEX_NAME,
        settings
    }
]
