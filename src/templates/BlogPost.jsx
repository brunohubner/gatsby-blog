import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import * as S from "../components/Post/styles"
import RecomendedPosts from "../components/RecomendedPosts"
import Comments from "../components/Comments"

export const query = graphql`
    query Post($slug: String) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                description
                date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            }
            fields {
                slug
            }
            html
            timeToRead
        }
    }
`

export default function BlogPost({ data, pageContext }) {
    const post = data.markdownRemark
    const next = pageContext.nextPost
    const previous = pageContext.previousPost
    const url = post.fields.slug
    const title = post.frontmatter.title

    return (
        <Layout>
            <SEO title={post.frontmatter.title} />
            <S.PostHeader>
                <S.PostDate>
                    {post.frontmatter.date} • {post.frontmatter.timeToRead} min
                    de leitura
                </S.PostDate>
                <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
                <S.PostDescription>
                    {post.frontmatter.description}
                </S.PostDescription>
            </S.PostHeader>
            <S.MainContent>
                <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
            </S.MainContent>
            <RecomendedPosts next={next} previous={previous} />
            <Comments url={url} title={title} />
        </Layout>
    )
}
