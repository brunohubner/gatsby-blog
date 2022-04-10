require("dotenv").config()
const queries = require("./src/search/algoliaQueries")

module.exports = {
    siteMetadata: {
        title: `Gatsby Blog - Bruno Hubner`,
        description: `Blog Post desenvolvido com Gatsby e React por Bruno Hubner`,
        position: `Full Stack Developer`,
        author: `Bruno Hubner`,
        siteUrl: `https://brunohubner-gatsby-blog.netlify.app`
    },
    plugins: [
        "gatsby-plugin-transition-link",
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        // needs to be the first to work with gatsby-remark-images
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "uploads",
                path: `${__dirname}/static/assets/img`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/posts`
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-relative-images-v2",
                        options: {
                            name: "uploads"
                        }
                    },
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 960,
                            linkImagesToOriginal: false
                        }
                    },
                    "gatsby-remark-lazy-load",
                    "gatsby-remark-prismjs"
                ]
            }
        },
        `gatsby-plugin-image`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-algolia-search`,
            options: {
                appId: process.env.GATSBY_ALGOLIA_APP_ID,
                apiKey: process.env.ALGOLIA_ADMIN_KEY,
                indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
                queries,
                chunkSize: 10000, // default: 1000
                enablePartialUpdates: true
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Gatsby Blog - Bruno Hubner`,
                short_name: `Gatsby Blog - Bruno Hubner`,
                start_url: `/`,
                background_color: `#16202c`,
                theme_color: `#16202c`,
                display: `minimal-ui`,
                icon: `static/assets/img/gatsby-icon.png` // This path is relative to the root of the site.
            }
        },
        `gatsby-plugin-sitemap`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`,
        "gatsby-plugin-netlify-cms"
    ]
}
