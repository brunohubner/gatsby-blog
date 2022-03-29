import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function BlogPost() {
    const { markdownRemark: post } = useStaticQuery(graphql`
        query Post($slug: String) {
            markdownRemark(fields: { slug: { eq: $slug } }) {
                frontmatter {
                    title
                }
                html
            }
        }
    `)
    return (
        <>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </>
    )
}
