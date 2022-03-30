import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PostItem from "../components/PostItem"
import { graphql } from "gatsby"

export const query = graphql`
    query PostList($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: { fields: frontmatter___date, order: DESC }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        background
                        category
                        date(
                            locale: "pt-br"
                            formatString: "DD [de] MMMM [de] YYYY"
                        )
                        description
                        title
                    }
                    timeToRead
                }
            }
        }
    }
`

export default function BlogList(props) {
    const postList = props.data.allMarkdownRemark.edges
    return (
        <Layout>
            <SEO title="Home" />
            {postList.map(
                ({
                    node: {
                        frontmatter: {
                            background,
                            category,
                            date,
                            description,
                            title
                        },
                        timeToRead,
                        fields: { slug }
                    }
                }) => (
                    <PostItem
                        slug={slug}
                        background={background}
                        category={category}
                        date={date}
                        timeToRead={timeToRead}
                        title={title}
                        description={description}
                    />
                )
            )}
        </Layout>
    )
}
